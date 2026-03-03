#!/usr/bin/env python3
"""
Fill missing product images in data/catalog.ts using real industrial photos.

What this script does:
1) Finds all product items with `image: undefined`.
2) Builds detailed, Venezuela-focused prompt text per item.
3) Fetches matching photos from Flickr public feed (with deterministic fallback).
4) Saves images under public/catalog/generated/<batch_id>/.
5) Rewrites data/catalog.ts, replacing undefined image fields with saved paths.
6) Writes a manifest and prompt report for traceability.
"""

from __future__ import annotations

import concurrent.futures
import datetime as dt
import hashlib
import json
import os
import re
import unicodedata
import urllib.parse
import urllib.request
from dataclasses import dataclass
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
CATALOG_PATH = ROOT / "data" / "catalog.ts"
PUBLIC_DIR = ROOT / "public"
DOCS_DIR = ROOT / "docs"
GEN_ROOT = PUBLIC_DIR / "catalog" / "generated"

USER_AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Safari/537.36"


@dataclass
class CatalogEntry:
  item_id: str
  item_name: str
  category_slug: str
  category_title: str
  section_name: str


@dataclass
class ImageResult:
  item_id: str
  item_name: str
  category_slug: str
  category_title: str
  section_name: str
  rel_path: str
  abs_path: str
  success: bool
  source_url: str
  tags: list[str]
  prompt: str
  error: str = ""


CATEGORY_SCENES: dict[str, str] = {
  "instrumentacion-campo": (
    "Scene inside an operating refinery and flow station in Venezuela, with instruments mounted on real process lines, "
    "stainless tubing, impulse lines and weathered industrial structures"
  ),
  "sistemas-control-automatizacion": (
    "Scene in a real industrial control environment in Venezuela, including control cabinets, HMI screens, wiring trays "
    "and process area background"
  ),
  "elementos-finales-control-actuacion": (
    "Scene on a live process manifold in a Venezuelan oil facility, showing installed valves and actuators connected to "
    "high-pressure piping"
  ),
  "equipos-bombeo-valvulas-industriales": (
    "Scene in a heavy-duty pumping and transfer station in Venezuela, with skid-mounted equipment, flanged pipelines and "
    "operating industrial infrastructure"
  ),
  "produccion-pozo-cabillas-cabezales": (
    "Scene at a Venezuelan onshore oil well pad with pumpjacks, wellheads, rod yards and dusty tropical conditions"
  ),
  "suministros-electricos-industriales": (
    "Scene in Venezuelan power and oilfield infrastructure, with substations, switchgear rooms and medium-voltage systems"
  ),
  "seguridad-industrial": (
    "Scene in an industrial safety supply warehouse and oilfield jobsite in Venezuela, with workers using certified PPE"
  ),
  "equipos-auxiliares-accesorios": (
    "Scene in a technical workshop and installation area in Venezuela, with fittings, manifolds, cabinets and field-ready "
    "instrumentation accessories"
  ),
}


CATEGORY_TAGS: dict[str, list[str]] = {
  "instrumentacion-campo": ["industrial", "instrumentation", "pipeline", "refinery", "oil", "gas"],
  "sistemas-control-automatizacion": ["industrial", "automation", "control", "plc", "scada", "oil"],
  "elementos-finales-control-actuacion": ["industrial", "valve", "actuator", "pipeline", "process", "oil"],
  "equipos-bombeo-valvulas-industriales": ["industrial", "pump", "valve", "pipeline", "oilfield", "machinery"],
  "produccion-pozo-cabillas-cabezales": ["oilfield", "wellhead", "pumpjack", "drilling", "industrial", "rods"],
  "suministros-electricos-industriales": ["substation", "electrical", "industrial", "power", "switchgear", "oil"],
  "seguridad-industrial": ["industrial", "safety", "ppe", "workers", "warehouse", "oilfield"],
  "equipos-auxiliares-accesorios": ["industrial", "fittings", "instrumentation", "workshop", "pipeline", "steel"],
}


