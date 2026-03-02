import type { Metadata } from "next"
import { notFound } from "next/navigation"

import CategoryDetail from "@/components/catalog/CategoryDetail"
import { getCategoriesByDomain, getCategoryBySlug } from "@/lib/catalog"

interface ServicioCategoryPageProps {
  params: Promise<{ categoria: string }>
}

export async function generateStaticParams() {
  const categories = getCategoriesByDomain("servicios")
  return categories.map((category) => ({ categoria: category.slug }))
}

export async function generateMetadata({
  params,
}: ServicioCategoryPageProps): Promise<Metadata> {
  const { categoria } = await params
  const category = getCategoryBySlug("servicios", categoria)

  if (!category) {
    return {
      title: "Servicio no encontrado | ILIMITA2",
    }
  }

  return {
    title: `${category.shortTitle} | Servicios ILIMITA2`,
    description: category.description,
  }
}

export default async function ServicioCategoryPage({
  params,
}: ServicioCategoryPageProps) {
  const { categoria } = await params
  const category = getCategoryBySlug("servicios", categoria)

  if (!category) {
    notFound()
  }

  return <CategoryDetail category={category} />
}
