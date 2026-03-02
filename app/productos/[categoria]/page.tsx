import type { Metadata } from "next"
import { notFound } from "next/navigation"

import CategoryDetail from "@/components/catalog/CategoryDetail"
import { getCategoriesByDomain, getCategoryBySlug } from "@/lib/catalog"

interface ProductoCategoryPageProps {
  params: Promise<{ categoria: string }>
}

export async function generateStaticParams() {
  const categories = getCategoriesByDomain("productos")
  return categories.map((category) => ({ categoria: category.slug }))
}

export async function generateMetadata({
  params,
}: ProductoCategoryPageProps): Promise<Metadata> {
  const { categoria } = await params
  const category = getCategoryBySlug("productos", categoria)

  if (!category) {
    return {
      title: "Producto no encontrado | ILIMITA2",
    }
  }

  return {
    title: `${category.shortTitle} | Productos ILIMITA2`,
    description: category.description,
  }
}

export default async function ProductoCategoryPage({
  params,
}: ProductoCategoryPageProps) {
  const { categoria } = await params
  const category = getCategoryBySlug("productos", categoria)

  if (!category) {
    notFound()
  }

  return <CategoryDetail category={category} />
}
