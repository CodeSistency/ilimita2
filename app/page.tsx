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
          <div className="relative col-span-1 border-r-4 border-white">
            <Image src="/images/hero_instrumentation.png" alt="Industrial Instrumentation" fill className="object-cover" />
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
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-black leading-tight mb-6 tracking-tight drop-shadow-xl text-balance text-left">
              SOLUCIONES INDUSTRIALES <br className="hidden md:block" />Y PETROLERAS SIN LIMITES
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
        <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.3)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="group relative h-[320px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
            <Image src="/images/service_valves_1772216481455.png" alt="Bombas" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012a52] via-[#012a52]/60 to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              <div className="w-10 h-10 flex items-center justify-center">
                <Droplet className="w-8 h-8 opacity-90 drop-shadow-md" />
              </div>
              <div>
                <h3 className="text-xl font-black leading-tight mb-3 tracking-wide text-blue-50">
                  EQUIPOS DE <br /> BOMBEO Y <br /> VÁLVULAS
                </h3>
                <div className="w-8 h-1 bg-white/50 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative h-[320px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
            <Image src="/images/service_safety_1772216523851.png" alt="Seguridad Industrial" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012a52] via-[#012a52]/60 to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              <div className="w-10 h-10 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 opacity-90 drop-shadow-md" />
              </div>
              <div>
                <h3 className="text-xl font-black leading-tight mb-3 tracking-wide text-blue-50">
                  SUMINISTROS DE <br /> SEGURIDAD <br /> INDUSTRIAL
                </h3>
                <div className="w-8 h-1 bg-white/50 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative h-[320px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
            <Image src="/images/service_instruments_1772216578079.png" alt="Instrumentación" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012a52] via-[#012a52]/60 to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              <div className="w-10 h-10 flex items-center justify-center">
                <Wrench className="w-8 h-8 opacity-90 drop-shadow-md" />
              </div>
              <div>
                <h3 className="text-xl font-black leading-tight mb-3 tracking-wide text-blue-50">
                  INSTRUMENTACIÓN <br /> Y CONTROL
                </h3>
                <div className="w-8 h-1 bg-white/50 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          </div>

          {/* Card 4 - New */}
          <div className="group relative h-[320px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
            <Image src="/images/service_pipes.png" alt="Suministro de Tuberías" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012a52] via-[#012a52]/60 to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              <div className="w-10 h-10 flex items-center justify-center">
                <Settings className="w-8 h-8 opacity-90 drop-shadow-md" />
              </div>
              <div>
                <h3 className="text-xl font-black leading-tight mb-3 tracking-wide text-blue-50 uppercase">
                  SUMINISTRO <br /> INTEGRAL DE <br /> TUBERÍAS
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
          <h3 className="text-3xl md:text-3xl font-black text-slate-800 mb-2">
            ¿POR QUÉ ELEGIR <span className="text-orange-500">ILIMITA2?</span>
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
                Contamos con el suministro de equipos y materiales de las mejores marcas del mundo.
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

      {/* Brands Section */}
      <section id="alianzas" className="bg-slate-50 py-24 relative overflow-hidden overflow-x-hidden border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#012a52] uppercase mb-1">NUESTROS ALIADOS</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-800 mb-2">
            MARCAS QUE CONFÍAN EN <span className="text-orange-500">NOSOTROS</span>
          </h3>
          <div className="w-14 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Row 1 - Scroll Left */}
        <div className="flex w-[200%] animate-scroll-left whitespace-nowrap mb-8" style={{ width: 'fit-content' }}>
          {[...row1Brands, ...row1Brands].map((brand, i) => (
            <div key={`row1-${i}`} className="flex-none w-48 h-32 mx-4 flex items-center justify-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0">
              <div className="relative w-full h-full">
                <Image src={`/Imagenes_Soporte/${brand}`} alt="Marca" fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="flex animate-scroll-right whitespace-nowrap" style={{ width: 'fit-content' }}>
          {[...row2Brands, ...row2Brands].map((brand, i) => (
            <div key={`row2-${i}`} className="flex-none w-48 h-32 mx-4 flex items-center justify-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0">
              <div className="relative w-full h-full">
                <Image src={`/Imagenes_Soporte/${brand}`} alt="Marca" fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-slate-50 relative px-4 sm:px-6 lg:px-8 pb-24 z-40">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row bg-[#08223d] border border-white/5">

          {/* Form side */}
          <div className="w-full md:w-1/2 p-8 lg:p-14 relative bg-[#08223d]">
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg p-2.5 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                </div>
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
          <div className="w-full md:w-1/2 bg-[#0a2c4e] relative p-6 lg:p-10 flex flex-col">
            <div className="mb-4 flex items-start gap-3 text-blue-100">
              <MapPin className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
              <div>
                <p className="font-bold text-white">Centro Comercial Jardín Plaza</p>
                <p className="text-sm opacity-80">Local PA 20, Anaco, Anzoátegui</p>
              </div>
            </div>
            <div className="relative flex-1 min-h-[300px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.4448554743204!2d-64.46450350000001!3d9.4239035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dd2a5b571a26e09%3A0xd48634091c286b47!2zQ2VudHJvIENvbWVyY2lhbCBKYXJkaW4gUGxhenphIEFuYWNv!5e0!3m2!1ses!2sve!4v1740756000000!5m2!1ses!2sve"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', inset: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación ILIMITA2 - CC Jardín Plaza Anaco"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const row1Brands = [
  "3M.jpg", "ABB.png", "APC.png", "Castrol.png", "FAG.png", "Flowserve.png",
  "GE.png", "Honeywell.png", "Mobil.png", "NSK.png", "North.png", "PDVSA_Petróleo.png"
]

const row2Brands = [
  "Pdvsa_Gas.png", "Pequiven.png", "Petromonagas.png", "Petropiar.png",
  "Petrosanfelix.png", "RA.png", "Rosemount-Emerson-Logo-Vertical.png",
  "SIEMENS.jpg", "SKF.png", "Sulzer.jpg", "Wika.png", "ashcroft.png", "weir.jpeg"
]
