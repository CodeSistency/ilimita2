"use client"

import Image from "next/image"
import { ChevronRight, Wrench, Shield, Zap, Clock, ShieldCheck, Truck, Globe, MapPin, Package } from "lucide-react"
import { motion, Variants } from "framer-motion"

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } }
}

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const technicalServices = [
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

const logisticsServices = [
    {
        title: "Procura Nacional",
        features: [
            "Identificación de fabricantes nacionales",
            "Cumplimiento COVENIN",
            "Gestión fiscal local",
            "Optimización de inventarios"
        ],
        icon: <MapPin className="w-8 h-8" />,
        color: "bg-indigo-500"
    },
    {
        title: "Procura Internacional",
        features: [
            "Identificación OEM en EEUU, Europa y Asia",
            "Negociación FOB, EXW, FCA",
            "Gestión de seguros y embalaje especializado",
            "Responsabilidad integral hasta almacén del cliente"
        ],
        icon: <Globe className="w-8 h-8" />,
        color: "bg-cyan-500"
    },
    {
        title: "Logística Nacional",
        features: [
            "Administración de flotas especializadas",
            "Distribución a taladros, estaciones y refinerías",
            "Cumplimiento normativo de transporte"
        ],
        icon: <Truck className="w-8 h-8" />,
        color: "bg-emerald-500"
    },
    {
        title: "Logística Internacional",
        features: [
            "Gestión de carga sobredimensionada",
            "Aduanas y nacionalización",
            "Rutas estratégicas"
        ],
        icon: <Package className="w-8 h-8" />,
        color: "bg-violet-500"
    }
]

export default function ServiciosPage() {
    return (
        <div className="bg-white pt-28">
            {/* Hero Services */}
            <section className="bg-[#0a2640] py-20 px-4 sm:px-6 lg:px-8 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full -mr-64 -mt-64"></div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="relative z-10 max-w-4xl mx-auto"
                >
                    <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-black mb-6 tracking-tight">NUESTRAS LÍNEAS DE SERVICIOS</motion.h1>
                    <motion.p variants={fadeInUp} className="text-blue-100 text-lg md:text-xl font-medium opacity-80 max-w-3xl mx-auto">
                        Proveemos soluciones integrales a través de nuestras dos líneas de servicio principales: Servicios Técnicos y Servicios de Procura y Logística.
                    </motion.p>
                </motion.div>
            </section>

            {/* Line 1: Servicios Técnicos */}
            <section className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-3xl font-black text-[#0a2640] mb-4 tracking-tight uppercase">1. Servicios Técnicos</h2>
                    <div className="w-24 h-1.5 bg-orange-500 rounded-full"></div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5"
                >
                    {technicalServices.map((service, i) => (
                        <motion.div variants={fadeInUp} key={i} className="flex flex-col sm:flex-row gap-4 group p-5 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 shadow-sm hover:shadow-md">
                            <div className={`flex-shrink-0 w-12 h-12 ${service.color} rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-500`}>
                                <div className="scale-75">{service.icon}</div>
                            </div>
                            <div className="pt-0.5 flex flex-col h-full">
                                <h3 className="text-base font-black text-slate-900 mb-2 tracking-tight uppercase leading-none">{service.title}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-grow">
                                    {service.desc}
                                </p>
                                <button className="flex items-center gap-1.5 text-orange-600 font-black text-[9px] tracking-widest uppercase group/btn mt-auto">
                                    Más información <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Line 2: Procura y Logística */}
            <section className="pt-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-3xl font-black text-[#0a2640] mb-4 tracking-tight uppercase">2. Servicios de Procura y Logística</h2>
                    <div className="w-24 h-1.5 bg-orange-500 rounded-full"></div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5"
                >
                    {logisticsServices.map((service, i) => (
                        <motion.div variants={fadeInUp} key={i} className="flex flex-col sm:flex-row gap-4 group p-5 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 shadow-sm hover:shadow-md">
                            <div className={`flex-shrink-0 w-12 h-12 ${service.color} rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-500`}>
                                <div className="scale-75">{service.icon}</div>
                            </div>
                            <div className="pt-0.5 flex-1 flex flex-col h-full">
                                <h3 className="text-base font-black text-slate-900 mb-2 tracking-tight uppercase leading-none">{service.title}</h3>
                                <ul className="space-y-2 mt-1 flex-grow mb-4">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <ChevronRight className="w-3.5 h-3.5 text-orange-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-600 font-medium text-[11px] leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="flex items-center gap-1.5 text-orange-600 font-black text-[9px] tracking-widest uppercase group/btn mt-auto">
                                    Más información <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Technical Feature */}
            <section className="bg-slate-50 py-24 rounded-t-[4rem]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
                >
                    <motion.div variants={fadeInUp} className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                        <Image src="/images/hero_electrical_1772216413692.png" alt="Soporte Técnico" fill className="object-cover" />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">SOLUCIONES ADAPTADAS A SU NECESIDAD</h2>
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
                        <motion.button variants={fadeInUp} className="mt-12 rounded-full bg-blue-600 px-10 py-4 text-sm font-black tracking-widest text-white shadow-xl shadow-blue-500/20 transition-colors hover:bg-blue-700">
                            CONTACTAR CON UN TÉCNICO
                        </motion.button>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    )
}
