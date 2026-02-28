"use client"

import Image from "next/image"
import { Search, ChevronRight, Activity, Cpu, Power, ShieldCheck, Wrench, ArrowRight, X, PhoneCall } from "lucide-react"
import { useEffect, useState, useMemo } from "react"
import Link from "next/link"

const ic_categories = [
    {
        id: "instrumentos-campo",
        icon: <Activity className="w-5 h-5" />,
        shortTitle: "Instrumentos",
        title: "Instrumentos de campo (Medición)",
        description: "Ofrecemos una amplia gama de sensores y transmisores de alta precisión para las principales variables de proceso, diseñados para resistir los entornos más exigentes (corrosión, altas presiones y temperaturas, atmósferas explosivas ATEX).",
        image: "/images/service_instruments_1772216578079.png",
        subcategories: [
            {
                name: "Medición de Presión",
                items: [
                    "Transmisores de Presión (Relativa, Absoluta y Diferencial).",
                    "Manómetros Industriales.",
                    "Interruptores de Presión (Pressure Switches)."
                ]
            },
            {
                name: "Medición de Temperatura",
                items: [
                    "Sensores de Temperatura.",
                    "Transmisores de Temperatura.",
                    "Termopozos.",
                    "Pirómetros Infrarrojos."
                ]
            },
            {
                name: "Medición de Flujo (Caudal)",
                items: [
                    "Caudalímetros Magnéticos.",
                    "Caudalímetros Ultrasónicos.",
                    "Caudalímetros de Masa (Coriolis).",
                    "Caudalímetros Vortex.",
                    "Caudalímetros de Turbina.",
                    "Elementos Primarios de Flujo."
                ]
            },
            {
                name: "Medición de Nivel",
                items: [
                    "Transmisores de Nivel tipo Radar (Onda Guiada y No Contacto).",
                    "Transmisores de Nivel Ultrasónicos.",
                    "Transmisores de Nivel Capacitivos.",
                    "Medidores de Nivel Hidrostáticos.",
                    "Interruptores de Nivel (Level Switches)."
                ]
            },
            {
                name: "Instrumentación Analítica",
                items: [
                    "Analizadores de pH/ORP y Conductividad.",
                    "Analizadores de Gas.",
                    "Medidores de Humedad/Punto de Rocío."
                ]
            }
        ]
    },
    {
        id: "sistemas-control",
        icon: <Cpu className="w-5 h-5" />,
        shortTitle: "Control",
        title: "Sistemas de Control y Automatización",
        description: "Suministramos e integramos el \"cerebro\" de la planta, desde controladores independientes hasta arquitecturas de control distribuido complejas para supervisión y gestión total.",
        image: "/images/service_valves_1772216481455.png",
        subcategories: [
            {
                name: "Sistemas de Control",
                items: [
                    "Sistemas de Control Distribuido (DCS).",
                    "Controladores Lógicos Programables (PLC).",
                    "Sistemas de Control de Supervisión y Adquisición de Datos (SCADA).",
                    "Unidades Terminales Remotas (RTU) y Edge Devices.",
                    "Sistemas Instrumentados de Seguridad (SIS)."
                ]
            }
        ]
    },
    {
        id: "elementos-finales",
        icon: <Power className="w-5 h-5" />,
        shortTitle: "Válvulas",
        title: "Elementos Finales de Control y Actuación",
        description: "Garantizamos que las acciones de control se ejecuten con precisión y confiabilidad en el campo, regulando el flujo de fluidos de manera segura.",
        image: "/images/hero_pipes_1772216379422.png",
        subcategories: [
            {
                name: "Válvulas y Accesorios",
                items: [
                    "Válvulas de Control.",
                    "Posicionadores de Válvula.",
                    "Accesorios de Válvula."
                ]
            },
            {
                name: "Actuadores",
                items: [
                    "Actuadores Neumáticos (Diafragma/Pistón).",
                    "Actuadores Eléctricos.",
                    "Actuadores Hidráulicos/Electrohidráulicos."
                ]
            }
        ]
    },
    {
        id: "equipos-auxiliares",
        icon: <ShieldCheck className="w-5 h-5" />,
        shortTitle: "Auxiliares",
        title: "Equipos Auxiliares y Accesorios",
        description: "Todos los componentes necesarios para una instalación profesional, segura y confiable de los sistemas de instrumentación y control.",
        image: "/images/service_safety_1772216523851.png",
        subcategories: [
            {
                name: "Equipos y Soluciones",
                items: [
                    "Colectores (Manifolds) y Bridas de Conexión.",
                    "Accesorios de Tubería de Instrumentación (Tubing & Fittings).",
                    "Acondicionadores de Señal y Barreras de Aislamiento.",
                    "Fuentes de Poder y Sistemas de Respaldo (UPS).",
                    "Paneles y Gabinetes de Control.",
                    "Soluciones de Instrumentación Inalámbrica."
                ]
            }
        ]
    },
    {
        id: "servicios",
        icon: <Wrench className="w-5 h-5" />,
        shortTitle: "Servicios",
        title: "Servicios Especializados en I&C",
        description: "Complementamos nuestra oferta de productos con servicios de ingeniería y soporte técnico para asegurar el éxito durante todo el ciclo de vida de la instalación.",
        image: "/images/hero_electrical_1772216413692.png",
        subcategories: [
            {
                name: "Ingeniería y Soporte",
                items: [
                    "Ingeniería de Detalle en I&C.",
                    "Configuración y Programación.",
                    "Instalación y Puesta en Marcha (Commissioning).",
                    "Calibración y Certificación de Instrumentos.",
                    "Mantenimiento Preventivo y Correctivo."
                ]
            }
        ]
    }
]

