#!/usr/bin/env python3
"""Copy generated Pencil AI images for a batch into public catalog paths."""

from __future__ import annotations

import json
import shutil
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
BATCHES_PATH = ROOT / ".pencil-gen" / "ai_batches.json"
PEN_PATH = ROOT / ".pencil-gen" / "ai-images.pen"
OUTPUT_MAP_PATH = ROOT / ".pencil-gen" / "ai_pencil_result_map.json"


def walk_nodes(node, out):
  if isinstance(node, dict):
    node_id = node.get("id")
    fill = node.get("fill")
    if node_id and isinstance(fill, dict) and fill.get("type") == "image":
      out[node_id] = fill.get("url")
    for child in node.get("children", []) or []:
      walk_nodes(child, out)
  elif isinstance(node, list):
    for child in node:
      walk_nodes(child, out)


def main() -> int:
  if len(sys.argv) != 2:
    print("Usage: capture_pencil_batch.py <batch_index>")
    return 1

  batch_index = int(sys.argv[1])

  batches_obj = json.loads(BATCHES_PATH.read_text(encoding="utf-8"))
  batches = batches_obj["batches"]
  if batch_index < 0 or batch_index >= len(batches):
    print(f"Invalid batch index {batch_index}. Range: 0..{len(batches)-1}")
    return 1

  batch = batches[batch_index]
  pen = json.loads(PEN_PATH.read_text(encoding="utf-8"))
  fill_by_id = {}
  walk_nodes(pen.get("children", []), fill_by_id)

  if OUTPUT_MAP_PATH.exists():
    result_map = json.loads(OUTPUT_MAP_PATH.read_text(encoding="utf-8"))
  else:
    result_map = {}

  for entry in batch:
    slot_id = entry["slotId"]
    rel_fill = fill_by_id.get(slot_id)
    if not rel_fill:
      print(f"Missing fill for slot {slot_id} ({entry['itemId']})")
      continue

    src = (PEN_PATH.parent / rel_fill).resolve()
    dst = (ROOT / "public" / entry["targetRel"].lstrip("/")).resolve()
    dst.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dst)

    result_map[entry["itemId"]] = {
      "targetRel": entry["targetRel"],
      "sourceFill": rel_fill,
      "slotId": slot_id,
      "prompt": entry["prompt"],
      "batch": batch_index,
    }
    print(f"Copied {entry['itemId']} -> {entry['targetRel']}")

  OUTPUT_MAP_PATH.write_text(
    json.dumps(result_map, ensure_ascii=False, indent=2),
    encoding="utf-8",
  )
  print(f"Updated map: {OUTPUT_MAP_PATH}")
  return 0


if __name__ == "__main__":
  raise SystemExit(main())