ITEM_TAG_HINTS: list[tuple[str, list[str]]] = [
  ("transformador", ["transformer", "substation"]),
  ("turbina", ["turbine", "powerplant"]),
  ("generador", ["generator", "diesel"]),
  ("bateria", ["battery", "industrial"]),
  ("rectificador", ["rectifier", "electrical"]),
  ("ups", ["ups", "power"]),
  ("gis", ["switchgear", "substation"]),
  ("ais", ["switchgear", "substation"]),
  ("cable", ["cable", "electrical"]),
  ("plc", ["plc", "automation"]),
  ("scada", ["scada", "controlroom"]),
  ("rtu", ["rtu", "telemetry"]),
  ("iluminacion", ["industrial-lighting", "led"]),
  ("anodo", ["anode", "corrosion"]),
  ("catodica", ["cathodic-protection", "pipeline"]),
  ("megohmetro", ["megohmmeter", "electrical-testing"]),
  ("termografica", ["thermal-camera", "inspection"]),
  ("multimetro", ["multimeter", "electrical-testing"]),
  ("analizador", ["industrial-analyzer", "instrumentation"]),
  ("presion", ["pressure-transmitter", "instrumentation"]),
  ("manometro", ["pressure-gauge", "instrumentation"]),
  ("temperatura", ["temperature-sensor", "instrumentation"]),
  ("termopozo", ["thermowell", "instrumentation"]),
  ("pirometro", ["infrared-thermometer", "instrumentation"]),
  ("caudalimetro", ["flowmeter", "pipeline"]),
  ("coriolis", ["coriolis", "flowmeter"]),
  ("vortex", ["vortex-flowmeter", "pipeline"]),
  ("turbina", ["turbine", "machinery"]),
  ("nivel", ["level-transmitter", "tank"]),
  ("radar", ["radar-level", "tank"]),
  ("ultrasonico", ["ultrasonic-sensor", "industrial"]),
  ("capacit", ["capacitive-sensor", "industrial"]),
  ("hidrostatic", ["hydrostatic", "instrumentation"]),
  ("ph", ["water-analysis", "laboratory"]),
  ("orp", ["water-analysis", "industrial"]),
  ("gas", ["gas-detector", "industrial"]),
  ("humedad", ["humidity-sensor", "instrumentation"]),
  ("valvula", ["valve", "pipeline"]),
  ("actuador", ["actuator", "industrial"]),
  ("posicionador", ["valve-positioner", "instrumentation"]),
  ("bomba", ["pump", "industrial"]),
  ("cavidad", ["progressing-cavity-pump", "oilfield"]),
  ("centrifuga", ["centrifugal-pump", "industrial"]),
  ("reciprocante", ["reciprocating-pump", "industrial"]),
  ("electrosumergible", ["esp-pump", "oilfield"]),
  ("cabilla", ["sucker-rod", "oilfield"]),
  ("cabezal", ["wellhead", "oilfield"]),
  ("vfd", ["variable-frequency-drive", "industrial"]),
  ("empacadura", ["industrial-gasket", "seal"]),
  ("sello", ["mechanical-seal", "industrial"]),
  ("overol", ["coveralls", "workers"]),
  ("calzado", ["safety-boots", "ppe"]),
  ("guante", ["protective-gloves", "ppe"]),
  ("auditiva", ["hearing-protection", "ppe"]),
  ("detector", ["gas-detector", "safety"]),
  ("scba", ["scba", "respirator"]),
  ("mascarilla", ["respirator", "ppe"]),
  ("extintor", ["fire-extinguisher", "safety"]),
  ("ducha", ["eyewash", "safety"]),
  ("lavaojos", ["eyewash", "safety"]),
  ("loto", ["lockout-tagout", "safety"]),
  ("manifold", ["manifold", "instrumentation"]),
  ("brida", ["flange", "pipeline"]),
  ("fitting", ["tube-fitting", "instrumentation"]),
  ("barrera", ["isolator", "control-panel"]),
  ("gabinete", ["electrical-cabinet", "industrial"]),
  ("inalambrica", ["wireless-instrumentation", "industrial"]),
]


STOPWORDS = {
  "de",
  "del",
  "la",
  "el",
  "y",
  "en",
  "con",
  "para",
  "los",
  "las",
  "por",
  "una",
  "uno",
  "un",
  "industrial",
}


def normalize_text(value: str) -> str:
  text = unicodedata.normalize("NFD", value)
  text = "".join(ch for ch in text if unicodedata.category(ch) != "Mn")
  text = text.lower()
  text = re.sub(r"[^a-z0-9]+", " ", text).strip()
  return text


def slugify(value: str) -> str:
  return re.sub(r"[^a-z0-9]+", "-", normalize_text(value)).strip("-")


