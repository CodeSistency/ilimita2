"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { AlignJustify, ChevronDown, ArrowRight, Activity, Cpu, Power, ShieldCheck, Wrench } from "lucide-react"

const categories = [
    { title: "Instrumentos de Campo", icon: <Activity className="w-4 h-4" />, href: "/productos#instrumentos-campo" },
    { title: "Sistemas de Control", icon: <Cpu className="w-4 h-4" />, href: "/productos#sistemas-control" },
    { title: "Elementos Finales", icon: <Power className="w-4 h-4" />, href: "/productos#elementos-finales" },
    { title: "Equipos Auxiliares", icon: <ShieldCheck className="w-4 h-4" />, href: "/productos#equipos-auxiliares" },
    { title: "Servicios Técnicos", icon: <Wrench className="w-4 h-4" />, href: "/productos#servicios" },
]

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="flex items-center group">
                        <div className="relative w-56 h-14">
                            <Image
                                src="/logo.png"
                                alt="Ilimita2 Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8 text-xs font-black tracking-widest text-slate-600">
                        <Link href="/" className="hover:text-orange-500 transition-colors uppercase">Inicio</Link>

                        {/* CLICK DROPDOWN */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className={`flex items-center gap-1 py-8 uppercase transition-colors ${isDropdownOpen ? 'text-orange-600' : 'hover:text-orange-500'}`}
                            >
                                Productos
                                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-orange-600' : ''}`} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute top-[80px] left-0 w-72 bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-100 p-2 z-[60] animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="p-4 mb-1">
                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Catálogo Técnico</h4>
                                        <p className="text-[9px] font-bold text-slate-400">Selecciona una categoría para ver equipos</p>
                                    </div>
                                    <div className="space-y-1">
                                        {categories.map((cat) => (
                                            <Link
                                                key={cat.title}
                                                href={cat.href}
                                                onClick={() => setIsDropdownOpen(false)}
                                                className="flex items-center justify-between p-3.5 rounded-xl hover:bg-slate-50 transition-all group/item border border-transparent hover:border-slate-100"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="text-slate-400 group-hover/item:text-orange-500 transition-colors">
                                                        {cat.icon}
                                                    </div>
                                                    <span className="text-[11px] font-black tracking-tight text-slate-700 group-hover/item:text-slate-900">{cat.title}</span>
                                                </div>
                                                <ArrowRight className="w-3.5 h-3.5 text-orange-500 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="mt-3 p-2 pt-0">
                                        <Link
                                            href="/productos"
                                            onClick={() => setIsDropdownOpen(false)}
                                            className="flex items-center justify-center w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black tracking-widest hover:bg-orange-600 shadow-lg shadow-slate-900/10 hover:shadow-orange-600/20 transition-all uppercase"
                                        >
                                            Ver todo el catálogo
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href="/servicios" className="hover:text-orange-500 transition-colors uppercase">Servicios</Link>
                        <Link href="/sectores" className="hover:text-orange-500 transition-colors uppercase">Sectores</Link>
                        <Link href="/nosotros" className="hover:text-orange-500 transition-colors uppercase">Nosotros</Link>
                        <Link href="/contacto" className="hover:text-orange-500 transition-colors uppercase">Contacto</Link>

                        <Link href="/contacto" className="bg-slate-900 text-white px-7 py-3.5 rounded-xl font-black text-[10px] tracking-widest shadow-xl shadow-slate-900/10 hover:bg-orange-600 hover:shadow-orange-600/20 transition-all hover:-translate-y-0.5 active:scale-95 uppercase">
                            Cotizar ahora
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <AlignJustify className="w-7 h-7 text-slate-600" />
                    </div>
                </div>
            </div>
        </nav>
    )
}
