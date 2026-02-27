"use client"

import { MapPin, Phone, Mail, Clock, MessageSquare, Send, Flame } from "lucide-react"

export default function ContactoPage() {
    return (
        <div className="bg-slate-50 pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-20 text-center lg:text-left">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase">ESTAMOS DONDE <br /> <span className="text-orange-500">NOS NECESITE</span></h1>
                    <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
                        Atención inmediata para proyectos, mantenimiento o suministros de emergencia. Nuestro equipo técnico está listo para responder.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Contact Details side */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-[#0a2640] text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors"></div>
                            <h3 className="text-xl font-black mb-8 tracking-widest uppercase flex items-center gap-3">
                                Información
                                <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                                    <Flame className="w-3 h-3" />
                                </div>
                            </h3>

                            <div className="space-y-10">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/5">
                                        <MapPin className="w-6 h-6 text-orange-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-slate-300 text-left">Sede Principal</h4>
                                        <p className="text-sm font-medium leading-relaxed text-left">Anaco, Estado Anzoátegui, Venezuela.</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/5">
                                        <Phone className="w-6 h-6 text-orange-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-slate-300 text-left">Atención Telefónica</h4>
                                        <p className="text-sm font-medium text-left">+58 (000) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/5">
                                        <Mail className="w-6 h-6 text-orange-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-slate-300 text-left">Soporte</h4>
                                        <p className="text-sm font-medium text-left">info@ilimita2.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10 flex gap-4">
                                <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-colors">
                                    <MessageSquare className="w-5 h-5" />
                                </button>
                                <span className="text-xs font-black uppercase tracking-widest text-slate-400 self-center">WhatsApp 24/7 disponible</span>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200">
                            <h4 className="font-black text-slate-900 mb-4 tracking-widest uppercase text-left">Horario de Oficina</h4>
                            <div className="flex items-center gap-4 text-slate-500">
                                <Clock className="w-5 h-5 text-orange-500" />
                                <span className="text-sm font-bold">Lun - Vie: 08:00 AM - 05:00 PM</span>
                            </div>
                        </div>
                    </div>

                    {/* Large Contact Form side */}
                    <div className="lg:col-span-2 bg-white p-10 lg:p-16 rounded-[3rem] shadow-sm border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mr-32 -mt-32"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight uppercase text-left">ENVIAR UN MENSAJE</h3>
                            <p className="text-slate-500 mb-10 text-left">Rellene el formulario a continuación y uno de nuestros asesores técnicos le contactará en menos de 24 horas hábiles.</p>

                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2 text-left">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Nombre Completo</label>
                                    <input type="text" className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium text-slate-700" />
                                </div>
                                <div className="space-y-2 text-left">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Correo Electrónico</label>
                                    <input type="email" className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium text-slate-700" />
                                </div>
                                <div className="space-y-2 text-left">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Teléfono</label>
                                    <input type="text" className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium text-slate-700" />
                                </div>
                                <div className="space-y-2 text-left">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Asunto</label>
                                    <input type="text" className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium text-slate-700" />
                                </div>
                                <div className="md:col-span-2 space-y-2 text-left">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Mensaje o Requerimiento</label>
                                    <textarea rows={5} className="w-full bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium text-slate-700 resize-none"></textarea>
                                </div>
                                <div className="md:col-span-2 pt-6">
                                    <button className="w-full lg:w-auto bg-orange-500 hover:bg-orange-600 text-white px-20 py-5 rounded-2xl font-black text-xs tracking-widest uppercase shadow-2xl shadow-orange-500/30 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3">
                                        ENVIAR MENSAJE <Send className="w-4 h-4" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