def extract_missing_product_entries(catalog_text: str) -> list[CatalogEntry]:
  entries: list[CatalogEntry] = []
  current_domain = ""
  current_slug = ""
  current_category_title = ""
  current_section = ""

  for line in catalog_text.splitlines():
    domain_match = re.match(r'^\s*domain: "([^"]+)"', line)
    if domain_match:
      current_domain = domain_match.group(1)

    slug_match = re.match(r'^\s*slug: "([^"]+)"', line)
    if slug_match:
      current_slug = slug_match.group(1)

    title_match = re.match(r'^\s*title: "([^"]+)"', line)
    if title_match:
      current_category_title = title_match.group(1)

    section_match = re.match(r'^\s{8}name: "([^"]+)",\s*$', line)
    if section_match:
      current_section = section_match.group(1)

    item_match = re.match(
      r'^\s{10}\{ id: "([^"]+)", name: "([^"]+)", image: undefined(?:, description: "[^"]+")? \},?\s*$',
      line,
    )
    if item_match and current_domain == "productos":
      entries.append(
        CatalogEntry(
          item_id=item_match.group(1),
          item_name=item_match.group(2),
          category_slug=current_slug,
          category_title=current_category_title,
          section_name=current_section,
        )
      )

  return entries


def make_prompt(entry: CatalogEntry) -> str:
  scene = CATEGORY_SCENES.get(
    entry.category_slug,
    "Scene in a real Venezuelan industrial installation with authentic heavy equipment and process infrastructure",
  )

  if entry.category_slug == "seguridad-industrial":
    shot_style = (
      "Use a documentary photo style with real workers wearing PPE, shelves with safety equipment, and natural warehouse lighting"
    )
  elif entry.category_slug == "equipos-auxiliares-accesorios":
    shot_style = (
      "Use a technical close-up composition, main product in sharp focus on an industrial workbench, installation context in background"
    )
  else:
    shot_style = (
      "Use an editorial industrial composition where the product is the clear subject and the operating environment gives context"
    )

  return (
    f"Hyperrealistic industrial photograph of {entry.item_name}. "
    f"Context: {entry.category_title} / {entry.section_name}. "
    f"{scene}. "
    f"{shot_style}. "
    "Venezuela oil and gas setting, tropical daylight, true color, high dynamic range, high texture detail, "
    "authentic steel wear, realistic dust and shadows, no CGI, no illustration, no 3D render, no watermark, no oversized text."
  )


def build_tags(entry: CatalogEntry) -> list[str]:
  tags: list[str] = []
  tags.extend(CATEGORY_TAGS.get(entry.category_slug, ["industrial", "oil", "gas"]))

  norm_name = normalize_text(entry.item_name)
  for token, hint_tags in ITEM_TAG_HINTS:
    if token in norm_name:
      tags.extend(hint_tags)

  for token in norm_name.split():
    if len(token) >= 4 and token not in STOPWORDS:
      tags.append(token)

  tags.extend(["venezuela", "industry", "photography"])

  deduped: list[str] = []
  seen: set[str] = set()
  for tag in tags:
    clean = re.sub(r"[^a-z0-9-]+", "", normalize_text(tag).replace(" ", "-"))
    if not clean:
      continue
    if clean not in seen:
      seen.add(clean)
      deduped.append(clean)

  return deduped[:12]


def fetch_json(url: str, timeout: int = 25) -> Any:
  req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
  with urllib.request.urlopen(req, timeout=timeout) as response:
    return json.loads(response.read().decode("utf-8"))


def search_flickr(tags: list[str], tagmode: str) -> list[dict[str, Any]]:
  params = {
    "tags": ",".join(tags),
    "tagmode": tagmode,
    "format": "json",
    "nojsoncallback": "1",
  }
  url = (
    "https://www.flickr.com/services/feeds/photos_public.gne?"
    + urllib.parse.urlencode(params)
  )
  data = fetch_json(url)
  return data.get("items", [])


def score_candidate(item: dict[str, Any], tags: list[str]) -> int:
  text = " ".join(
    [
      str(item.get("title", "")),
      str(item.get("description", "")),
      str(item.get("tags", "")),
    ]
  )
  norm = normalize_text(text)
  score = 0
  for tag in tags:
    tag_norm = normalize_text(tag)
    if tag_norm and tag_norm in norm:
      score += 2
  if "industrial" in norm:
    score += 2
  if "oil" in norm or "gas" in norm:
    score += 2
  return score


def pick_candidate(items: list[dict[str, Any]], tags: list[str]) -> dict[str, Any] | None:
  if not items:
    return None
  ranked = sorted(items, key=lambda item: score_candidate(item, tags), reverse=True)
  return ranked[0]


def image_urls_from_media(media_url: str) -> list[str]:
  # Flickr media URL often ends with ..._<size>.jpg
  match = re.match(r"^(.*)_([a-z])(\.[a-zA-Z0-9]+)$", media_url)
  if not match:
    return [media_url]
  base = match.group(1)
  ext = match.group(3)
  sizes = ["b", "c", "z", "m"]
  return [f"{base}_{size}{ext}" for size in sizes]


