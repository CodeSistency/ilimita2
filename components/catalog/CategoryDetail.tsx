import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import type { CatalogCategory } from "@/data/catalog"
import { renderCategoryIcon } from "@/components/catalog/icons"

interface CategoryDetailProps {
  category: CatalogCategory
}

export default function CategoryDetail({ category }: CategoryDetailProps) {
  const label = category.domain === "productos" ? "Productos" : "Servicios"

  // Helper to generate IDs for smooth scrolling
  const slugify = (text: string) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

  return (
    <div className="bg-slate-50 pb-24">
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <Link
          href={`/${category.domain}`}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-500 transition-colors hover:border-orange-200 hover:text-orange-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a {category.domain}
        </Link>

        <div className="mt-8 grid gap-8 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[1.2fr_1fr] lg:p-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">
              {renderCategoryIcon({ slug: category.slug, className: "h-4 w-4" })}
              {label}
            </div>
            <h1 className="text-3xl font-black uppercase leading-tight tracking-tight text-slate-900 lg:text-5xl">
              {category.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-slate-600">
              {category.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-xs font-black uppercase tracking-widest text-white transition-colors hover:bg-orange-600"
              >
                Solicitar cotización
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/${category.domain}`}
                className="inline-flex items-center rounded-xl border border-slate-200 px-6 py-3 text-xs font-black uppercase tracking-widest text-slate-600 transition-colors hover:border-slate-300"
              >
                Ver otras categorías
              </Link>
            </div>
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
            <Image src={category.heroImage} alt={category.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[280px_1fr]">
          {/* Sticky Sidebar Navigation (Desktop) */}
          <aside className="sticky top-24 hidden overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm lg:block">
            <div className="bg-slate-900 px-6 py-5">
              <h3 className="text-[11px] font-black uppercase tracking-widest text-white">
                En esta categoría
              </h3>
            </div>
            <nav className="flex flex-col p-3">
              {category.sections.map((section) => (
                <a
                  key={section.name}
                  href={`#${slugify(section.name)}`}
                  className="rounded-xl px-4 py-3 text-sm font-bold text-slate-600 transition-colors hover:bg-slate-50 hover:text-orange-600"
                >
                  {section.name}
                </a>
              ))}
            </nav>
          </aside>

          {/* Catalog Sections Grid */}
          <div className="space-y-16">
            {/* Mobile Quick Links / Accesos Directos (visible only on mobile) */}
            <div className="sticky top-16 z-10 -mx-4 mb-4 bg-slate-50/90 px-4 pb-4 pt-8 backdrop-blur-md lg:hidden sm:-mx-6 sm:px-6">
              <nav className="flex gap-2 overflow-x-auto scrollbar-hide">
                {category.sections.map((section) => (
                  <a
                    key={section.name}
                    href={`#${slugify(section.name)}`}
                    className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm transition-colors hover:border-orange-200 hover:text-orange-600"
                  >
                    {section.name}
                  </a>
                ))}
              </nav>
            </div>

            {category.sections.map((section) => (
              <article key={section.name} id={slugify(section.name)} className="scroll-mt-32">
                <header className="mb-8 flex items-end justify-between border-b border-slate-200 pb-4">
                  <div>
                    <h2 className="text-xl font-black uppercase leading-tight tracking-tight text-slate-900 lg:text-2xl">
                      {section.name}
                    </h2>
                  </div>
                  <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-bold text-slate-600">
                    {section.items.length} {section.items.length === 1 ? "ítem" : "ítems"}
                  </span>
                </header>

                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="group flex flex-col justify-between overflow-hidden rounded-[1.125rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-md hover:ring-1 hover:ring-orange-300"
                    >
                      <div>
                        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
                          {renderCategoryIcon({ slug: category.slug, className: "h-5 w-5" })}
                        </div>
                        <h3 className="text-sm font-bold leading-normal text-slate-800 lg:text-base">
                          {item}
                        </h3>
                      </div>

                      <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                        <Link
                          href="/contacto"
                          className="text-[10px] font-black uppercase tracking-widest text-slate-400 transition-colors hover:text-orange-600 group-hover:text-orange-600"
                        >
                          Cotizar equipo
                        </Link>
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 transition-colors group-hover:bg-orange-100">
                          <ArrowRight className="h-3 w-3 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-orange-600" />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
