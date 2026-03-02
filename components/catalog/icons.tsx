import {
  Activity,
  Cpu,
  Droplets,
  Gauge,
  HardHat,
  Package,
  Pipette,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react"

interface RenderCategoryIconProps {
  slug: string
  className?: string
}

export function renderCategoryIcon({
  slug,
  className,
}: RenderCategoryIconProps) {
  switch (slug) {
    case "instrumentacion-campo":
      return <Activity className={className} />
    case "sistemas-control-automatizacion":
      return <Cpu className={className} />
    case "elementos-finales-control-actuacion":
      return <Gauge className={className} />
    case "equipos-bombeo-valvulas-industriales":
      return <Droplets className={className} />
    case "produccion-pozo-cabillas-cabezales":
      return <Wrench className={className} />
    case "tuberias-petroleras":
      return <Pipette className={className} />
    case "suministros-electricos-industriales":
      return <Sparkles className={className} />
    case "seguridad-industrial":
      return <ShieldCheck className={className} />
    case "equipos-auxiliares-accesorios":
      return <Package className={className} />
    case "servicios-especializados-ic":
      return <HardHat className={className} />
    case "procura-logistica":
      return <Package className={className} />
    default:
      return <Activity className={className} />
  }
}
