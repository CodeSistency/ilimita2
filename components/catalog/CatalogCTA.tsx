import Link from "next/link"
import { PhoneCall } from "lucide-react"

interface CatalogCTAProps {
  title: string
  description: string
}

export default function CatalogCTA({ title, description }: CatalogCTAProps) {
  return (
    <section className="mx-auto mt-14 max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-r from-slate-900 to-[#0a2640] p-8 text-white shadow-xl lg:flex lg:items-center lg:justify-between lg:p-10">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tight lg:text-3xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-blue-100 lg:text-base">
            {description}
          </p>
        </div>

        <Link
          href="/contacto"
          className="mt-6 inline-flex items-center gap-3 rounded-xl bg-orange-500 px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-orange-600 lg:mt-0"
        >
          <PhoneCall className="h-4 w-4" />
          Contactar asesor
        </Link>
      </div>
    </section>
  )
}
