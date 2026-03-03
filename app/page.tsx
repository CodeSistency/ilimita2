"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Droplet, Globe, Settings, ShieldCheck, MapPin, Wrench,
  Activity, Cpu, ChevronRight, ArrowRight
} from "lucide-react"
import { motion, Variants } from "framer-motion"



const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
}

const fadeUpText: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } }
}

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4, ease: "easeOut" } }
}

const slideInLeftVariant: Variants = {
  hidden: { opacity: 0, x: -40, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.4, ease: "easeOut" } }
}

const slideInRightVariant: Variants = {
  hidden: { opacity: 0, x: 40, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.4, ease: "easeOut" } }
}

const staggerText: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-[#08223d] overflow-hidden min-h-[650px] lg:min-h-[750px] flex flex-col">
        {/* TOP BACKGROUND PANELS (Heights go down to 45%) */}
        <div className="absolute top-0 left-0 w-full h-[50%] lg:h-[45%] bg-white z-0">

          {/* Panel 1 (Left Image - Pipeline) */}
          <motion.div
            initial="hidden" animate="visible" variants={slideInLeftVariant}
            className="absolute top-0 left-0 w-full h-full"
            style={{ clipPath: 'polygon(0 0, calc(34% - 4px) 0, calc(42% - 4px) 100%, 0 100%)' }}>
            <Image src="/catalog/brain/c8839c20-9824-4537-9cd0-866a6ab3e772/pip_tubing_ven_1772498443475.png" alt="Tuberías petroleras" fill className="object-cover" />
          </motion.div>

          {/* Panel 2 (Middle Logo) */}
          <div className="absolute top-0 left-0 w-full h-full"
            style={{ clipPath: 'polygon(calc(34% + 4px) 0, calc(66% - 4px) 0, calc(58% - 4px) 100%, calc(42% + 4px) 100%)' }}>
            {/* Background Image - Changed to a different one for testing */}
            <Image src="/venezuela/WhatsApp Image 2026-02-28 at 16.44.18.jpeg" alt="Fondo Central" fill className="object-cover" />

            {/* Centered Radial White Gradient for Logo Readability (Smaller Destello) - Reduced opacity/strength */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_40%_25%_at_50%_48%,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0)_75%)] lg:bg-[radial-gradient(ellipse_35%_20%_at_50%_48%,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0)_75%)]"></div>

            <div className="relative w-full h-[70%] flex items-center justify-center pt-24 lg:pt-28 z-20">
              <div className="relative w-[50%] lg:w-[45%] h-[80px] lg:h-[100px]">
                <Image src="/logo.png" alt="Logo" fill className="object-contain drop-shadow-xl" />
              </div>
            </div>
          </div>

          {/* Panel 3 (Right Image - Servicios Técnicos) */}
          <motion.div
            initial="hidden" animate="visible" variants={slideInRight}
            className="absolute top-0 left-0 w-full h-full"
            style={{ clipPath: 'polygon(calc(66% + 4px) 0, 100% 0, 100% 100%, calc(58% + 4px) 100%)' }}>
            <Image src="/images/service_valves_1772216481455.png" alt="Servicios especializados" fill className="object-cover" />
          </motion.div>
        </div>

        {/* BOTTOM BLUE AREA */}
        {/* White Border layer - V-shape pointing down in the middle */}
        <div className="absolute bottom-0 left-0 w-full h-[75%] lg:h-[75%] bg-white z-[9]"
          style={{ clipPath: 'polygon(0 0, 50% 15%, 100% 0, 100% 100%, 0 100%)' }}>
        </div>

        {/* DARK BLUE OVERLAY inside the white border */}
        <div className="absolute bottom-0 left-0 w-full h-[75%] lg:h-[75%] bg-[#08223d] z-10"
          style={{ clipPath: 'polygon(0 calc(0% + 8px), 50% calc(15% + 8px), 100% calc(0% + 8px), 100% 100%, 0 100%)' }}>

          {/* Left Lateral Faded Image */}
          <div className="absolute top-0 left-0 w-[40%] h-full opacity-90">
            <Image src="/images/service_pipes.png" alt="Servicio de tuberías" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#08223d]/40 to-[#08223d]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#08223d] via-transparent to-transparent opacity-20"></div>
          </div>

          {/* Right Lateral Faded Image */}
          <div className="absolute top-0 right-0 w-[40%] h-full opacity-90">
            <Image src="/images/service_instruments_1772216578079.png" alt="Servicios de instrumentación" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#08223d]/40 to-[#08223d]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#08223d] via-transparent to-transparent opacity-20"></div>
          </div>

          {/* Dark Vignette to ensure center text pop */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,34,61,0)_20%,rgba(8,34,61,0.8)_70%,rgba(8,34,61,1)_100%)]"></div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,20,33,0)_0%,rgba(5,20,33,0.8)_100%)] mix-blend-multiply opacity-50"></div>
        </div>

        {/* TEXT CONTENT LAYER */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-16 lg:pb-24 pt-[280px] lg:pt-[300px]">
          <motion.div
            initial="hidden" animate="visible" variants={staggerText}
            className="w-full text-white relative flex flex-col items-center text-center"
          >
            <motion.h1 variants={fadeUpText} className="text-3xl md:text-4xl lg:text-[2.8rem] font-black leading-[1.1] mb-5 tracking-tight drop-shadow-2xl">
              SOLUCIONES INDUSTRIALES <br className="hidden md:block" />
              Y PETROLERAS SIN LÍMITES.
            </motion.h1>
            <motion.p variants={fadeUpText} className="text-sm md:text-lg text-blue-50/90 font-medium mb-8 max-w-2xl leading-relaxed drop-shadow-md">
              Suministro confiable, servicios especializados para impulsar su producción.
            </motion.p>
            <motion.div variants={fadeUpText} className="flex flex-col sm:flex-row gap-4 relative z-50">
              <Link href="/productos" className="flex items-center justify-center rounded-full border-[1.5px] border-blue-400 bg-[#08223d]/20 px-8 py-3 text-[13px] font-bold tracking-widest text-white shadow-lg backdrop-blur-md transition-[background-color,color,border-color,transform] duration-300 hover:border-white hover:bg-white hover:text-[#08223d] active:scale-[0.98]">
                EXPLORAR CATÁLOGO
              </Link>
              <Link href="/servicios" className="flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 text-[13px] font-bold tracking-widest text-white shadow-xl shadow-orange-500/30 transition-[color,box-shadow,transform] duration-300 hover:from-orange-400 hover:to-orange-500 active:scale-[0.98]">
                CONOZCA NUESTROS SERVICIOS
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories / Services Cards Section */}
      <section className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 mb-10 bg-white/5 p-4 rounded-3xl backdrop-blur-sm">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="bg-white p-6 sm:p-10 rounded-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.3)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >

          {/* Card 1 */}
          <motion.div variants={fadeUpVariant} className="group relative h-[320px] rounded-2xl overflow-hidden shadow-xl cursor-pointer active:scale-[0.98] transition-transform duration-300">
            <Image src="/catalog/ai-pencil/20260302/bombas-centr-fugas.png" alt="Equipos de bombeo" fill className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.05]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012a52] via-[#012a52]/60 to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              <div className="w-10 h-10 flex items-center justify-center">
                <Droplet className="w-8 h-8 opacity-90 drop-shadow-md" />
              </div>
              <div>
                <h3 className="text-xl font-black leading-tight mb-3 tracking-wide text-blue-50">
                  EQUIPOS DE <br /> BOMBEO Y <br /> VÁLVULAS
                </h3>
                <div className="h-1 w-8 bg-white/50 transition-[width] duration-700 group-hover:w-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeUpVariant} className="group relative h-[320px] rounded-2xl overflow-hidden shadow-xl cursor-pointer active:scale-[0.98] transition-transform duration-300">
            <Image src="/catalog/ai-pencil/20260302/overoles-ign-fugos.png" alt="Seguridad industrial" fill className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.05]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012a52] via-[#012a52]/60 to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              <div className="w-10 h-10 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 opacity-90 drop-shadow-md" />
              </div>
              <div>
                <h3 className="text-xl font-black leading-tight mb-3 tracking-wide text-blue-50">
                  SUMINISTROS DE <br /> SEGURIDAD <br /> INDUSTRIAL
                </h3>
                <div className="h-1 w-8 bg-white/50 transition-[width] duration-700 group-hover:w-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeUpVariant} className="group relative h-[320px] rounded-2xl overflow-hidden shadow-xl cursor-pointer active:scale-[0.98] transition-transform duration-300">
            <Image src="/catalog/ai-pencil/20260302/transmisores-de-presi-n-relativa-absoluta-y-diferencial.png" alt="Instrumentación y control" fill className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.05]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012a52] via-[#012a52]/60 to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              <div className="w-10 h-10 flex items-center justify-center">
                <Wrench className="w-8 h-8 opacity-90 drop-shadow-md" />
              </div>
              <div>
                <h3 className="text-xl font-black leading-tight mb-3 tracking-wide text-blue-50">
                  INSTRUMENTACIÓN <br /> Y CONTROL
                </h3>
                <div className="h-1 w-8 bg-white/50 transition-[width] duration-700 group-hover:w-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Card 4 - New */}
          <motion.div variants={fadeUpVariant} className="group relative h-[320px] rounded-2xl overflow-hidden shadow-xl cursor-pointer active:scale-[0.98] transition-transform duration-300">
            <Image src="/catalog/brain/c8839c20-9824-4537-9cd0-866a6ab3e772/pip_line_ven_v2_1772498521591.png" alt="Suministro de tuberías petroleras" fill className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.05]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012a52] via-[#012a52]/60 to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              <div className="w-10 h-10 flex items-center justify-center">
                <Settings className="w-8 h-8 opacity-90 drop-shadow-md" />
              </div>
              <div>
                <h3 className="text-xl font-black leading-tight mb-3 tracking-wide text-blue-50 uppercase">
                  SUMINISTRO <br /> INTEGRAL DE <br /> TUBERÍAS
                </h3>
                <div className="h-1 w-8 bg-white/50 transition-[width] duration-700 group-hover:w-full"></div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* Why Choose Us Section & Contact overlay */}
      <section className="bg-white pt-16 pb-24 relative rounded-t-[3rem] lg:rounded-t-[4rem] -mt-16 z-30 ring-1 ring-slate-100 shadow-t-xl overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16"
        >
          <motion.h3 variants={fadeUpVariant} className="text-3xl md:text-3xl font-black text-slate-800 mb-2">
            ¿POR QUÉ ELEGIR <span className="text-orange-500">ILIMITA2?</span>
          </motion.h3>
          <motion.div variants={fadeUpVariant} className="w-14 h-1 bg-orange-500 mx-auto mb-16 rounded-full"></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            <motion.div variants={fadeUpVariant} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mb-6 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute inset-0 bg-orange-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <ShieldCheck className="w-10 h-10 relative z-10 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-lg font-black text-[#012a52] mb-3">CONFIABILIDAD</h4>
              <p className="text-slate-500 leading-relaxed text-sm max-w-[200px]">
                Contamos con el suministro de equipos y materiales de las mejores marcas del mundo.
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mb-6 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute inset-0 bg-orange-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Settings className="w-10 h-10 relative z-10 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-lg font-black text-[#012a52] mb-3">EXPERIENCIA DE CAMPO</h4>
              <p className="text-slate-500 leading-relaxed text-sm max-w-[200px]">
                Suministros amplios y personal capacitado para mejorar su producción.
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mb-6 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute inset-0 bg-orange-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Globe className="w-10 h-10 relative z-10 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-lg font-black text-[#012a52] mb-3">RED DE DISTRIBUCIÓN NACIONAL</h4>
              <p className="text-slate-500 leading-relaxed text-sm max-w-[200px]">
                El alcance a nivel nacional es clave para cubrir despachos oportunos en el territorio venezolano.
              </p>
            </motion.div>

          </div>
        </motion.div>
      </section>
      {/* Mini Product Quick Access Section */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/5 -skew-x-12 translate-x-1/2"></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <motion.div variants={slideInLeftVariant} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-left">
              <h2 className="text-orange-500 font-black text-sm tracking-[0.3em] uppercase mb-4">Nuestro Portafolio</h2>
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
                SUMINISTROS <span className="text-slate-400">TÉCNICOS</span> <br /> ESPECIALIZADOS
              </h3>
            </div>
            <Link
              href="/productos"
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-xs font-black text-white transition-[background-color,border-color,transform,color] duration-300 hover:border-orange-600 hover:bg-orange-600 active:scale-[0.98]"
            >
              VER TODO EL CATÁLOGO <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                href: "/productos/instrumentacion-campo",
                title: "Instrumentación",
                icon: <Activity className="w-6 h-6" />,
                count: "Medición de proceso",
              },
              {
                href: "/productos/equipos-bombeo-valvulas-industriales",
                title: "Bombeo & Válvulas",
                icon: <Droplet className="w-6 h-6" />,
                count: "Fluidos industriales",
              },
              {
                href: "/productos/suministros-electricos-industriales",
                title: "Suministros Eléct.",
                icon: <Cpu className="w-6 h-6" />,
                count: "Energía y control",
              },
              {
                href: "/productos/seguridad-industrial",
                title: "Seguridad",
                icon: <ShieldCheck className="w-6 h-6" />,
                count: "Protección integral",
              },
              {
                href: "/servicios/procura-logistica",
                title: "Procura & Logística",
                icon: <Globe className="w-6 h-6" />,
                count: "Cobertura global",
              },
            ].map((prod) => (
              <motion.div key={prod.href} variants={fadeUpVariant}>
                <Link
                  href={prod.href}
                  className="group block rounded-[2rem] border border-white/10 bg-white/5 p-8 transition-[background-color,border-color,box-shadow,transform] duration-300 hover:border-white hover:bg-white h-full active:scale-[0.98]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 transition-[background-color,color] duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    {prod.icon}
                  </div>
                  <h4 className="text-white group-hover:text-slate-900 font-black text-lg mb-2 tracking-tight transition-colors">{prod.title}</h4>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{prod.count}</span>
                    <ChevronRight className="h-4 w-4 text-orange-500 opacity-0 transition-[opacity,transform] group-hover:translate-x-1 group-hover:opacity-100" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Brands Section */}
      <section id="alianzas" className="bg-slate-50 py-24 relative overflow-hidden overflow-x-hidden border-t border-slate-200">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUpVariant}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#012a52] uppercase mb-1">NUESTROS ALIADOS</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-800 mb-2">
            MARCAS QUE CONFÍAN EN <span className="text-orange-500">NOSOTROS</span>
          </h3>
          <div className="w-14 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Row 1 - Scroll Left */}
        <div className="flex w-[200%] animate-scroll-left whitespace-nowrap mb-8" style={{ width: 'fit-content' }}>
          {[...row1Brands, ...row1Brands].map((brand, i) => (
            <div key={`row1-${i}`} className="mx-4 flex h-32 w-48 flex-none items-center justify-center rounded-2xl border border-slate-100 bg-white p-6 opacity-60 shadow-sm grayscale transition-[opacity,filter] duration-300 hover:opacity-100 hover:grayscale-0">
              <div className="relative w-full h-full">
                <Image src={`/Imagenes_Soporte/${brand}`} alt="Marca" fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="flex animate-scroll-right whitespace-nowrap" style={{ width: 'fit-content' }}>
          {[...row2Brands, ...row2Brands].map((brand, i) => (
            <div key={`row2-${i}`} className="mx-4 flex h-32 w-48 flex-none items-center justify-center rounded-2xl border border-slate-100 bg-white p-6 opacity-60 shadow-sm grayscale transition-[opacity,filter] duration-300 hover:opacity-100 hover:grayscale-0">
              <div className="relative w-full h-full">
                <Image src={`/Imagenes_Soporte/${brand}`} alt="Marca" fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-slate-50 relative px-4 sm:px-6 lg:px-8 pb-24 z-40 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row bg-[#08223d] border border-white/5"
        >
          {/* Form side */}
          <motion.div variants={slideInLeftVariant} className="w-full md:w-1/2 p-8 lg:p-14 relative bg-[#08223d]">
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
              <button className="mt-2 w-full rounded-lg bg-orange-500 py-4 text-sm font-black tracking-wider text-white shadow-lg shadow-orange-500/30 transition-[background-color,transform,box-shadow] hover:-translate-y-0.5 hover:bg-orange-600 active:scale-[0.98]">
                ENVIAR REQUERIMIENTO
              </button>
            </form>
          </motion.div>

          {/* Map side */}
          <motion.div variants={slideInRightVariant} className="w-full md:w-1/2 bg-[#0a2c4e] relative p-6 lg:p-10 flex flex-col">
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
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}

const row1Brands = [
  "3M.jpg", "ABB.png", "APC.png", "Castrol.png", "FAG.png", "Flowserve.png",
  "GE.png", "Honeywell.png", "Mobil.png", "NSK.png", "North.png"
]

const row2Brands = [
  "PDVSA_Petróleo.png", "Pequiven.png", "RA.png", "Rosemount-Emerson-Logo-Vertical.png",
  "SIEMENS.jpg", "SKF.png", "Sulzer.jpg", "Wika.png", "ashcroft.png", "weir.jpeg", "delixi.svg"
]