def download_binary(url: str, timeout: int = 40) -> bytes:
  req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
  with urllib.request.urlopen(req, timeout=timeout) as response:
    content_type = response.headers.get("Content-Type", "")
    if "image" not in content_type:
      raise ValueError(f"URL did not return an image: {url} ({content_type})")
    return response.read()


def save_bytes(path: Path, payload: bytes) -> None:
  path.parent.mkdir(parents=True, exist_ok=True)
  path.write_bytes(payload)


def download_flickr_image(item: dict[str, Any], out_path: Path) -> str:
  media = item.get("media", {})
  media_url = media.get("m")
  if not media_url:
    raise ValueError("Candidate has no media URL")

  last_error: Exception | None = None
  for candidate_url in image_urls_from_media(media_url):
    try:
      payload = download_binary(candidate_url)
      if len(payload) < 40_000:
        continue
      save_bytes(out_path, payload)
      return candidate_url
    except Exception as err:  # noqa: BLE001
      last_error = err

  if last_error:
    raise last_error
  raise ValueError("Could not download a valid image")


def download_loremflickr(tags: list[str], item_id: str, out_path: Path) -> str:
  seed = hashlib.sha1(item_id.encode("utf-8")).hexdigest()[:10]
  selected = tags[:6] if tags else ["industrial", "oil", "equipment"]
  url = (
    f"https://loremflickr.com/1280/720/{','.join(selected)}"
    f"?lock={seed}&random={seed}"
  )
  payload = download_binary(url)
  if len(payload) < 30_000:
    raise ValueError("Fallback image too small")
  save_bytes(out_path, payload)
  return url


def find_flickr_candidate(tags: list[str]) -> dict[str, Any] | None:
  search_strategies = [
    (tags[:6], "all"),
    (tags[:8], "any"),
    (tags[:4], "any"),
  ]
  for strategy_tags, mode in search_strategies:
    if not strategy_tags:
      continue
    try:
      items = search_flickr(strategy_tags, mode)
    except Exception:
      continue
    candidate = pick_candidate(items, strategy_tags)
    if candidate:
      return candidate
  return None


def process_entry(entry: CatalogEntry, batch_id: str) -> ImageResult:
  prompt = make_prompt(entry)
  tags = build_tags(entry)
  filename = f"{entry.item_id}.jpg"
  rel_path = f"/catalog/generated/{batch_id}/{filename}"
  abs_path = str(PUBLIC_DIR / rel_path.lstrip("/"))
  out_path = Path(abs_path)

  if out_path.exists() and out_path.stat().st_size > 30_000:
    return ImageResult(
      item_id=entry.item_id,
      item_name=entry.item_name,
      category_slug=entry.category_slug,
      category_title=entry.category_title,
      section_name=entry.section_name,
      rel_path=rel_path,
      abs_path=abs_path,
      success=True,
      source_url="existing-file",
      tags=tags,
      prompt=prompt,
    )

  try:
    candidate = find_flickr_candidate(tags)
    if candidate:
      source_url = download_flickr_image(candidate, out_path)
      return ImageResult(
        item_id=entry.item_id,
        item_name=entry.item_name,
        category_slug=entry.category_slug,
        category_title=entry.category_title,
        section_name=entry.section_name,
        rel_path=rel_path,
        abs_path=abs_path,
        success=True,
        source_url=source_url,
        tags=tags,
        prompt=prompt,
      )
  except Exception as err:  # noqa: BLE001
    flickr_error = str(err)
  else:
    flickr_error = "No candidate found in Flickr feed"

  try:
    fallback_url = download_loremflickr(tags, entry.item_id, out_path)
    return ImageResult(
      item_id=entry.item_id,
      item_name=entry.item_name,
      category_slug=entry.category_slug,
      category_title=entry.category_title,
      section_name=entry.section_name,
      rel_path=rel_path,
      abs_path=abs_path,
      success=True,
      source_url=fallback_url,
      tags=tags,
      prompt=prompt,
      error=f"Flickr fallback used: {flickr_error}",
    )
  except Exception as err:  # noqa: BLE001
    return ImageResult(
      item_id=entry.item_id,
      item_name=entry.item_name,
      category_slug=entry.category_slug,
      category_title=entry.category_title,
      section_name=entry.section_name,
      rel_path=rel_path,
      abs_path=abs_path,
      success=False,
      source_url="",
      tags=tags,
      prompt=prompt,
      error=f"Flickr error: {flickr_error}. Fallback error: {err}",
    )


