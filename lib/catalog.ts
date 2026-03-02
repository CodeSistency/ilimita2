import {
  catalogCategories,
  type CatalogCategory,
  type CatalogDomain,
} from "@/data/catalog"

export function getCategoriesByDomain(domain: CatalogDomain): CatalogCategory[] {
  return catalogCategories.filter((category) => category.domain === domain)
}

export function getCategoryBySlug(
  domain: CatalogDomain,
  slug: string
): CatalogCategory | undefined {
  return catalogCategories.find(
    (category) => category.domain === domain && category.slug === slug
  )
}

export function getFeaturedCategories(
  domain: CatalogDomain,
  limit: number
): CatalogCategory[] {
  return getCategoriesByDomain(domain).slice(0, limit)
}
