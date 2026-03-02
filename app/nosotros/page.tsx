"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Briefcase,
  CheckCircle2,
  Compass,
  Factory,
  Gauge,
  Globe2,
  Layers3,
  ShieldCheck,
  Truck,
} from "lucide-react"

const propuestaValor = [
  "Procura nacional bajo normativas COVENIN.",
  "Procura internacional con identificación directa de fabricantes OEM.",
  "Gestión logística nacional e internacional.",
  "Manejo de carga proyecto y sobredimensionada.",
  "Nacionalización y entrega final en instalaciones operativas.",
]

const alcanceOperativo = [
  "Estaciones de flujo",
  "Taladros de perforación",
  "Refinerías",
  "Instalaciones petroquímicas",
  "Infraestructura industrial",
]

const compromisos = [
  "Garantizar cumplimiento técnico y normativo.",
  "Asegurar trazabilidad en la cadena de suministro.",
  "Optimizar tiempos de entrega.",
  "Reducir riesgos operativos mediante una gestión estructurada.",
]

const enfoque = [
  "Suministro especializado.",
  "Gestión de procura.",
  "Logística integrada.",
  "Soporte técnico en instrumentación y control.",
]

export default function NosotrosPage() {
  return (
    <div className="bg-[#f6f8fb] pt-24 text-slate-900">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/venezuela/WhatsApp Image 2026-02-28 at 16.44.28.jpeg"
            alt="Infraestructura petrolera e industrial"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#071a2d]/95 via-[#0b2f4c]/85 to-[#0b2f4c]/70" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-bold tracking-[0.2em] text-blue-100 uppercase backdrop-blur-sm">
              <Factory className="h-4 w-4" />
              Acerca de Nosotros
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              QUIÉNES SOMOS
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-blue-50 md:text-xl font-medium">
              Ilimita2 es una empresa que opera en el oriente del país, orientada a la creación de valor para los
              sectores petrolero, petroquímico e industrial nacional.
            </p>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-blue-100/90 md:text-lg">
              Nuestra actividad se centra en el suministro estratégico de equipos, materiales e infraestructura crítica,
              garantizando un portafolio de productos de alta calidad mediante una gestión eficiente de procesos y
              recursos.
            </p>
          </div>

          <div className="self-end rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-2xl">
            <h2 className="mb-4 text-sm font-black tracking-[0.15em] text-white uppercase inline-flex items-center gap-2.5">
              <Briefcase className="h-4 w-4 text-orange-400" /> Especialización
            </h2>
            <p className="text-sm leading-relaxed text-blue-50 md:text-base font-medium">
              Nos especializamos en integrar soluciones que abarcan desde instrumentación y sistemas de control, hasta tuberías petroleras,
              equipos de bombeo, cabillas, suministros eléctricos y seguridad industrial.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-xs font-bold tracking-[0.2em] text-[#0f3f66] uppercase">Nuestra Propuesta de Valor</p>
          <div className="mt-5 max-w-4xl">
            <h2 className="text-3xl font-black tracking-tight text-[#0c2438] md:text-5xl text-balance">
              Ilimita2 no se limita al suministro de productos.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              Gestionamos integralmente el ciclo de adquisición y entrega, combinando:
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {propuestaValor.map((item, index) => (
            <article
              key={item}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0f3f66]/30 hover:shadow-md"
            >
              <div className="mb-4 inline-flex items-center justify-center h-10 w-10 rounded-xl bg-[#e9f2f9] text-[#0f3f66] font-black text-base transition-colors group-hover:bg-[#0f3f66] group-hover:text-white">
                0{index + 1}
              </div>
              <p className="text-[13px] leading-relaxed font-medium text-slate-800">{item}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#0f3f66] to-[#0c2438] p-6 md:p-8 shadow-xl shadow-[#0f3f66]/10 text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-orange-500/10 blur-3xl rounded-full" />
          <div className="flex flex-col md:flex-row gap-6 items-center relative z-10">
            <div className="rounded-xl bg-white/10 p-4 shrink-0 border border-white/5 backdrop-blur-sm">
              <ShieldCheck className="h-8 w-8 text-orange-400" />
            </div>
            <p className="text-[15px] leading-relaxed md:text-lg text-blue-50 font-medium">
              Nuestra operación está diseñada para responder a entornos críticos donde la disponibilidad, trazabilidad y cumplimiento normativo son determinantes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 relative border-t border-slate-100">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-[#f9fbfd]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm transition-shadow hover:shadow-lg hover:shadow-slate-200/50">
            <div className="mb-6 inline-flex rounded-xl bg-[#0f3f66] p-3 text-white">
              <Globe2 className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-black tracking-tight text-[#0c2438]">Alcance Operativo</h3>
            <p className="mt-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
              Atendemos:
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {alcanceOperativo.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 transition-colors hover:bg-white hover:border-slate-200 hover:shadow-sm"
                >
                  <Factory className="h-4 w-4 text-[#0f3f66]/60 shrink-0" />
                  <span className="text-xs font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-orange-50/50 p-4 border border-orange-100/50">
              <p className="text-sm font-semibold text-orange-900 leading-relaxed flex items-center gap-3">
                <Truck className="h-5 w-5 text-orange-500 shrink-0" />
                Con cobertura logística nacional y capacidad de gestión internacional.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm transition-shadow hover:shadow-lg hover:shadow-slate-200/50 flex flex-col">
            <div className="mb-6 inline-flex rounded-xl bg-[#ef6a2e] p-3 text-white">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="text-3xl font-black tracking-tight text-[#0c2438]">Compromiso</h3>
            <p className="mt-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
              Nos comprometemos a:
            </p>
            <div className="mt-5 space-y-5 flex-1">
              {compromisos.map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-slate-50">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100/50">
                    <div className="h-2 w-2 rounded-full bg-[#ef6a2e]" />
                  </div>
                  <p className="text-base leading-relaxed text-slate-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0c2438] py-24 text-white relative isolate overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-5 pointer-events-none">
          <Layers3 className="w-96 h-96 text-white" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] text-orange-400 uppercase">Enfoque Estratégico</p>
            <h3 className="mt-5 text-3xl font-black tracking-tight md:text-5xl text-balance">
              Nuestra estructura combina:
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {enfoque.map((item, index) => {
              const icons = [Layers3, Compass, Truck, Gauge]
              const Icon = icons[index]

              return (
                <article key={item} className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-orange-500/30 hover:-translate-y-1">
                  <div className="mb-4 inline-flex rounded-xl bg-white/5 p-2.5 text-orange-400 border border-white/5 group-hover:scale-110 group-hover:bg-orange-500/10 transition-all duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-[13px] font-bold leading-relaxed text-white">{item}</p>
                </article>
              )
            })}
          </div>

          <div className="mt-14 rounded-2xl border border-white/10 bg-[#071a2d]/80 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-md">
            <p className="text-lg md:text-xl font-medium text-blue-50 max-w-3xl text-balance leading-relaxed">
              Lo que permite ofrecer soluciones completas para infraestructura energética e industrial.
            </p>
            <Link
              href="/contacto"
              className="shrink-0 inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-5 text-sm font-black tracking-[0.15em] text-white uppercase transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/20"
            >
              Contactar Asesor
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
