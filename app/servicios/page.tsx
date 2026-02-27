"use client"

import Image from "next/image"
import { ChevronRight, Wrench, Shield, Zap, Clock, ShieldCheck } from "lucide-react"

const services = [
    {
        title: "Mantenimiento Preventivo",
        desc: "Planes programados para evitar paradas no deseadas en su producción.",
        icon: <Clock className="w-8 h-8" />,
        color: "bg-blue-500"
    },
    {
        title: "Servicios de Ingeniería",
        desc: "Diseño y optimización de sistemas de bombeo y tuberías en campo.",
        icon: <Wrench className="w-8 h-8" />,
        color: "bg-orange-500"
    },
    {
        title: "Calibración y Control",
        desc: "Ajuste de instrumentos de medición bajo estándares internacionales.",
        icon: <Zap className="w-8 h-8" />,
        color: "bg-yellow-500"
    },
    {
        title: "Instalación Técnica",
        desc: "Montaje de equipos industriales con personal certificado.",
        icon: <ShieldCheck className="w-8 h-8" />,
        color: "bg-green-500"
    }
]

export default function ServiciosPage() {
    return (
        <div className="bg-white pt-28">
            {/* Hero Services */}
            <section className="bg-[#0a2640] py-20 px-4 sm:px-6 lg:px-8 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full -mr-64 -mt-64"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">SERVICIOS ESPECIALIZADOS</h1>
                    <p className="text-blue-100 text-lg md:text-xl font-medium opacity-80">
                        No solo suministramos equipos; garantizamos que operen al máximo rendimiento con nuestro respaldo técnico.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {services.map((service, i) => (
                        <div key={i} className="flex gap-8 group p-8 rounded-[2rem] hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                            <div className={`flex-shrink-0 w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                                {service.icon}
                            </div>
                            <div className="pt-2">
                                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase leading-none">{service.title}</h3>
                                <p className="text-slate-500 leading-relaxed mb-6">
                                    {service.desc}
                                </p>
                                <button className="flex items-center gap-2 text-orange-600 font-black text-xs tracking-widest uppercase group/btn">
                                    Más información <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technical Feature */}
            <section className="bg-slate-50 py-24 rounded-t-[4rem]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
                        <Image src="/images/hero_electrical_1772216413692.png" alt="Soporte Técnico" fill className="object-cover" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">SOLUCIONES ADAPTADAS A SU NECESIDAD</h2>
                        <div className="space-y-8">
                            <div className="flex gap-5">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm border border-slate-100">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-800 mb-2">Respaldo de Garantía</h4>
                                    <p className="text-sm text-slate-500">Todos nuestros servicios cuentan con garantía técnica extendida sobre mano de obra.</p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm border border-slate-100">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-800 mb-2">Cuadrillas 24/7</h4>
                                    <p className="text-sm text-slate-500">Entendemos la urgencia de la industria. Ofrecemos tiempos de respuesta récord.</p>
                                </div>
                            </div>
                        </div>
                        <button className="mt-12 bg-blue-600 text-white px-10 py-4 rounded-full font-black text-sm tracking-widest shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all">
                            CONTACTAR CON UN TÉCNICO
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
