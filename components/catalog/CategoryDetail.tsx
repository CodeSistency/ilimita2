"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import type { CatalogCategory } from "@/data/catalog"
import { renderCategoryIcon } from "@/components/catalog/icons"

interface CategoryDetailProps {
  category: CatalogCategory
}

export default function CategoryDetail({ category }: CategoryDetailProps) {
  const [activeSection, setActiveSection] = useState<string>("")

  const label = category.domain === "productos" ? "Productos" : "Servicios"

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      window.scrollTo({
        top: element.offsetTop - 140, // offset for the sticky header
        behavior: prefersReducedMotion ? "auto" : "smooth",
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = category.sections.map(s => document.getElementById(slugify(s.name)))
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(slugify(category.sections[i].name))
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [category.sections])

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

        <div className="mt-6 mb-2 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-orange-600">
            {renderCategoryIcon({ slug: category.slug, className: "h-3.5 w-3.5" })}
            {label}
          </div>
          <h1 className="text-2xl font-black uppercase leading-tight tracking-tight text-slate-900 lg:text-4xl">
            {category.title}
          </h1>
          <p className="mt-4 text-[13px] font-medium leading-relaxed text-slate-600">
            {category.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-white transition-[background-color,transform] duration-300 hover:bg-orange-600 active:scale-[0.98]"
            >
              Solicitar cotización
              <ArrowRight className="h-3 w-3" />
            </Link>
            <Link
              href={`/${category.domain}`}
              className="inline-flex items-center rounded-xl border border-slate-200 px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-slate-600 transition-[border-color,background-color,transform] duration-300 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]"
            >
              Ver otras categorías
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 relative">
          {/* Sticky Sidebar Navigation (Desktop) */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-[120px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-1">
              <h3 className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest pl-2 mb-4">
                En esta categoría
              </h3>
              <div className="space-y-1 flex flex-col">
                {category.sections.map((section) => {
                  const sId = slugify(section.name)
                  const isActive = activeSection === sId
                  return (
                    <button
                      key={section.name}
                      onClick={() => scrollTo(sId)}
                      className={`w-full flex items-center gap-2.5 rounded-xl border border-transparent px-3 py-2.5 text-left transition-[color,background-color,border-color,box-shadow] ${isActive
                        ? "bg-slate-900 text-white shadow-md border-slate-800"
                        : "text-slate-500 hover:bg-slate-50 font-bold hover:border-slate-100"
                        }`}
                    >
                      <span className={`flex-shrink-0 ${isActive ? "text-orange-500" : "text-slate-400"}`}>
                        {renderCategoryIcon({ slug: category.slug, className: "h-4 w-4" })}
                      </span>
                      <span className="text-[11px] font-black uppercase tracking-tight leading-tight">
                        {section.name}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </aside>

          {/* Catalog Sections Grid */}
          <div className="flex-1 space-y-16">
            {/* Mobile Quick Links / Accesos Directos (visible only on mobile) */}
            <div className="sticky top-16 z-10 -mx-4 mb-4 bg-slate-50/90 px-4 pb-4 pt-4 backdrop-blur-md lg:hidden sm:-mx-6 sm:px-6">
              <nav className="flex gap-2 overflow-x-auto custom-scrollbar">
                {category.sections.map((section) => {
                  const sId = slugify(section.name)
                  const isActive = activeSection === sId
                  return (
                    <button
                      key={section.name}
                      onClick={() => scrollTo(sId)}
                      className={`whitespace-nowrap flex-shrink-0 flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-sm transition-colors ${isActive
                        ? "bg-slate-900 border-slate-900 text-white"
                        : "bg-white border-slate-200 text-slate-500 hover:border-slate-300"
                        }`}
                    >
                      <span className={isActive ? "text-orange-500" : "text-slate-400"}>
                        {renderCategoryIcon({ slug: category.slug, className: "h-4 w-4" })}
                      </span>
                      {section.name}
                    </button>
                  )
                })}
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

                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <Link
                      href="/contacto"
                      key={item}
                      className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm cursor-pointer transition-[transform,border-color,box-shadow,ring] duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-md hover:ring-1 hover:ring-orange-300 block w-full active:scale-[0.98]"
                    >
                      <div>
                        <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
                          <div className="scale-75">
                            {renderCategoryIcon({ slug: category.slug, className: "h-4 w-4" })}
                          </div>
                        </div>
                        <h3 className="text-xs font-bold leading-normal text-slate-800">
                          {item}
                        </h3>
                      </div>

                      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3">
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 transition-colors hover:text-orange-600 group-hover:text-orange-600">
                          Cotizar equipo
                        </span>
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-50 transition-colors group-hover:bg-orange-100">
                          <ArrowRight className="h-2.5 w-2.5 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-orange-600" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
