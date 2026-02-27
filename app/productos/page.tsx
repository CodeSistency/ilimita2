"use client"

import Image from "next/image"
import { Search, Filter, ChevronRight, Droplet, Shield, Wrench, Package, Settings } from "lucide-react"

const categories = [
    { name: "Bombas y Equipos", icon: <Droplet className="w-5 h-5" /> },
    { name: "Válvulas Industriales", icon: <Settings className="w-5 h-5" /> },
    { name: "Seguridad Industrial", icon: <Shield className="w-5 h-5" /> },
    { name: "Instrumentación", icon: <Wrench className="w-5 h-5" /> },
    { name: "Suministros Varios", icon: <Package className="w-5 h-5" /> },
]

const products = [
    {
        id: 1,
        name: "Bomba Centrífuga Serie-X",
        category: "Equipos de Bombeo",
        description: "Alta eficiencia para manejo de crudo pesado y fluidos industriales.",
        image: "/images/service_valves_1772216481455.png"
    },
    {
        id: 2,
        name: "Válvula de Compuerta API 6D",
        category: "Válvulas",
        description: "Diseñada para aplicaciones críticas de alta presión en oleoductos.",
        image: "/images/hero_pipes_1772216379422.png"
    },
    {
        id: 3,
        name: "Kit de Seguridad Profesional",
        category: "Seguridad",
        description: "Protección completa con certificación internacional para campo.",
        image: "/images/service_safety_1772216523851.png"
    },
    {
        id: 4,
        name: "Manómetro de Precisión Digital",
        category: "Instrumentación",
        description: "Lectura digital de alta exactitud para sistemas de control.",
        image: "/images/service_instruments_1772216578079.png"
    }
]

export default function ProductosPage() {
    return (
        <div className="bg-slate-50 pt-28 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="mb-12">
                    <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">CATÁLOGO DE PRODUCTOS</h1>
                    <p className="text-slate-500 max-w-2xl">
                        Explore nuestra amplia gama de suministros industriales de la más alta calidad, con certificación internacional para el sector petrolero y energético.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">

                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-64 space-y-8">
                        <div>
                            <h3 className="text-sm font-black text-slate-900 tracking-widest uppercase mb-4">Categorías</h3>
                            <div className="space-y-2">
                                {categories.map((cat, i) => (
                                    <button key={i} className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-orange-50 text-slate-600 hover:text-orange-600 rounded-xl transition-all border border-slate-200 shadow-sm group">
                                        <span className="text-slate-400 group-hover:text-orange-500">{cat.icon}</span>
                                        <span className="text-sm font-bold">{cat.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 bg-[#0a2640] rounded-2xl text-white">
                            <h4 className="font-black mb-3">¿No encuentra lo que busca?</h4>
                            <p className="text-xs text-blue-100 mb-6 leading-relaxed">
                                Podemos gestionar suministros especiales directamente con fabricantes internacionales.
                            </p>
                            <button className="w-full py-3 bg-orange-500 hover:bg-orange-600 rounded-lg text-xs font-black transition-colors">
                                SOLICITUD ESPECIAL
                            </button>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-grow">
                        <div className="flex justify-between items-center mb-8 gap-4 flex-wrap">
                            <div className="relative flex-grow max-w-md">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Buscar productos..."
                                    className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm text-sm"
                                />
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 border border-slate-200 rounded-xl shadow-sm cursor-pointer">
                                <Filter className="w-4 h-4 text-slate-500" />
                                <span className="text-sm font-bold text-slate-700">Ordenar por</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {products.map((p) => (
                                <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                                    <div className="relative h-48 overflow-hidden bg-slate-200">
                                        <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black text-blue-600">
                                            STOCK DISPONIBLE
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <span className="text-[10px] font-black text-orange-500 tracking-widest uppercase mb-2 block">{p.category}</span>
                                        <h4 className="text-lg font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors uppercase tracking-tight leading-tight">{p.name}</h4>
                                        <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                                            {p.description}
                                        </p>
                                        <button className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-orange-500 text-slate-900 hover:text-white font-black py-3 rounded-xl transition-all text-xs tracking-widest">
                                            VER DETALLES <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
