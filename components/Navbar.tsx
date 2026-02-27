"use client"

import Link from "next/link"
import { Flame, Settings, AlignJustify } from "lucide-react"

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative flex items-center justify-center text-orange-500">
                            <Settings className="w-10 h-10 group-hover:rotate-90 transition-transform duration-500" />
                            <Flame className="w-5 h-5 absolute z-10 text-orange-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <span className="text-2xl font-black tracking-tight text-slate-900">
                            <span className="text-blue-600">i</span>limita2
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8 text-xs font-black tracking-widest text-slate-600">
                        <Link href="/" className="hover:text-orange-500 transition-colors">INICIO</Link>
                        <Link href="/productos" className="hover:text-orange-500 transition-colors">PRODUCTOS</Link>
                        <Link href="/servicios" className="hover:text-orange-500 transition-colors">SERVICIOS</Link>
                        <Link href="/sectores" className="hover:text-orange-500 transition-colors">SECTORES</Link>
                        <Link href="/nosotros" className="hover:text-orange-500 transition-colors">SOBRE NOSOTROS</Link>
                        <Link href="/contacto" className="hover:text-orange-500 transition-colors">CONTACTO</Link>
                        <Link href="/contacto" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-black shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all hover:-translate-y-0.5 active:scale-95">
                            SOLICITAR COTIZACIÓN
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
