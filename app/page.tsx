"use client"

import Image from "next/image"
import { Droplet, Flame, Globe, Settings, ShieldCheck, MapPin, Wrench } from "lucide-react"

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-[#0a2640] overflow-hidden min-h-[700px] flex flex-col pt-12">
        {/* Top image collage background */}
        <div className="absolute top-0 left-0 w-full h-[55%] grid grid-cols-4 grid-rows-2">
          <div className="relative row-span-2 col-span-1 border-r-4 border-white">
            <Image src="/images/hero_oil_rig_1772216288580.png" alt="Oil rig" fill className="object-cover" />
          </div>
          <div className="relative col-span-1 border-r-4 border-white">
            <Image src="/images/hero_tanks_1772216325041.png" alt="Tanks" fill className="object-cover" />
          </div>
          <div className="relative col-span-1 border-r-4 border-white flex items-center justify-center bg-white/20 backdrop-blur-sm">
            <Settings className="w-32 h-32 text-slate-800 absolute opacity-30" />
            <div className="z-10 text-6xl font-black text-[#0a2640] drop-shadow-xl" style={{ fontFamily: "sans-serif" }}>∞</div>
          </div>
          <div className="relative col-span-1">
            <Image src="/images/hero_robotics_1772216348787.png" alt="Robotics" fill className="object-cover" />
          </div>
          <div className="relative row-span-1 col-span-2 border-t-4 border-r-4 border-white">
            <Image src="/images/hero_pipes_1772216379422.png" alt="Pipes" fill className="object-cover" />
          </div>
          <div className="relative row-span-1 col-span-1 border-t-4 border-white">
            <Image src="/images/hero_electrical_1772216413692.png" alt="Electrical" fill className="object-cover" />
          </div>
        </div>

        {/* Angled Content Overlay */}
        <div
          className="absolute top-[35%] w-full h-[65%] bg-gradient-to-br from-[#0a2640] to-[#041525] z-10"
          style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)' }}
        ></div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[35vh] pb-32 flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10">

          <div className="w-full lg:w-[60%] text-white pt-8 z-40 relative">
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6 tracking-tight drop-shadow-xl text-balance text-left">
              SOLUCIONES INDUSTRIALES <br className="hidden md:block" />Y PETROLERAS SIN LÍMITES.
            </h1>
            <p className="text-lg md:text-xl text-blue-100 font-medium mb-10 max-w-xl text-balance drop-shadow-md text-left">
              Suministro confiable, servicios especializados para impulsar su producción.
            </p>

            <div className="flex flex-wrap gap-4 relative z-50">
              <button className="border-2 border-blue-400 bg-blue-900/40 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold hover:bg-blue-800 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)] pointer-events-auto cursor-pointer">
                EXPLORAR CATÁLOGO
              </button>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-bold shadow-xl shadow-orange-500/30 hover:-translate-y-1 transition-transform pointer-events-auto cursor-pointer">
                CONOZCA NUESTROS SERVICIOS
              </button>
            </div>
          </div>

          {/* Faux Worker Image pointing */}
          <div className="hidden lg:flex w-full lg:w-[40%] justify-end relative h-[450px] z-30 pointer-events-none -mt-12">
            <div className="relative w-[500px] h-[500px]">
              <Image
                src="/images/worker_1772216449416.png"
                alt="Industrial Worker"
                fill
                className="object-cover mix-blend-screen opacity-90"
                style={{
                  maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%)",
                  WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%)"
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* Categories / Services Cards Section */}
      <section className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 mb-10 bg-white/5 p-4 rounded-3xl backdrop-blur-sm">
        <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.3)] grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group relative h-[350px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
            <Image src="/images/service_valves_1772216481455.png" alt="Bombas" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012a52] via-[#012a52]/60 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
              <div className="w-12 h-12 flex items-center justify-center">
                <Droplet className="w-10 h-10 opacity-90 drop-shadow-md" />
              </div>
              <div>
                <h3 className="text-2xl font-black leading-tight mb-4 tracking-wide text-blue-50">
                  EQUIPOS DE <br /> BOMBEO Y <br /> VÁLVULAS
                </h3>
                <div className="w-8 h-1 bg-white/50 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative h-[350px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
            <Image src="/images/service_safety_1772216523851.png" alt="Seguridad Industrial" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012a52] via-[#012a52]/60 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
              <div className="w-12 h-12 flex items-center justify-center">
                <ShieldCheck className="w-10 h-10 opacity-90 drop-shadow-md" />
              </div>
              <div>
                <h3 className="text-2xl font-black leading-tight mb-4 tracking-wide text-blue-50">
                  SUMINISTROS DE <br /> SEGURIDAD <br /> INDUSTRIAL
                </h3>
                <div className="w-8 h-1 bg-white/50 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative h-[350px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
            <Image src="/images/service_instruments_1772216578079.png" alt="Instrumentación" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012a52] via-[#012a52]/60 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
              <div className="w-12 h-12 flex items-center justify-center">
                <Wrench className="w-10 h-10 opacity-90 drop-shadow-md" />
              </div>
              <div>
                <h3 className="text-2xl font-black leading-tight mb-4 tracking-wide text-blue-50">
                  INSTRUMENTACIÓN <br /> Y CONTROL
                </h3>
                <div className="w-8 h-1 bg-white/50 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us Section & Contact overlay */}
      <section className="bg-white pt-16 pb-48 relative rounded-t-[3rem] lg:rounded-t-[4rem] -mt-16 z-30 ring-1 ring-slate-100 shadow-t-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#012a52] uppercase mb-1">VENTAJAS</h2>
          <h3 className="text-3xl md:text-3xl font-black text-slate-800 mb-2">
            POR QUÉ ELEGIR <span className="text-orange-500">ILIMITA2</span>
          </h3>
          <div className="w-14 h-1 bg-orange-500 mx-auto mb-16 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mb-6 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute inset-0 bg-orange-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <ShieldCheck className="w-10 h-10 relative z-10 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-lg font-black text-[#012a52] mb-3">CONFIABILIDAD</h4>
              <p className="text-slate-500 leading-relaxed text-sm max-w-[200px]">
                Contamos con el material y las herramientas necesarias para asegurar su óptima producción.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mb-6 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute inset-0 bg-orange-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Settings className="w-10 h-10 relative z-10 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-lg font-black text-[#012a52] mb-3">EXPERIENCIA DE CAMPO</h4>
              <p className="text-slate-500 leading-relaxed text-sm max-w-[200px]">
                Suministros amplios y personal capacitado para mejorar su producción.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mb-6 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute inset-0 bg-orange-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Globe className="w-10 h-10 relative z-10 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-lg font-black text-[#012a52] mb-3">RED DE DISTRIBUCIÓN NACIONAL</h4>
              <p className="text-slate-500 leading-relaxed text-sm max-w-[200px]">
                El alcance a nivel nacional es clave para cubrir despachos oportunos en el territorio venezolano.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 mt-[-100px] pb-24 z-40">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row bg-[#08223d] border border-white/5">

          {/* Form side */}
          <div className="w-full md:w-1/2 p-8 lg:p-14 relative bg-[#08223d]">
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              PONERSE EN CONTACTO
            </h3>
            <form className="space-y-3 relative z-10">
              <div>
                <input type="text" placeholder="Datos" className="w-full bg-white text-slate-800 px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-400 rounded-lg shadow-inner ring-1 ring-slate-100" />
              </div>
              <div>
                <input type="text" placeholder="Celular" className="w-full bg-white text-slate-800 px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-400 rounded-lg shadow-inner ring-1 ring-slate-100" />
              </div>
              <div>
                <input type="email" placeholder="Email" className="w-full bg-white text-slate-800 px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-400 rounded-lg shadow-inner ring-1 ring-slate-100" />
              </div>
              <div>
                <textarea placeholder="Contacto o mensaje" rows={3} className="w-full bg-white text-slate-800 px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-400 rounded-lg shadow-inner ring-1 ring-slate-100 resize-none"></textarea>
              </div>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 mt-2 rounded-lg transition-all shadow-lg shadow-orange-500/30 text-sm tracking-wider hover:-translate-y-0.5 transform active:scale-[0.98]">
                ENVIAR REQUERIMIENTO
              </button>
            </form>
          </div>

          {/* Map side */}
          <div className="w-full md:w-1/2 bg-[#0a2c4e] relative p-8 lg:p-12 flex flex-col items-center justify-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 opacity-5 blur-3xl rounded-full"></div>

            <div className="relative w-full aspect-square max-w-[400px]">
              {/* Venezuela SVG Map */}
              <svg viewBox="0 0 500 400" className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <path
                  d="M149.2,60.8c-2.4-5.2-12.8-5.6-18-0.4 c-4,4,1,13.3,3,18 c2.2,5.2,8,9,14,7.5 c2.7-0.7,5.5,1.5,5.5,4.3 c0,32.3,0,64.7,0,97 c0,2.8,2.8,5,5.5,4.3 c9.4-2.5,23,5.5,20.5,14.5 c-3,10.6-23,8.7-27.5,18.5 c-3.2,7-1,19,4.5,24 c18,16.4,72.7,46,95.5,59.5 c10,5.9,23.5,6,33.5,0 c29.7-17.7,112-92,143.5-120 c8.1-7.2,14-17.6,14.5-28.5 c1.1-23.7-27.5-62.5-49.5-69 c-16.1-4.8-29.2,2.3-43,9.5 c-10,5.2-22.3,4-31-3 c-16.4-13.4-32.3-10.4-52.5,1.5 c-10,5.9-22,6-32,0 C229.2,70.8,179.2,70.8,149.2,60.8z"
                  fill="#153e66"
                  stroke="#2b5e91"
                  strokeWidth="2"
                />
              </svg>

              {/* Map Pins */}
              <div className="absolute top-[22%] left-[32%] flex flex-col items-center group cursor-pointer transition-transform hover:scale-110">
                <div className="relative">
                  <MapPin className="w-7 h-7 text-orange-500 fill-orange-500/20" />
                  <div className="absolute inset-0 w-full h-full animate-ping bg-orange-500 rounded-full opacity-30"></div>
                </div>
                <span className="text-[10px] font-bold text-blue-200 mt-1 drop-shadow-md bg-blue-900/40 px-1.5 py-0.5 rounded">Cojedes</span>
              </div>

              <div className="absolute top-[35%] right-[28%] flex flex-col items-center group cursor-pointer transition-transform hover:scale-110">
                <MapPin className="w-7 h-7 text-orange-500 fill-orange-500/20" />
                <span className="text-[10px] font-bold text-blue-200 mt-1 drop-shadow-md bg-blue-900/40 px-1.5 py-0.5 rounded">Anaco</span>
              </div>

              <div className="absolute top-[18%] left-[62%] flex flex-col items-center group cursor-pointer transition-transform hover:scale-110">
                <MapPin className="w-7 h-7 text-orange-500 fill-orange-500/20" />
                <span className="text-[10px] font-bold text-blue-200 mt-1 drop-shadow-md bg-blue-900/40 px-1.5 py-0.5 rounded">Barcelona</span>
              </div>

              <div className="absolute bottom-[30%] left-[55%] flex flex-col items-center group cursor-pointer transition-transform hover:scale-110">
                <MapPin className="w-7 h-7 text-orange-500 fill-orange-500/20" />
                <span className="text-[10px] font-bold text-blue-200 mt-1 drop-shadow-md bg-blue-900/40 px-1.5 py-0.5 rounded">Puerto Ordaz</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
