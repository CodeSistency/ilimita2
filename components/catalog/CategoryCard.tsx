import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import type { CatalogCategory } from "@/data/catalog"
import { renderCategoryIcon } from "@/components/catalog/icons"

interface CategoryCardProps {
  category: CatalogCategory
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const label = category.domain === "productos" ? "Productos" : "Servicios"

  return (
    <Link
      href={`/${category.domain}/${category.slug}`}
      className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-orange-200 active:scale-[0.98]"
    >
      <div className="relative h-48 overflow-hidden border-b border-slate-100">
        <Image
          src={category.heroImage}
          alt={category.title}
          fill
          className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-sm">
          {label}
        </span>
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
            {renderCategoryIcon({ slug: category.slug, className: "h-5 w-5" })}
          </div>
          <h3 className="text-lg font-black uppercase leading-tight tracking-tight text-slate-900">
            {category.shortTitle}
          </h3>
        </div>

        <p className="line-clamp-3 text-sm font-medium leading-relaxed text-slate-600">
          {category.description}
        </p>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            {category.sections.length} áreas técnicas
          </span>
          <span className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-orange-600">
            Ver detalle
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  )
}
