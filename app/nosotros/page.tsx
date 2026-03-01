"use client"

import Image from "next/image"
import Link from "next/link"
import {
  CheckCircle2,
  Compass,
  Factory,
  Gauge,
  Globe2,
  HardHat,
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#071a2d]/95 via-[#0b2f4c]/85 to-[#0b2f4c]/60" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.2em] text-blue-100 uppercase">
              <Factory className="h-4 w-4" />
              Acerca de Nosotros
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              QUIÉNES SOMOS
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-blue-100 md:text-xl">
              Ilimita2 es una empresa que opera en el oriente del país, orientada a la creación de valor para los
              sectores petrolero, petroquímico e industrial nacional.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-blue-100/90 md:text-lg">
              Nuestra actividad se centra en el suministro estratégico de equipos, materiales e infraestructura crítica,
              garantizando un portafolio de productos de alta calidad mediante una gestión eficiente de procesos y
              recursos.
            </p>
          </div>

          <div className="self-end rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
            <h2 className="mb-4 text-lg font-black tracking-wide text-white uppercase">Especialización</h2>
            <p className="text-sm leading-relaxed text-blue-100 md:text-base">
              Integramos soluciones que abarcan desde instrumentación y sistemas de control, hasta tuberías petroleras,
              equipos de bombeo, cabillas, suministros eléctricos y seguridad industrial.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#0f3f66] uppercase">Nuestra Propuesta de Valor</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0c2438] md:text-5xl">
              Gestión integral de adquisición y entrega
            </h2>
          </div>
          <div className="rounded-2xl bg-[#0f3f66] px-5 py-3 text-xs font-bold tracking-wide text-white uppercase">
            Operación diseñada para entornos críticos
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {propuestaValor.map((item) => (
            <article
              key={item}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0f3f66]/40 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-xl bg-[#e9f2f9] p-3 text-[#0f3f66] transition-colors group-hover:bg-[#0f3f66] group-hover:text-white">
                <Truck className="h-5 w-5" />
              </div>
              <p className="text-sm leading-relaxed text-slate-700">{item}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-[#0f3f66]/20 bg-[#f2f8fc] p-7">
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            Nuestra operación está diseñada para responder a entornos críticos donde la disponibilidad, trazabilidad y
            cumplimiento normativo son determinantes.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-[#f9fbfd] p-8">
            <div className="mb-6 inline-flex rounded-xl bg-[#0f3f66] p-3 text-white">
              <Globe2 className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-black tracking-tight text-[#0c2438] md:text-3xl">Alcance Operativo</h3>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              Con cobertura logística nacional y capacidad de gestión internacional.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {alcanceOperativo.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#0f3f66]/25 bg-white px-4 py-2 text-sm font-semibold text-[#0f3f66]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-[#f9fbfd] p-8">
            <div className="mb-6 inline-flex rounded-xl bg-[#ef6a2e] p-3 text-white">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-black tracking-tight text-[#0c2438] md:text-3xl">Compromiso</h3>
            <div className="mt-6 space-y-4">
              {compromisos.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ef6a2e]" />
                  <p className="text-sm leading-relaxed text-slate-700 md:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0c2438] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-bold tracking-[0.2em] text-orange-200 uppercase">Enfoque Estratégico</p>
            <h3 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Estructura integral para infraestructura energética e industrial
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {enfoque.map((item, index) => {
              const icons = [Layers3, Compass, Gauge, HardHat]
              const Icon = icons[index]

              return (
                <article key={item} className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                  <Icon className="mb-4 h-6 w-6 text-orange-300" />
                  <p className="text-sm font-semibold leading-relaxed text-blue-100">{item}</p>
                </article>
              )
            })}
          </div>

          <div className="mt-12">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#ef6a2e] px-6 py-4 text-xs font-black tracking-[0.15em] text-white uppercase transition-transform hover:-translate-y-0.5"
            >
              Hable con nuestro equipo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
