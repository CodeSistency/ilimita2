"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ArrowRight, X } from "lucide-react"

import { catalogCategories } from "@/data/catalog"
import { renderCategoryIcon } from "@/components/catalog/icons"

export default function ProductosPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const hasSearchTerm = searchTerm.trim() !== ""

    const categories = useMemo(
        () => catalogCategories.filter((cat) => cat.domain === "productos"),
        []
    )

    // Initialize activeSection with the first category ID if available
    const [activeSection, setActiveSection] = useState<string>(
        categories.length > 0 ? categories[0].id : ""
    )

    const filteredCategories = useMemo(() => {
        if (!hasSearchTerm) return categories

        const lowerSearch = searchTerm.toLowerCase()
        return categories.filter(
            (cat) =>
                cat.title.toLowerCase().includes(lowerSearch) ||
                cat.description.toLowerCase().includes(lowerSearch) ||
                cat.sections.some((sec) =>
                    sec.items.some((item) => item.toLowerCase().includes(lowerSearch))
                )
        )
    }, [hasSearchTerm, searchTerm, categories])

    const scrollTo = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
            window.scrollTo({
                top: element.offsetTop - 140, // offset for the sticky header
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            })
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (hasSearchTerm) return

            const sections = categories.map(c => document.getElementById(c.id))
            const scrollPosition = window.scrollY + 200

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i]
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(categories[i].id)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [hasSearchTerm, categories, activeSection])

    return (
        <div className="min-h-screen bg-slate-50 pb-32 pt-20 font-sans">

            {/* SEARCH FIXED HEADER */}
            <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm py-4 lg:py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                        {/* Search Input */}
                        <div className="relative flex-1">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Buscar equipos, tuberías, válvulas..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-10 text-sm font-bold text-slate-900 placeholder:text-slate-500 placeholder:font-medium shadow-inner transition-[border-color,box-shadow,background-color] focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                            />
                            <button
                                onClick={() => setSearchTerm("")}
                                aria-hidden={!hasSearchTerm}
                                tabIndex={hasSearchTerm ? 0 : -1}
                                className={`absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1.5 transition-[opacity,transform,background-color] duration-200 ease-out ${hasSearchTerm
                                    ? "scale-100 bg-slate-200 opacity-100 hover:bg-slate-300"
                                    : "pointer-events-none scale-90 bg-slate-200/70 opacity-0"
                                    }`}
                            >
                                <X className="h-3 w-3 text-slate-600" />
                            </button>
                        </div>

                        {/* DESKTOP STATUS */}
                        <div className="hidden lg:block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                            {filteredCategories.length} RESULTADOS ENCONTRADOS
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col lg:flex-row gap-12 relative">
                {/* SIDEBAR NAVIGATION (Desktop only index) */}
                <aside className="hidden lg:block w-64 flex-shrink-0">
                    <div className="sticky top-[180px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-1">
                        <h3 className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest pl-2 mb-4">Navegar Categorías</h3>

                        <div className="relative min-h-[320px]">
                            <div
                                className={`space-y-1 transition-[opacity,transform] duration-300 ease-out flex flex-col ${hasSearchTerm
                                    ? "pointer-events-none translate-y-1 opacity-0"
                                    : "translate-y-0 opacity-100"
                                    }`}
                                aria-hidden={hasSearchTerm}
                            >
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => scrollTo(cat.id)}
                                        className={`w-full flex items-center gap-2.5 rounded-xl border border-transparent px-3 py-2.5 text-left transition-[color,background-color,border-color,box-shadow] ${activeSection === cat.id
                                            ? "bg-slate-900 text-white shadow-md border-slate-800"
                                            : "text-slate-500 hover:bg-slate-50 font-bold hover:border-slate-100"
                                            }`}
                                    >
                                        <span className={`flex-shrink-0 ${activeSection === cat.id ? "text-orange-500" : "text-slate-400"}`}>
                                            {renderCategoryIcon({ slug: cat.slug, className: "h-4 w-4" })}
                                        </span>
                                        <span className="text-[11px] font-black uppercase tracking-tight leading-tight">
                                            {cat.shortTitle || cat.title}
                                        </span>
                                    </button>
                                ))}
                            </div>

                            <div
                                className={`absolute inset-x-0 top-0 rounded-xl border border-orange-100 bg-orange-50 p-3 text-[11px] font-bold italic text-orange-600 transition-[opacity,transform] duration-300 ease-out ${hasSearchTerm
                                    ? "translate-y-0 opacity-100"
                                    : "pointer-events-none -translate-y-1 opacity-0"
                                    }`}
                                aria-hidden={!hasSearchTerm}
                            >
                                Búsqueda activa. Limpia el filtro para explorar todas las categorías.
                            </div>
                        </div>
                    </div>
                </aside>

                {/* MAIN CONTENT AREA */}
                <div className="flex-1">

                    {/* MOBILE QUICK ACCESS CHIPS */}
                    <div
                        className={`sticky top-[88px] z-30 -mx-4 px-4 sm:-mx-6 sm:px-6 pt-4 pb-4 mb-8 bg-slate-50/90 backdrop-blur-md lg:hidden transition-all duration-300 ${hasSearchTerm
                            ? "pointer-events-none max-h-0 -translate-y-2 opacity-0 mb-0 pb-0 pt-0"
                            : "translate-y-0 opacity-100"
                            }`}
                        aria-hidden={hasSearchTerm}
                    >
                        <nav className="flex gap-2 overflow-x-auto custom-scrollbar">
                            {categories.map((cat) => (
                                <button
                                    key={`mob-${cat.id}`}
                                    onClick={() => scrollTo(cat.id)}
                                    className={`flex-shrink-0 flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-sm transition-colors ${activeSection === cat.id
                                        ? "bg-slate-900 border-slate-900 text-white"
                                        : "bg-white border-slate-200 text-slate-500 hover:border-slate-300"
                                        }`}
                                >
                                    <span className={activeSection === cat.id ? "text-orange-500" : "text-slate-400"}>
                                        {renderCategoryIcon({ slug: cat.slug, className: "h-4 w-4" })}
                                    </span>
                                    {cat.shortTitle || cat.title}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Empty State */}
                    {hasSearchTerm && filteredCategories.length === 0 && (
                        <div className="mx-auto flex max-w-xl flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm lg:p-12">
                            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50">
                                <Search className="h-8 w-8 text-slate-300" />
                            </div>
                            <h3 className="mb-2 text-xl font-black text-slate-900">
                                Sin coincidencias
                            </h3>
                            <p className="mx-auto mb-6 max-w-xs text-xs font-medium text-slate-500">
                                No encontramos nada para &quot;{searchTerm}&quot;. Intente con palabras más simples o contáctenos directamente.
                            </p>
                            <button
                                onClick={() => setSearchTerm("")}
                                className="rounded-xl bg-slate-900 px-6 py-2.5 text-[10px] font-black tracking-widest text-white transition-colors hover:bg-orange-600"
                            >
                                LIMPIAR BÚSQUEDA
                            </button>
                        </div>
                    )}

                    {/* Grid de Categorías */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-5">
                        {filteredCategories.map((cat) => (
                            <Link
                                id={cat.id}
                                href={`/productos/${cat.slug}`}
                                key={cat.id}
                                className="scroll-mt-[180px] group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md hover:shadow-orange-900/5 outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                            >
                                {/* Imagen de Cabecera */}
                                <div className="relative h-28 w-full overflow-hidden bg-slate-100 sm:h-36">
                                    <Image
                                        src={cat.heroImage}
                                        alt={cat.title}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />
                                    <div className="absolute left-2.5 top-2.5 rounded-full bg-white/90 px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-slate-900 backdrop-blur-md">
                                        {cat.badge}
                                    </div>
                                </div>

                                {/* Contenido de la Tarjeta */}
                                <div className="flex flex-1 flex-col p-4 sm:p-5">
                                    <div className="mb-2.5 flex items-center gap-2">
                                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
                                            {renderCategoryIcon({ slug: cat.slug, className: "h-3.5 w-3.5" })}
                                        </div>
                                        <h2 className="line-clamp-2 text-sm font-black uppercase tracking-tight text-slate-900">
                                            {cat.title}
                                        </h2>
                                    </div>

                                    <p className="mb-5 line-clamp-3 flex-1 text-[11px] font-medium leading-relaxed text-slate-600">
                                        {cat.description}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3.5">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-orange-600 transition-colors group-hover:text-orange-700">
                                            Ver {cat.sections.reduce((acc, curr) => acc + curr.items.length, 0)} Elementos
                                        </span>
                                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-50 transition-colors group-hover:bg-orange-100">
                                            <ArrowRight className="h-2.5 w-2.5 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-orange-600" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

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
