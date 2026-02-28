"use client"

import Link from "next/link"
import Image from "next/image"
import { Shield, Users, Target, Award, Rocket, CheckCircle2 } from "lucide-react"

export default function NosotrosPage() {
    return (
        <div className="bg-white pt-24">
            {/* Intro Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <Image src="/images/hero_oil_rig_1772216288580.png" alt="Planta Industrial" fill className="object-cover brightness-50" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">Nuestra Misión</h1>
                    <p className="text-xl md:text-2xl font-light text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        Impulsar la excelencia industrial en Venezuela mediante el suministro de equipos de clase mundial y soporte técnico inigualable.
                    </p>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div className="text-center group">
                        <div className="w-20 h-20 mx-auto bg-slate-100 rounded-3xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:-rotate-12">
                            <Target className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase">Visión</h3>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            Ser el aliado estratégico número uno para el mantenimiento y expansión de la infraestructura energética nacional.
                        </p>
                    </div>
                    <div className="text-center group">
                        <div className="w-20 h-20 mx-auto bg-slate-100 rounded-3xl flex items-center justify-center text-orange-600 mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                            <Users className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase">Equipo</h3>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            Contamos con expertos certificados en campo, dedicados a resolver los desafíos más complejos de nuestros clientes.
                        </p>
                    </div>
                    <div className="text-center group">
                        <div className="w-20 h-20 mx-auto bg-slate-100 rounded-3xl flex items-center justify-center text-green-600 mb-8 group-hover:bg-green-600 group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                            <Shield className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase">Compromiso</h3>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            La seguridad y la calidad son innegociables. Operamos bajo las normas internacionales más exigentes.
                        </p>
                    </div>
                </div>
            </section>

            {/* History / Why Us Detail */}
            <section className="bg-slate-50 py-24 rounded-t-[4rem]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-20">
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl skew-y-3">
                            <Image src="/images/worker_1772216449416.png" alt="Equipo Humano" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                            <div className="absolute inset-0 bg-blue-900/40 group-hover:opacity-0 transition-opacity"></div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-10">
                        <h2 className="text-4xl lg:text-5xl font-black text-[#0a2640] leading-tight tracking-tight uppercase">
                            MÁS DE UNA DÉCADA <br /> <span className="text-orange-500">OPTIMIZANDO PROCESOS</span>
                        </h2>
                        <p className="text-slate-600 leading-loose text-lg font-light">
                            En <span className="font-bold text-slate-900">ilimita2</span>, entendemos que el tiempo de inactividad es el mayor enemigo de la rentabilidad. Por eso, hemos perfeccionado una cadena de suministro que conecta a los fabricantes globales con la realidad operativa venezolana.
                        </p>
                        <div className="space-y-6">
                            {[
                                "Certificación de Calidad API/ASME.",
                                "Soporte post-venta 24/7 en sitio.",
                                "Gestión técnica de logística internacional.",
                                "Personal con amplia experiencia en PDVSA y siderúrgicas."
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <CheckCircle2 className="text-green-500 w-6 h-6 group-hover:scale-125 transition-transform" />
                                    <span className="text-lg font-bold text-slate-700 tracking-tight">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="pt-8">
                            <Link href="/#alianzas" className="inline-block bg-orange-500 text-white px-12 py-5 rounded-2xl font-black text-xs tracking-widest uppercase shadow-2xl shadow-orange-500/40 hover:-translate-y-1 transition-all">
                                Conozca Nuestras Alianzas
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
