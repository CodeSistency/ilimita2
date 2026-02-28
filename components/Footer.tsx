import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-[#04111d] pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="mb-8 p-3.5 bg-white rounded-xl inline-flex items-center justify-center shadow-xl shadow-black/20">
                            <div className="relative w-36 h-9">
                                <Image
                                    src="/logo.png"
                                    alt="Ilimita2 Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Suministro confiable y servicios especializados para la industria petrolera e industrial en Venezuela.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-sm tracking-widest mb-6 uppercase">Enlaces</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><Link href="/productos" className="hover:text-orange-500 transition-colors">Productos</Link></li>
                            <li><Link href="/servicios" className="hover:text-orange-500 transition-colors">Servicios</Link></li>
                            <li><Link href="/sectores" className="hover:text-orange-500 transition-colors">Sectores</Link></li>
                            <li><Link href="/nosotros" className="hover:text-orange-500 transition-colors">Nosotros</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-sm tracking-widest mb-6 uppercase">Sede Central</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Anaco, Estado Anzoátegui.<br />
                            Venezuela.<br />
                            contacto@ilimita2.com
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-sm tracking-widest mb-6 uppercase">Atención</h4>
                        <p className="text-slate-400 text-sm mb-4">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                        <Link href="/contacto" className="inline-block border border-orange-500 text-orange-500 px-6 py-2 rounded-lg font-bold text-sm hover:bg-orange-500 hover:text-white transition-all">
                            EMERGENCIAS 24/7
                        </Link>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-xs">
                        © {new Date().getFullYear()} Ilimita2 C.A. Todos los derechos reservados. Rif J-12345678-9
                    </p>
                    <div className="flex gap-6 text-xs text-slate-500">
                        <a href="#" className="hover:text-white">Privacidad</a>
                        <a href="#" className="hover:text-white">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
