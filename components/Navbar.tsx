"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { AlignJustify, X, ChevronDown, ArrowRight, Activity, Cpu, Power, ShieldCheck, Wrench } from "lucide-react"


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
        <>
            <nav className="fixed top-0 w-full z-[100] bg-white border-b border-slate-100 h-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex justify-between items-center h-full">
                        <Link href="/" className="flex items-center group relative z-[110]">
                            <div className="relative w-64 h-14 md:w-80 md:h-18 transition-transform hover:scale-[1.02]">
                                <Image
                                    src="/logo.png"
                                    alt="Ilimita2 Logo"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* DESKTOP MENU */}
                        <div className="hidden md:flex items-center space-x-8 text-xs font-black tracking-widest text-slate-600">
                            <Link href="/" className="hover:text-orange-500 transition-colors uppercase">Inicio</Link>

                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className={`flex items-center gap-1 py-8 uppercase transition-colors ${isDropdownOpen ? 'text-orange-600' : 'hover:text-orange-500'}`}
                                >
                                    Productos
                                    <ChevronDown className={`w-3 h-3 transition-transform duration-[var(--motion-duration-fast)] ease-[var(--motion-ease-standard)] ${isDropdownOpen ? 'rotate-180 text-orange-600' : ''}`} />
                                </button>

                                <div
                                    className={`absolute top-[80px] left-0 w-72 origin-top-left rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] transition-[opacity,transform,filter] duration-[var(--motion-duration-standard)] ease-[var(--motion-ease-standard)] z-[110] ${isDropdownOpen
                                        ? 'opacity-100 translate-y-0 scale-100 blur-0'
                                        : 'pointer-events-none opacity-0 -translate-y-2 scale-[0.98] blur-[2px]'
                                        }`}
                                    aria-hidden={!isDropdownOpen}
                                >
                                    <div className="p-4 mb-1">
                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Catálogo Técnico</h4>
                                        <p className="text-[9px] font-bold text-slate-400">Selecciona una categoría</p>
                                    </div>
                                    <div className="space-y-1">
                                        {categories.map((cat) => (
                                            <Link
                                                key={cat.title}
                                                href={cat.href}
                                                onClick={() => setIsDropdownOpen(false)}
                                                tabIndex={isDropdownOpen ? 0 : -1}
                                                className="flex items-center justify-between rounded-xl border border-transparent p-3.5 transition-[background-color,border-color] group/item hover:bg-slate-50 hover:border-slate-100"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="text-slate-400 group-hover/item:text-orange-500 transition-colors">
                                                        {cat.icon}
                                                    </div>
                                                    <span className="text-[11px] font-black tracking-tight text-slate-700 group-hover/item:text-slate-900">{cat.title}</span>
                                                </div>
                                                <ArrowRight className="w-3.5 h-3.5 -translate-x-2 text-orange-500 opacity-0 transition-[opacity,transform] group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="mt-3 p-2 pt-0">
                                        <Link
                                            href="/productos"
                                            onClick={() => setIsDropdownOpen(false)}
                                            tabIndex={isDropdownOpen ? 0 : -1}
                                            className="flex w-full items-center justify-center rounded-xl bg-slate-900 py-4 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-slate-900/10 transition-[background-color,box-shadow,color] hover:bg-orange-600 hover:shadow-orange-600/20"
                                        >
                                            Catálogo Completo
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <Link href="/servicios" className="hover:text-orange-500 transition-colors uppercase">Servicios</Link>
                            <Link href="/sectores" className="hover:text-orange-500 transition-colors uppercase">Sectores</Link>
                            <Link href="/nosotros" className="hover:text-orange-500 transition-colors uppercase">Nosotros</Link>
                            <Link href="/contacto" className="hover:text-orange-500 transition-colors uppercase">Contacto</Link>

                            <Link href="/contacto" className="rounded-xl bg-slate-900 px-7 py-3.5 text-[10px] font-black uppercase tracking-widest text-white shadow-xl shadow-slate-900/10 transition-[background-color,box-shadow,transform,color] hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-orange-600/20 active:scale-95">
                                Cotizar ahora
                            </Link>
                        </div>

                        {/* MOBILE TOGGLE */}
                        <div className="md:hidden relative z-[110]">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 text-slate-600 hover:text-orange-500 transition-colors flex items-center justify-center bg-slate-50 rounded-lg"
                                aria-label="Menu"
                            >
                                <span className="relative block h-7 w-7">
                                    <AlignJustify
                                        className={`absolute inset-0 h-7 w-7 transition-[opacity,transform] duration-[var(--motion-duration-fast)] ease-[var(--motion-ease-standard)] ${isMobileMenuOpen
                                            ? 'opacity-0 scale-90 -rotate-90'
                                            : 'opacity-100 scale-100 rotate-0'
                                            }`}
                                    />
                                    <X
                                        className={`absolute inset-0 h-7 w-7 transition-[opacity,transform] duration-[var(--motion-duration-fast)] ease-[var(--motion-ease-standard)] ${isMobileMenuOpen
                                            ? 'opacity-100 scale-100 rotate-0'
                                            : 'opacity-0 scale-90 rotate-90'
                                            }`}
                                    />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* MOBILE MENU FULL OVERLAY */}
            <div
                className={`fixed inset-0 bg-white z-[90] md:hidden transition-[opacity,transform] duration-[var(--motion-duration-standard)] ease-[var(--motion-ease-standard)] ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'}`}
                style={{ paddingTop: '80px' }}
            >
                <div className="h-full flex flex-col p-6 overflow-y-auto">
                    {/* Navigation Links */}
                    <div className="space-y-1 mb-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-between py-5 border-b border-slate-50 group active:bg-slate-50 transition-colors rounded-lg px-2"
                            >
                                <span className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic">
                                    {link.title}
                                </span>
                                <ArrowRight className="w-6 h-6 text-orange-500 opacity-70" />
                            </Link>
                        ))}
                    </div>

                    {/* Product Categories Section */}
                    <div className="mb-10">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6 pl-2">Portafolio Técnico</h4>
                        <div className="grid grid-cols-1 gap-3">
                            {categories.map((cat) => (
                                <Link
                                    key={cat.title}
                                    href={cat.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-[background-color,border-color,transform] active:scale-[0.98]"
                                >
                                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-orange-500 shadow-sm border border-slate-100">
                                        {cat.icon}
                                    </div>
                                    <span className="text-sm font-black text-slate-800 uppercase tracking-tight">{cat.title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-auto pb-4 pt-10">
                        <Link
                            href="/contacto"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex w-full items-center justify-center rounded-2xl bg-slate-900 py-5 text-[12px] font-black uppercase italic tracking-[0.2em] text-white shadow-xl shadow-slate-900/20 transition-[background-color,color] active:bg-orange-600"
                        >
                            Solicitar Cotización
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