def replace_image_paths(catalog_text: str, results: list[ImageResult]) -> tuple[str, int]:
  updated = catalog_text
  changed = 0
  for result in results:
    if not result.success:
      continue
    pattern = re.compile(
      rf'(id: "{re.escape(result.item_id)}", name: ".*?", image: )undefined'
    )
    updated, replacements = pattern.subn(
      rf'\1"{result.rel_path}"',
      updated,
      count=1,
    )
    changed += replacements
  return updated, changed


def write_reports(batch_id: str, results: list[ImageResult]) -> None:
  manifest_dir = GEN_ROOT / batch_id
  manifest_dir.mkdir(parents=True, exist_ok=True)
  manifest_path = manifest_dir / "manifest.json"

  payload = [
    {
      "itemId": r.item_id,
      "itemName": r.item_name,
      "categorySlug": r.category_slug,
      "categoryTitle": r.category_title,
      "sectionName": r.section_name,
      "success": r.success,
      "relPath": r.rel_path,
      "absPath": r.abs_path,
      "sourceUrl": r.source_url,
      "tags": r.tags,
      "prompt": r.prompt,
      "error": r.error,
    }
    for r in sorted(results, key=lambda x: (x.category_slug, x.section_name, x.item_name))
  ]
  manifest_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")

  md_lines = [
    "# Prompts de imagen para productos",
    "",
    f"- Batch: `{batch_id}`",
    f"- Fecha: `{dt.datetime.now().isoformat(timespec='seconds')}`",
    "",
  ]

  for r in sorted(results, key=lambda x: (x.category_slug, x.section_name, x.item_name)):
    status = "OK" if r.success else "ERROR"
    md_lines.append(f"## {r.item_name} [{status}]")
    md_lines.append(f"- Categoría: {r.category_title}")
    md_lines.append(f"- Sección: {r.section_name}")
    md_lines.append(f"- Item ID: `{r.item_id}`")
    md_lines.append(f"- Ruta imagen: `{r.rel_path}`")
    md_lines.append(f"- Fuente: `{r.source_url or 'N/A'}`")
    if r.error:
      md_lines.append(f"- Nota: {r.error}")
    md_lines.append(f"- Tags: `{', '.join(r.tags)}`")
    md_lines.append("- Prompt:")
    md_lines.append("")
    md_lines.append(f"  {r.prompt}")
    md_lines.append("")

  DOCS_DIR.mkdir(parents=True, exist_ok=True)
  batch_report = DOCS_DIR / f"catalog-image-prompts-products-{batch_id}.md"
  latest_report = DOCS_DIR / "catalog-image-prompts-products.md"
  report_body = "\n".join(md_lines).strip() + "\n"
  batch_report.write_text(report_body, encoding="utf-8")
  latest_report.write_text(report_body, encoding="utf-8")


def main() -> int:
  if not CATALOG_PATH.exists():
    print(f"Catalog file not found: {CATALOG_PATH}")
    return 1

  catalog_text = CATALOG_PATH.read_text(encoding="utf-8")
  entries = extract_missing_product_entries(catalog_text)
  if not entries:
    print("No missing product images found.")
    return 0

  batch_id = dt.datetime.now().strftime("%Y%m%d_%H%M%S")
  print(f"Missing product images: {len(entries)}")
  print(f"Batch id: {batch_id}")

  results: list[ImageResult] = []
  max_workers = min(10, max(4, os.cpu_count() or 4))
  with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
    futures = [executor.submit(process_entry, entry, batch_id) for entry in entries]
    for idx, future in enumerate(concurrent.futures.as_completed(futures), start=1):
      result = future.result()
      results.append(result)
      state = "ok" if result.success else "error"
      print(f"[{idx}/{len(entries)}] {state} {result.item_id}")

  successful = [r for r in results if r.success]
  failed = [r for r in results if not r.success]

  updated_catalog, changes = replace_image_paths(catalog_text, successful)
  if changes:
    CATALOG_PATH.write_text(updated_catalog, encoding="utf-8")

  write_reports(batch_id, results)

  print("")
  print(f"Catalog items updated: {changes}")
  print(f"Images generated/downloaded: {len(successful)}")
  print(f"Failures: {len(failed)}")
  if failed:
    print("Failed item ids:")
    for item in failed:
      print(f"- {item.item_id}: {item.error}")
    return 2

  print("All missing product placeholders were filled.")
  return 0


if __name__ == "__main__":
  raise SystemExit(main())
