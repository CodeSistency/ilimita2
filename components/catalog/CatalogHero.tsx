interface CatalogHeroProps {
  eyebrow: string
  title: string
  description: string
}

export default function CatalogHero({
  eyebrow,
  title,
  description,
}: CatalogHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0a2640] pt-32 pb-20 text-white">
      <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/3 translate-x-1/3 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent via-[#0a2640]/70 to-[#041525]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-orange-400">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-black uppercase tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-blue-100 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  )
}
