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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [isMobileMenuOpen])

    const navLinks = [
        { title: "Inicio", href: "/" },
        { title: "Servicios", href: "/servicios" },
        { title: "Sectores", href: "/sectores" },
        { title: "Nosotros", href: "/nosotros" },
        { title: "Contacto", href: "/contacto" },
    ]

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

                    {/* DESKTOP MENU */}
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

                    {/* MOBILE TOGGLE */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-slate-600 hover:text-orange-500 transition-colors"
                        >
                            <AlignJustify className={`w-8 h-8 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90 text-orange-500' : ''}`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU OVERLAY */}
            <div className={`fixed inset-0 top-20 bg-white z-[100] md:hidden transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                <div className="flex flex-col h-full p-6 space-y-6 overflow-y-auto">
                    <div className="grid grid-cols-1 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-black text-slate-900 uppercase tracking-tight py-4 border-b border-slate-50 flex items-center justify-between group"
                            >
                                {link.title}
                                <ArrowRight className="w-6 h-6 text-slate-200 group-hover:text-orange-500 transition-colors" />
                            </Link>
                        ))}

                        <div className="pt-6">
                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Nuestros Productos</h4>
                            <div className="grid grid-cols-1 gap-3">
                                {categories.map((cat) => (
                                    <Link
                                        key={cat.title}
                                        href={cat.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100"
                                    >
                                        <div className="text-orange-500">{cat.icon}</div>
                                        <span className="text-sm font-bold text-slate-700">{cat.title}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-8">
                        <Link
                            href="/contacto"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-center w-full py-5 bg-orange-500 text-white rounded-2xl font-black text-xs tracking-widest shadow-xl shadow-orange-500/20 active:scale-95 transition-all uppercase"
                        >
                            Solicitar Cotización
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
