"use client"

import { MapPin, Phone, Mail, Clock, MessageSquare, Send, Flame } from "lucide-react"
import { motion, Variants } from "framer-motion"

const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } }
}

const staggerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

export default function ContactoPage() {
    return (
        <div className="bg-slate-50 pt-24 pb-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-10 text-center lg:text-left">
                    <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-3 tracking-tighter uppercase">ESTAMOS DONDE <br /> <span className="text-orange-500">NOS NECESITE</span></h1>
                    <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
                        Atención inmediata para proyectos, mantenimiento o suministros de emergencia. Nuestro equipo técnico está listo para responder.
                    </p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerVariant}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >

                    {/* Contact Details side */}
                    <motion.div variants={fadeUpVariant} className="lg:col-span-1 space-y-4">
                        <div className="bg-[#0a2640] text-white p-6 rounded-2xl shadow-xl relative overflow-hidden group">
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors"></div>
                            <h3 className="text-base font-black mb-4 tracking-widest uppercase flex items-center gap-2.5">
                                Información
                                <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center">
                                    <Flame className="w-2.5 h-2.5" />
                                </div>
                            </h3>

                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/5">
                                        <MapPin className="w-3.5 h-3.5 text-orange-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[10px] uppercase tracking-widest mb-0.5 text-slate-300 text-left">Sede Principal</h4>
                                        <p className="text-[11px] font-medium leading-relaxed text-left">Anaco, Estado Anzoátegui, Venezuela.</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/5">
                                        <Phone className="w-3.5 h-3.5 text-orange-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[10px] uppercase tracking-widest mb-0.5 text-slate-300 text-left">Atención Telefónica</h4>
                                        <p className="text-[11px] font-medium text-left">+58 (000) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/5">
                                        <Mail className="w-3.5 h-3.5 text-orange-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[10px] uppercase tracking-widest mb-0.5 text-slate-300 text-left">Soporte</h4>
                                        <p className="text-[11px] font-medium text-left">info@ilimita2.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                                <button className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-colors">
                                    <MessageSquare className="w-3.5 h-3.5" />
                                </button>
                                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">WhatsApp 24/7 disponible</span>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                            <h4 className="font-black text-slate-900 mb-2 tracking-widest uppercase text-left text-[10px]">Horario de Oficina</h4>
                            <div className="flex items-center gap-2.5 text-slate-500">
                                <Clock className="w-3.5 h-3.5 text-orange-500" />
                                <span className="text-[11px] font-bold">Lun - Vie: 08:00 AM - 05:00 PM</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Large Contact Form side */}
                    <motion.div variants={fadeUpVariant} className="lg:col-span-2 bg-white p-6 lg:p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mr-32 -mt-32"></div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight uppercase text-left">ENVIAR UN MENSAJE</h3>
                            <p className="text-[13px] text-slate-500 mb-6 text-left">Rellene el formulario a continuación y uno de nuestros asesores técnicos le contactará en menos de 24 horas hábiles.</p>

                            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1 text-left">
                                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Nombre Completo</label>
                                    <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-[12px] font-medium text-slate-700 transition-[border-color,box-shadow,background-color] focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                </div>
                                <div className="space-y-1 text-left">
                                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Correo Electrónico</label>
                                    <input type="email" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-[12px] font-medium text-slate-700 transition-[border-color,box-shadow,background-color] focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                </div>
                                <div className="space-y-1 text-left">
                                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Teléfono</label>
                                    <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-[12px] font-medium text-slate-700 transition-[border-color,box-shadow,background-color] focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                </div>
                                <div className="space-y-1 text-left">
                                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Asunto</label>
                                    <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-[12px] font-medium text-slate-700 transition-[border-color,box-shadow,background-color] focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                </div>
                                <div className="md:col-span-2 space-y-1 text-left">
                                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Mensaje o Requerimiento</label>
                                    <textarea rows={4} className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-[12px] font-medium text-slate-700 transition-[border-color,box-shadow,background-color] focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                                </div>
                                <div className="md:col-span-2 pt-3">
                                    <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-3.5 text-[10px] font-black uppercase tracking-widest text-white shadow-xl shadow-orange-500/20 transition-[background-color,transform,box-shadow,color] hover:-translate-y-1 hover:bg-orange-600 active:scale-95 lg:w-auto">
                                        ENVIAR MENSAJE <Send className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    )
}
