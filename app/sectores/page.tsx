"use client"

import Image from "next/image"
import { Droplet, Flame, Zap, Construction, Globe } from "lucide-react"

const sectors = [
    {
        title: "Petróleo y Gas",
        desc: "Suministro crítico para perforación, refinación y transporte de hidrocarburos.",
        icon: <Flame className="w-10 h-10" />,
        image: "/nuevas/sector-petroquimico.jpeg"
    },
    {
        title: "Energía y Eléctrico",
        desc: "Componentes para subestaciones y plantas de generación de energía.",
        icon: <Zap className="w-10 h-10" />,
        image: "/venezuela/WhatsApp Image 2026-02-28 at 16.44.24.jpeg"
    },
    {
        title: "Construcción Pesada",
        desc: "Maquinaria y suministros para grandes obras de infraestructura industrial.",
        icon: <Construction className="w-10 h-10" />,
        image: "/nuevas/sector-construccion.jpeg"
    },
    {
        title: "Tratamiento de Aguas",
        desc: "Soluciones de bombeo y purificación para procesos industriales y municipales.",
        icon: <Droplet className="w-10 h-10" />,
        image: "/venezuela/WhatsApp Image 2026-02-28 at 16.44.15.jpeg"
    }
]

export default function SectoresPage() {
    return (
        <div className="bg-slate-50 pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-5 tracking-tight uppercase">SECTORES ESTRATÉGICOS</h1>
                    <p className="text-slate-500 text-base leading-relaxed">
                        Nuestra versatilidad nos permite ofrecer soluciones integrales en los motores económicos más importantes de la región.
                    </p>
                    <div className="w-16 h-1.5 bg-orange-500 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                    {sectors.map((sector, i) => (
                        <div key={i} className="group relative h-[280px] overflow-hidden rounded-2xl bg-[#0a2640] shadow-xl transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-orange-500/10 cursor-pointer active:scale-[0.98]">
                            {/* Bg Image */}
                            <Image src={sector.image} alt={sector.title} fill className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-300 ease-out group-hover:opacity-30" />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 border border-white/10 group-hover:bg-orange-500 transition-colors duration-300">
                                    <div className="text-blue-200 group-hover:text-white transition-colors scale-75">
                                        {sector.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-black mb-2 tracking-tight uppercase leading-none group-hover:text-orange-500 transition-colors">
                                    {sector.title}
                                </h3>
                                <p className="text-blue-100/70 text-xs max-w-sm mb-4 leading-relaxed group-hover:text-white transition-colors">
                                    {sector.desc}
                                </p>
                                <div className="h-1 w-8 bg-white opacity-30 transition-[width] duration-700 group-hover:w-full"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Global Reach Section */}
                <div className="mt-24 bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100 flex flex-col lg:flex-row items-center gap-10">
                    <div className="w-full lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black tracking-widest uppercase mb-5">
                            <Globe className="w-3.5 h-3.5" /> Alcance Internacional
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                            CONECTADOS CON LOS MEJORES FABRICANTES DEL MUNDO
                        </h2>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8 italic border-l-4 border-orange-500 pl-4">
                            &quot;Nuestra capacidad de respuesta no tiene límites fronterizos. Importamos tecnología de punta para la industria nacional.&quot;
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-black text-blue-600 text-2xl mb-1 tracking-tighter">10+</h4>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Países Aliados</p>
                            </div>
                            <div>
                                <h4 className="font-black text-blue-600 text-2xl mb-1 tracking-tighter">50+</h4>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Marcas Globales</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 relative h-[300px]">
                        <Image src="/nuevas/fabricantes-mundo.jpeg" alt="Tecnología" fill className="object-cover rounded-2xl shadow-lg" />
                    </div>
                </div>

            </div>
        </div>
    )
}
