"use client"

import Image from "next/image"
import { Droplet, Flame, Zap, Construction, Globe, Settings } from "lucide-react"

const sectors = [
    {
        title: "Petróleo y Gas",
        desc: "Suministro crítico para perforación, refinación y transporte de hidrocarburos.",
        icon: <Flame className="w-10 h-10" />,
        image: "/images/hero_oil_rig_1772216288580.png"
    },
    {
        title: "Energía y Eléctrico",
        desc: "Componentes para subestaciones y plantas de generación de energía.",
        icon: <Zap className="w-10 h-10" />,
        image: "/images/hero_electrical_1772216413692.png"
    },
    {
        title: "Construcción Pesada",
        desc: "Maquinaria y suministros para grandes obras de infraestructura industrial.",
        icon: <Construction className="w-10 h-10" />,
        image: "/images/hero_tanks_1772216325041.png"
    },
    {
        title: "Tratamiento de Aguas",
        desc: "Soluciones de bombeo y purificación para procesos industriales y municipales.",
        icon: <Droplet className="w-10 h-10" />,
        image: "/images/hero_pipes_1772216379422.png"
    }
]

export default function SectoresPage() {
    return (
        <div className="bg-slate-50 pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase">SECTORES ESTRATÉGICOS</h1>
                    <p className="text-slate-500 text-lg leading-relaxed">
                        Nuestra versatilidad nos permite ofrecer soluciones integrales en los motores económicos más importantes de la región.
                    </p>
                    <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-8 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sectors.map((sector, i) => (
                        <div key={i} className="group relative bg-[#0a2640] rounded-[3rem] overflow-hidden h-[450px] shadow-2xl transition-all hover:shadow-orange-500/10 hover:-translate-y-2 duration-500">
                            {/* Bg Image */}
                            <Image src={sector.image} alt={sector.title} fill className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000 group-hover:opacity-30" />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-orange-500 transition-colors duration-500">
                                    <div className="text-blue-200 group-hover:text-white transition-colors">
                                        {sector.icon}
                                    </div>
                                </div>
                                <h3 className="text-3xl font-black mb-4 tracking-tight uppercase leading-none group-hover:text-orange-500 transition-colors">
                                    {sector.title}
                                </h3>
                                <p className="text-blue-100/70 max-w-sm mb-6 leading-relaxed group-hover:text-white transition-colors">
                                    {sector.desc}
                                </p>
                                <div className="w-10 h-1 bg-white group-hover:w-full transition-all duration-700 opacity-30"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Global Reach Section */}
                <div className="mt-32 bg-white rounded-[4rem] p-12 lg:p-20 shadow-xl border border-slate-100 flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black tracking-widest uppercase mb-6">
                            <Globe className="w-4 h-4" /> Alcance Internacional
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                            CONECTADOS CON LOS MEJORES FABRICANTES DEL MUNDO
                        </h2>
                        <p className="text-slate-500 leading-relaxed mb-10 italic border-l-4 border-orange-500 pl-6">
                            "Nuestra capacidad de respuesta no tiene límites fronterizos. Importamos tecnología de punta para la industria nacional."
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-black text-blue-600 text-3xl mb-1 tracking-tighter">10+</h4>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Países Aliados</p>
                            </div>
                            <div>
                                <h4 className="font-black text-blue-600 text-3xl mb-1 tracking-tighter">50+</h4>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Marcas Globales</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 relative h-[400px]">
                        <Image src="/images/hero_robotics_1772216348787.png" alt="Tecnología" fill className="object-cover rounded-[3rem] shadow-lg" />
                    </div>
                </div>

            </div>
        </div>
    )
}