export default function ProductosPage() {
    const [activeSection, setActiveSection] = useState("instrumentos-campo")
    const [searchTerm, setSearchTerm] = useState("")

    const filteredCategories = useMemo(() => {
        if (!searchTerm.trim()) return ic_categories

        const lowerSearch = searchTerm.toLowerCase()

        return ic_categories.map(cat => {
            const catMatches = cat.title.toLowerCase().includes(lowerSearch) ||
                cat.description.toLowerCase().includes(lowerSearch)

            const filteredSubs = cat.subcategories.map(sub => {
                const subMatches = sub.name.toLowerCase().includes(lowerSearch)

                const filteredItems = sub.items.filter(item =>
                    item.toLowerCase().includes(lowerSearch) || subMatches || catMatches
                )

                return { ...sub, items: filteredItems }
            }).filter(sub => sub.items.length > 0)

            return { ...cat, subcategories: filteredSubs }
        }).filter(cat => cat.subcategories.length > 0)
    }, [searchTerm])

    useEffect(() => {
        const handleScroll = () => {
            if (searchTerm.trim() !== "") return

            const sections = ic_categories.map(c => document.getElementById(c.id))
            const scrollPosition = window.scrollY + 350

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i]
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(ic_categories[i].id)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [searchTerm])

    const scrollTo = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 300,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className="bg-slate-50 min-h-screen text-slate-800 font-sans pb-32 pt-20">

            {/* SEARCH FIXED HEADER - MOBILE FOCUS */}
            <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm py-4 lg:py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                        {/* Search Input */}
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="🔍 Buscar equipos, PLCs, válvulas..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm font-black shadow-inner"
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 bg-slate-200 hover:bg-slate-300 rounded-full transition-colors"
                                >
                                    <X className="w-3 h-3 text-slate-600" />
                                </button>
                            )}
                        </div>

                        {/* MOBILE QUICK ACCESS CHIPS */}
                        {!searchTerm && (
                            <div className="flex lg:hidden overflow-x-auto pb-1 gap-2 custom-scrollbar">
                                {ic_categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => scrollTo(cat.id)}
                                        className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase transition-all border ${activeSection === cat.id
                                                ? "bg-slate-900 border-slate-900 text-white shadow-lg"
                                                : "bg-white border-slate-200 text-slate-500 shadow-sm"
                                            }`}
                                    >
                                        <span className={activeSection === cat.id ? "text-orange-500" : "text-slate-400"}>{cat.icon}</span>
                                        {cat.shortTitle}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* DESKTOP STATUS (Small note or similar) */}
                        <div className="hidden lg:block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                            {filteredCategories.length} RESULTADOS ENCONTRADOS
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col lg:flex-row gap-12 relative">

                {/* SIDEBAR NAVIGATION (Desktop only index) */}
                <aside className="hidden lg:block w-72 flex-shrink-0">
                    <div className="sticky top-[180px] bg-white border border-slate-200 rounded-3xl p-5 shadow-sm space-y-1">
                        <h3 className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest pl-3 mb-5">Categorías</h3>

                        {!searchTerm ? (
                            ic_categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => scrollTo(cat.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all text-left border border-transparent ${activeSection === cat.id
                                            ? "bg-slate-900 text-white shadow-xl shadow-slate-900/10 border-slate-800"
                                            : "text-slate-500 hover:bg-slate-50 font-bold hover:border-slate-100"
                                        }`}
                                >
                                    <span className={`flex-shrink-0 ${activeSection === cat.id ? "text-orange-500" : "text-slate-400"}`}>
                                        {cat.icon}
                                    </span>
                                    <span className="text-xs font-black uppercase tracking-tight leading-tight">
                                        {cat.title}
                                    </span>
                                </button>
                            ))
                        ) : (
                            <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 italic text-xs text-orange-600 font-bold">
                                Navegación deshabilitada durante la búsqueda.
                            </div>
                        )}

                        <div className="mt-8 pt-6 border-t border-slate-100">
                            <Link href="/contacto" className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-100 rounded-2xl hover:bg-blue-100 transition-all group">
                                <div className="p-2 bg-blue-600 rounded-lg text-white">
                                    <PhoneCall className="w-4 h-4" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black text-blue-900 leading-none mb-1">VENTAS TÉCNICAS</div>
                                    <div className="text-[9px] font-bold text-blue-600 uppercase tracking-widest">Atención inmediata</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </aside>

                {/* PRODUCT FEED */}
                <div className="flex-1 space-y-24 lg:space-y-32">

                    {searchTerm && filteredCategories.length === 0 && (
                        <div className="bg-white border text-center border-slate-200 rounded-[2.5rem] p-16 lg:p-24 flex flex-col items-center justify-center shadow-sm">
                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                                <Search className="w-10 h-10 text-slate-200" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2">Sin coincidencias</h3>
                            <p className="text-slate-500 text-sm font-medium max-w-xs mx-auto mb-8">No encontramos nada para &quot;{searchTerm}&quot;. Intente con palabras más simples.</p>
                            <button onClick={() => setSearchTerm("")} className="px-8 py-3 bg-slate-900 text-white text-[10px] font-black tracking-widest rounded-xl hover:bg-orange-600 transition-all">
                                LIMPIAR BÚSQUEDA
                            </button>
                        </div>
                    )}

                    {filteredCategories.map((cat) => (
                        <div key={cat.id} id={cat.id} className="scroll-mt-[200px]">

                            <div className="flex items-center gap-5 mb-8">
                                <div className="p-4 bg-white border border-slate-200 rounded-[1.25rem] shadow-sm text-orange-600 flex-shrink-0">
                                    {cat.icon}
                                </div>
                                <h2 className="text-2xl lg:text-4xl font-black text-slate-900 tracking-tight leading-none uppercase">{cat.title}</h2>
                            </div>

                            {!searchTerm && (
                                <div className="relative h-56 lg:h-96 rounded-[2.5rem] overflow-hidden mb-12 group shadow-xl border border-slate-200 flex-shrink-0">
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10 duration-700"></div>
                                    <Image src={cat.image} alt={cat.title} fill className="object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10"></div>
                                    <div className="absolute bottom-8 left-8 right-8 z-20">
                                        <p className="text-white font-bold text-base lg:text-xl leading-relaxed drop-shadow-md max-w-3xl">
                                            {cat.description}
                                        </p>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-12">
                                {cat.subcategories.map((sub, i) => (
                                    <div key={i} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                        <div className="bg-slate-50/50 px-8 py-6 border-b border-slate-100">
                                            <h3 className="text-sm lg:text-base font-black text-slate-900 tracking-widest uppercase">{sub.name}</h3>
                                        </div>

                                        <div className="divide-y divide-slate-100">
                                            {sub.items.map((item, j) => {
                                                const matchIndex = searchTerm ? item.toLowerCase().indexOf(searchTerm.toLowerCase()) : -1;
                                                const hasMatch = matchIndex !== -1 && searchTerm !== "";

                                                return (
                                                    <Link
                                                        key={j}
                                                        href="/contacto"
                                                        className="flex items-center justify-between px-8 py-6 hover:bg-orange-50/50 transition-colors group"
                                                    >
                                                        <div className="flex items-center gap-5">
                                                            <div className="w-10 h-10 flex-shrink-0 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-white group-hover:shadow-md border border-transparent group-hover:border-slate-100 transition-all text-slate-400 group-hover:text-orange-500">
                                                                <ChevronRight className="w-5 h-5" />
                                                            </div>
                                                            <span className="text-base lg:text-lg font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                                                                {hasMatch ? (
                                                                    <>
                                                                        {item.substring(0, matchIndex)}
                                                                        <span className="bg-orange-100 text-orange-900 px-1 rounded-md">{item.substring(matchIndex, matchIndex + searchTerm.length)}</span>
                                                                        {item.substring(matchIndex + searchTerm.length)}
                                                                    </>
                                                                ) : (
                                                                    item
                                                                )}
                                                            </span>
                                                        </div>

                                                        <div className="hidden sm:flex items-center gap-3 text-[10px] flex-shrink-0 font-black tracking-widest text-slate-400 uppercase opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 duration-300">
                                                            COTIZAR <ArrowRight className="w-4 h-4 text-orange-500" />
                                                        </div>
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* MOBILE FIXED BOTTOM CTA - FLOATING BAR */}
            <div className="lg:hidden fixed bottom-6 left-6 right-6 z-50">
                <Link href="/contacto" className="flex items-center justify-between w-full bg-slate-900 text-white p-2 rounded-2xl shadow-2xl shadow-slate-900/40 border border-white/10">
                    <div className="flex items-center gap-3 pl-4">
                        <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-[10px] font-black tracking-tighter uppercase leading-none mb-1">¿Necesitas Ayuda?</div>
                            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Cotiza ahora mismo</div>
                        </div>
                    </div>
                    <div className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-[10px] font-black transition-colors">
                        CONTACTO
                    </div>
                </Link>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .custom-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    )
}
