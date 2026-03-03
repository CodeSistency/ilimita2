export type CatalogDomain = "productos" | "servicios"
export type CatalogSource = "base" | "agregado"

export interface CatalogItem {
  id: string
  name: string
  description?: string
  image?: string
}

export interface CatalogSection {
  name: string
  items: CatalogItem[]
}

export interface CatalogCategory {
  id: string
  slug: string
  domain: CatalogDomain
  title: string
  shortTitle: string
  description: string
  heroImage: string
  badge: string
  source: CatalogSource
  sections: CatalogSection[]
}

export const catalogCategories: CatalogCategory[] = [
  {
    id: "prod-01",
    slug: "instrumentacion-campo",
    domain: "productos",
    title: "Instrumentación de Campo (Medición)",
    shortTitle: "Instrumentación",
    description:
      "Soluciones de medición industrial para presión, temperatura, flujo, nivel y variables analíticas en entornos exigentes, con compatibilidad para atmósferas clasificadas ATEX.",
    heroImage: "/catalog/ai-pencil/20260303/category-heroes/instrumentacion-campo-primary.png",
    badge: "Producto base",
    source: "base",
    sections: [
      {
        name: "Medición de Presión",
        items: [
          { id: "transmisores-de-presi-n-relativa-absoluta-y-diferencial", name: "Transmisores de Presión (Relativa, Absoluta y Diferencial)", image: "/catalog/ai-pencil/20260303/products-clean/transmisores-de-presi-n-relativa-absoluta-y-diferencial.png" },
          { id: "man-metros-industriales", name: "Manómetros Industriales", image: "/catalog/ai-pencil/20260303/products-clean/man-metros-industriales.png" },
          { id: "interruptores-de-presi-n-pressure-switches", name: "Interruptores de Presión (Pressure Switches)", image: "/catalog/ai-pencil/20260303/products-clean/interruptores-de-presi-n-pressure-switches.png" }
        ],
      },
      {
        name: "Medición de Temperatura",
        items: [
          { id: "sensores-de-temperatura", name: "Sensores de Temperatura", image: "/catalog/ai-pencil/20260303/products-clean/sensores-de-temperatura.png" },
          { id: "transmisores-de-temperatura", name: "Transmisores de Temperatura", image: "/catalog/ai-pencil/20260303/products-clean/transmisores-de-temperatura.png" },
          { id: "termopozos", name: "Termopozos", image: "/catalog/ai-pencil/20260303/products-clean/termopozos.png" },
          { id: "pir-metros-infrarrojos", name: "Pirómetros Infrarrojos", image: "/catalog/ai-pencil/20260303/products-clean/pir-metros-infrarrojos.png" }
        ],
      },
      {
        name: "Medición de Flujo (Caudal)",
        items: [
          { id: "caudal-metros-magn-ticos", name: "Caudalímetros Magnéticos", image: "/catalog/ai-pencil/20260303/products-clean/caudal-metros-magn-ticos.png" },
          { id: "caudal-metros-ultras-nicos", name: "Caudalímetros Ultrasónicos", image: "/catalog/ai-pencil/20260303/products-clean/caudal-metros-ultras-nicos.png" },
          { id: "caudal-metros-de-masa-coriolis", name: "Caudalímetros de Masa (Coriolis)", image: "/catalog/ai-pencil/20260303/products-clean/caudal-metros-de-masa-coriolis.png" },
          { id: "caudal-metros-vortex", name: "Caudalímetros Vortex", image: "/catalog/ai-pencil/20260303/products-clean/caudal-metros-vortex.png" },
          { id: "caudal-metros-de-turbina", name: "Caudalímetros de Turbina", image: "/catalog/ai-pencil/20260303/products-clean/caudal-metros-de-turbina.png" },
          { id: "elementos-primarios-de-flujo", name: "Elementos Primarios de Flujo", image: "/catalog/ai-pencil/20260303/products-clean/elementos-primarios-de-flujo.png" }
        ],
      },
      {
        name: "Medición de Nivel",
        items: [
          { id: "transmisores-de-nivel-radar-onda-guiada-y-no-contacto", name: "Transmisores de Nivel Radar (Onda Guiada y No Contacto)", image: "/catalog/ai-pencil/20260303/products-clean/transmisores-de-nivel-radar-onda-guiada-y-no-contacto.png" },
          { id: "transmisores-ultras-nicos", name: "Transmisores Ultrasónicos", image: "/catalog/ai-pencil/20260303/products-clean/transmisores-ultras-nicos.png" },
          { id: "transmisores-capacitivos", name: "Transmisores Capacitivos", image: "/catalog/ai-pencil/20260303/products-clean/transmisores-capacitivos.png" },
          { id: "medidores-hidrost-ticos", name: "Medidores Hidrostáticos", image: "/catalog/ai-pencil/20260303/products-clean/medidores-hidrost-ticos.png" },
          { id: "interruptores-de-nivel", name: "Interruptores de Nivel", image: "/catalog/ai-pencil/20260303/products-clean/interruptores-de-nivel.png" }
        ],
      },
      {
        name: "Instrumentación Analítica",
        items: [
          { id: "analizadores-de-ph-orp-y-conductividad", name: "Analizadores de pH/ORP y Conductividad", image: "/catalog/ai-pencil/20260303/products-clean/analizadores-de-ph-orp-y-conductividad.png" },
          { id: "analizadores-de-gas", name: "Analizadores de Gas", image: "/catalog/ai-pencil/20260303/products-clean/analizadores-de-gas.png" },
          { id: "medidores-de-humedad-punto-de-roc-o", name: "Medidores de Humedad / Punto de Rocío", image: "/catalog/ai-pencil/20260303/products-clean/medidores-de-humedad-punto-de-roc-o.png" }
        ],
      },
    ],
  },
  {
    id: "prod-02",
    slug: "sistemas-control-automatizacion",
    domain: "productos",
    title: "Sistemas de Control y Automatización",
    shortTitle: "Control",
    description:
      "Arquitecturas de control, supervisión y seguridad para operación eficiente de plantas industriales, desde PLCs hasta plataformas DCS y SIS.",
    heroImage: "/catalog/ai-pencil/20260303/category-heroes/sistemas-control-automatizacion-primary.png",
    badge: "Producto base",
    source: "base",
    sections: [
      {
        name: "Sistemas de Control",
        items: [
          { id: "sistemas-de-control-distribuido-dcs", name: "Sistemas de Control Distribuido (DCS)", image: "/catalog/ai-pencil/20260303/products-clean/sistemas-de-control-distribuido-dcs.png" },
          { id: "controladores-l-gicos-programables-plc", name: "Controladores Lógicos Programables (PLC)", image: "/catalog/ai-pencil/20260303/products-clean/controladores-l-gicos-programables-plc.png" },
          { id: "sistemas-scada", name: "Sistemas SCADA", image: "/catalog/ai-pencil/20260303/products-clean/sistemas-scada.png" },
          { id: "unidades-terminales-remotas-rtu", name: "Unidades Terminales Remotas (RTU)", image: "/catalog/ai-pencil/20260303/products-clean/unidades-terminales-remotas-rtu.png" },
          { id: "edge-devices", name: "Edge Devices", image: "/catalog/ai-pencil/20260303/products-clean/edge-devices.png" },
          { id: "sistemas-instrumentados-de-seguridad-sis", name: "Sistemas Instrumentados de Seguridad (SIS)", image: "/catalog/ai-pencil/20260303/products-clean/sistemas-instrumentados-de-seguridad-sis.png" }
        ],
      },
    ],
  },
  {
    id: "prod-03",
    slug: "elementos-finales-control-actuacion",
    domain: "productos",
    title: "Elementos Finales de Control y Actuación",
    shortTitle: "Actuación",
    description:
      "Equipos de control final para regulación de proceso con alta precisión: válvulas de control, posicionadores, accesorios y actuadores especializados.",
    heroImage: "/catalog/ai-pencil/20260303/category-heroes/elementos-finales-control-actuacion-primary.png",
    badge: "Producto base",
    source: "base",
    sections: [
      {
        name: "Válvulas de Control",
        items: [
          { id: "v-lvulas-de-control", name: "Válvulas de Control", image: "/catalog/ai-pencil/20260303/products-clean/v-lvulas-de-control.png" },
          { id: "posicionadores", name: "Posicionadores", image: "/catalog/ai-pencil/20260303/products-clean/posicionadores.png" },
          { id: "accesorios", name: "Accesorios", image: "/catalog/ai-pencil/20260303/products-clean/accesorios.png" }
        ],
      },
      {
        name: "Actuadores",
        items: [
          { id: "neum-ticos-diafragma-pist-n", name: "Neumáticos (Diafragma / Pistón)", image: "/catalog/ai-pencil/20260303/products-clean/neum-ticos-diafragma-pist-n.png" },
          { id: "el-ctricos", name: "Eléctricos", image: "/catalog/ai-pencil/20260303/products-clean/el-ctricos.png" },
          { id: "hidr-ulicos-y-electrohidr-ulicos", name: "Hidráulicos y Electrohidráulicos", image: "/catalog/ai-pencil/20260303/products-clean/hidr-ulicos-y-electrohidr-ulicos.png" }
        ],
      },
    ],
  },
  {
    id: "prod-04",
    slug: "equipos-bombeo-valvulas-industriales",
    domain: "productos",
    title: "Equipos de Bombeo y Válvulas Industriales",
    shortTitle: "Bombeo",
    description:
      "Línea de proceso para transferencia y control de fluidos en operación continua, diferenciada de válvulas de control por su enfoque en servicio industrial general.",
    heroImage: "/catalog/ai-pencil/20260303/category-heroes/equipos-bombeo-valvulas-industriales-primary.png",
    badge: "Producto agregado",
    source: "agregado",
    sections: [
      {
        name: "Sistemas de Bombeo",
        items: [
          { id: "bombas-de-cavidad-progresiva-bcp", name: "Bombas de Cavidad Progresiva (BCP)", image: "/catalog/ai-pencil/20260303/products-clean/bombas-de-cavidad-progresiva-bcp.png" },
          { id: "bombas-centr-fugas", name: "Bombas Centrífugas", image: "/catalog/ai-pencil/20260303/products-clean/bombas-centr-fugas.png" },
          { id: "bombas-de-pist-n-reciprocantes", name: "Bombas de Pistón / Reciprocantes", image: "/catalog/ai-pencil/20260303/products-clean/bombas-de-pist-n-reciprocantes.png" },
          { id: "bombas-electrosumergibles", name: "Bombas Electrosumergibles", image: "/catalog/ai-pencil/20260303/products-clean/bombas-electrosumergibles.png" }
        ],
      },
      {
        name: "Válvulas Industriales de Proceso",
        items: [
          { id: "v-lvulas-de-compuerta", name: "Válvulas de Compuerta", image: "/catalog/ai-pencil/20260303/products-clean/v-lvulas-de-compuerta.png" },
          { id: "v-lvulas-de-bola", name: "Válvulas de Bola", image: "/catalog/ai-pencil/20260303/products-clean/v-lvulas-de-bola.png" },
          { id: "v-lvulas-de-tap-n", name: "Válvulas de Tapón", image: "/catalog/ai-pencil/20260303/products-clean/v-lvulas-de-tap-n.png" },
          { id: "v-lvulas-de-globo", name: "Válvulas de Globo", image: "/catalog/ai-pencil/20260303/products-clean/v-lvulas-de-globo.png" },
          { id: "v-lvulas-de-alivio-y-seguridad", name: "Válvulas de Alivio y Seguridad", image: "/catalog/ai-pencil/20260303/products-clean/v-lvulas-de-alivio-y-seguridad.png" },
          { id: "v-lvulas-mariposa", name: "Válvulas Mariposa", image: "/catalog/ai-pencil/20260303/products-clean/v-lvulas-mariposa.png" }
        ],
      },
    ],
  },
  {
    id: "prod-05",
    slug: "produccion-pozo-cabillas-cabezales",
    domain: "productos",
    title: "Producción de Pozo: Cabillas y Cabezales",
    shortTitle: "Pozo",
    description:
      "Componentes para sistemas de levantamiento y completación de pozo, integrando cabillas petroleras, cabezales, variadores, empacaduras y sellos mecánicos.",
    heroImage: "/catalog/ai-pencil/20260303/category-heroes/produccion-pozo-cabillas-cabezales-primary.png",
    badge: "Producto agregado",
    source: "agregado",
    sections: [
      {
        name: "Cabillas Petroleras",
        items: [
          { id: "cabillas-grado-c-acero-al-carbono", name: "Cabillas Grado C (Acero al Carbono)", image: "/catalog/ai-pencil/20260303/products-clean/cabillas-grado-c-acero-al-carbono.png" },
          { id: "cabillas-grado-k-aleaci-n-de-n-quel", name: "Cabillas Grado K (Aleación de Níquel)", image: "/catalog/ai-pencil/20260303/products-clean/cabillas-grado-k-aleaci-n-de-n-quel.png" },
          { id: "cabillas-grado-d-alta-resistencia", name: "Cabillas Grado D (Alta Resistencia)", image: "/catalog/ai-pencil/20260303/products-clean/cabillas-grado-d-alta-resistencia.png" },
          { id: "cabillas-de-fibra-de-vidrio-frp", name: "Cabillas de Fibra de Vidrio (FRP)", image: "/catalog/ai-pencil/20260303/products-clean/cabillas-de-fibra-de-vidrio-frp.png" },
          { id: "cabillas-ultra-high-strength", name: "Cabillas Ultra-High Strength", image: "/catalog/ai-pencil/20260303/products-clean/cabillas-ultra-high-strength.png" },
          { id: "cabillas-continuas-continuous-rod", name: "Cabillas Continuas (Continuous Rod)", image: "/catalog/ai-pencil/20260303/products-clean/cabillas-continuas-continuous-rod.png" }
        ],
      },
      {
        name: "Componentes Complementarios",
        items: [
          { id: "cuplas", name: "Cuplas", image: "/catalog/ai-pencil/20260303/products-clean/cuplas.png" },
          { id: "centralizadores", name: "Centralizadores", image: "/catalog/ai-pencil/20260303/products-clean/centralizadores.png" },
          { id: "barra-pulida", name: "Barra Pulida", image: "/catalog/ai-pencil/20260303/products-clean/barra-pulida.png" }
        ],
      },
      {
        name: "Cabezales y Sellado",
        items: [
          { id: "cabezales-de-pozo-suspensi-n-y-sellado", name: "Cabezales de Pozo (Suspensión y Sellado)", image: "/catalog/ai-pencil/20260303/products-clean/cabezales-de-pozo-suspensi-n-y-sellado.png" },
          { id: "variadores-de-frecuencia-vfd", name: "Variadores de Frecuencia (VFD)", image: "/catalog/ai-pencil/20260303/products-clean/variadores-de-frecuencia-vfd.png" },
          { id: "empacaduras", name: "Empacaduras", image: "/catalog/ai-pencil/20260303/products-clean/empacaduras.png" },
          { id: "sellos-mec-nicos", name: "Sellos Mecánicos", image: "/catalog/ai-pencil/20260303/products-clean/sellos-mec-nicos.png" }
        ],
      },
    ],
  },
  {
    id: "prod-06",
    slug: "tuberias-petroleras",
    domain: "productos",
    title: "Tuberías Petroleras",
    shortTitle: "Tuberías",
    description:
      "Portafolio de tuberías para perforación, revestimiento, producción y transporte, con materiales y especificaciones API para ambientes críticos.",
    heroImage: "/catalog/ai-pencil/20260303/category-heroes/tuberias-petroleras-primary.png",
    badge: "Producto agregado",
    source: "agregado",
    sections: [
      {
        name: "Tipos de Tubería",
        items: [
          { id: "tuber-a-de-perforaci-n-drill-pipe", name: "Tubería de Perforación (Drill Pipe)", image: "/catalog/brain/c8839c20-9824-4537-9cd0-866a6ab3e772/pip_drill_v2_1772498351235.png" },
          { id: "tuber-a-de-revestimiento-casing", name: "Tubería de Revestimiento (Casing)", image: "/catalog/brain/c8839c20-9824-4537-9cd0-866a6ab3e772/pip_casing_v2_1772498364510.png" },
          { id: "tuber-a-de-producci-n-tubing", name: "Tubería de Producción (Tubing)", image: "/catalog/brain/c8839c20-9824-4537-9cd0-866a6ab3e772/pip_tubing_ven_1772498443475.png" },
          { id: "tuber-a-de-l-nea-line-pipe", name: "Tubería de Línea (Line Pipe)", image: "/catalog/brain/c8839c20-9824-4537-9cd0-866a6ab3e772/pip_line_ven_v2_1772498521591.png" },
          { id: "tuber-a-flexible-coiled-tubing", name: "Tubería Flexible (Coiled Tubing)", image: "/catalog/brain/c8839c20-9824-4537-9cd0-866a6ab3e772/pip_coiled_ven_1772498470306.png" },
          { id: "tuber-a-de-conducci-n-el-ctrica-conduit", name: "Tubería de Conducción Eléctrica (Conduit)", image: "/catalog/brain/c8839c20-9824-4537-9cd0-866a6ab3e772/pip_conduit_ven_1772498483476.png" },
          { id: "tuber-a-de-acero-inoxidable-y-aleaciones", name: "Tubería de Acero Inoxidable y Aleaciones", image: "/catalog/brain/c8839c20-9824-4537-9cd0-866a6ab3e772/pip_stainless_ven_1772498499151.png" }
        ],
      },
      {
        name: "Materiales y Normas",
        items: [
          { id: "acero-al-carbono-j55-n80-p110", name: "Acero al carbono (J55, N80, P110)", image: "/catalog/brain/c8839c20-9824-4537-9cd0-866a6ab3e772/pip_carbon_steel_ven_1772498802449.png" },
          { id: "api-5l", name: "API 5L", image: "/catalog/brain/c8839c20-9824-4537-9cd0-866a6ab3e772/pip_api5l_ven_1772498816314.png" }
        ],
      },
    ],
  },
  {
    id: "prod-07",
    slug: "suministros-electricos-industriales",
    domain: "productos",
    title: "Suministros Eléctricos Industriales",
    shortTitle: "Eléctrico",
    description:
      "Soluciones eléctricas para generación, distribución, protección y medición, incluyendo equipos para media y baja tensión y control industrial.",
    heroImage: "/catalog/ai-pencil/20260303/category-heroes/suministros-electricos-industriales-primary.png",
    badge: "Producto agregado",
    source: "agregado",
    sections: [
      {
        name: "Generación y Energía",
        items: [
          { id: "generadores-diesel", name: "Generadores Diésel", image: "/catalog/brain/c8839c20-9824-4537-9cd0-866a6ab3e772/ele_diesel_gen_ven_1772498998193.png", description: "Generadores potentes para autogeneración en sitios remotos." },
          { id: "turbinas-de-gas", name: "Turbinas de Gas", image: "/catalog/brain/c8839c20-9824-4537-9cd0-866a6ab3e772/ele_gas_turbine_ven_1772499016579.png", description: "Turbinas de gas de alta eficiencia para operaciones industriales." },
          { id: "transformadores", name: "Transformadores (Aceite y Secos)", image: "/catalog/brain/c8839c20-9824-4537-9cd0-866a6ab3e772/ele_transformer_ven_1772499034356.png", description: "Transformadores de potencia y distribución." },
          { id: "e-houses", name: "E-Houses (Salas Eléctricas Modulares)", image: "/catalog/ai-pencil/20260303/products-clean/e-houses.png", description: "Soluciones modulares integradas para protección y control." },
          { id: "baterias-rectificadores", name: "Bancos de Baterías y Rectificadores", image: "/catalog/ai-pencil/20260303/products-clean/baterias-rectificadores.png" }
        ],
      },
      {
        name: "Distribución y Protección (MT/BT)",
        items: [
          { id: "gis-ais", name: "Equipos MT/BT (GIS / AIS)", image: "/catalog/ai-pencil/20260303/products-clean/gis-ais.png", description: "Interruptores bajo gas (GIS) o aire (AIS)." },
          { id: "paneles-arranque", name: "Paneles de Arranque y Protección", image: "/catalog/ai-pencil/20260303/products-clean/paneles-arranque.png", description: "Unidades inteligentes para motores con protocolos de comunicación." },
          { id: "arrancadores-suaves", name: "Arrancadores Suaves (Soft Starters)", image: "/catalog/ai-pencil/20260303/products-clean/arrancadores-suaves.png" },
          { id: "cables-potencia", name: "Cables de Potencia y Control", image: "/catalog/ai-pencil/20260303/products-clean/cables-potencia.png" },
          { id: "cables-umbilicales", name: "Cables Umbilicales", image: "/catalog/ai-pencil/20260303/products-clean/cables-umbilicales.png" },
          { id: "ups", name: "Sistemas de Alimentación Ininterrumpida (UPS)", image: "/catalog/ai-pencil/20260303/products-clean/ups.png" }
        ],
      },
      {
        name: "Control y Automatización Eléctrica",
        items: [
          { id: "plc-industrial", name: "Controladores Lógicos Programables (PLC)", image: "/catalog/ai-pencil/20260303/products-clean/plc-industrial.png" },
          { id: "rtu-remota", name: "Unidades de Control Remoto (RTU)", image: "/catalog/ai-pencil/20260303/products-clean/rtu-remota.png" }
        ],
      },
      {
        name: "Iluminación Industrial",
        items: [
          { id: "iluminacion-ex", name: "Iluminación LED Ex (Explosion Proof)", image: "/catalog/ai-pencil/20260303/products-clean/iluminacion-ex.png" }
        ],
      },
      {
        name: "Protección Catódica",
        items: [
          { id: "rectificadores-catodica", name: "Rectificadores de Corriente Impresa", image: "/catalog/ai-pencil/20260303/products-clean/rectificadores-catodica.png" },
          { id: "anodos-sacrificio", name: "Ánodos de Sacrificio", image: "/catalog/ai-pencil/20260303/products-clean/anodos-sacrificio.png" },
          { id: "anodos-iccp", name: "Ánodos de Corriente Impresa (ICCP)", image: "/catalog/ai-pencil/20260303/products-clean/anodos-iccp.png" },
          { id: "electrodos-referencia", name: "Electrodos de Referencia", image: "/catalog/ai-pencil/20260303/products-clean/electrodos-referencia.png" }
        ],
      },
      {
        name: "Instrumentación Eléctrica",
        items: [
          { id: "megohmetros", name: "Megóhmetros (Meggers)", image: "/catalog/ai-pencil/20260303/products-clean/megohmetros.png" },
          { id: "termograficas", name: "Cámaras Termográficas Certificadas", image: "/catalog/ai-pencil/20260303/products-clean/termograficas.png" },
          { id: "multimetros-seguros", name: "Multímetros de Seguridad Intrínseca", image: "/catalog/ai-pencil/20260303/products-clean/multimetros-seguros.png" },
          { id: "analizadores-potencia", name: "Analizadores de Calidad de Potencia", image: "/catalog/ai-pencil/20260303/products-clean/analizadores-potencia.png" }
        ],
      },
    ],
  },
  {
    id: "prod-08",
    slug: "seguridad-industrial",
    domain: "productos",
    title: "Seguridad Industrial",
    shortTitle: "Seguridad",
    description:
      "Dotación y equipos de protección industrial para operación segura de personal e instalaciones en campo y planta.",
    heroImage: "/catalog/ai-pencil/20260303/category-heroes/seguridad-industrial-primary.png",
    badge: "Producto agregado",
    source: "agregado",
    sections: [
      {
        name: "Equipos de Protección y Emergencia",
        items: [
          { id: "overoles-ign-fugos", name: "Overoles Ignífugos", image: "/catalog/ai-pencil/20260303/products-clean/overoles-ign-fugos.png" },
          { id: "calzado-diel-ctrico", name: "Calzado Dieléctrico", image: "/catalog/ai-pencil/20260303/products-clean/calzado-diel-ctrico.png" },
          { id: "guantes-de-impacto-y-qu-micos", name: "Guantes de Impacto y Químicos", image: "/catalog/ai-pencil/20260303/products-clean/guantes-de-impacto-y-qu-micos.png" },
          { id: "protecci-n-auditiva", name: "Protección Auditiva", image: "/catalog/ai-pencil/20260303/products-clean/protecci-n-auditiva.png" },
          { id: "detectores-multig-s", name: "Detectores Multigás", image: "/catalog/ai-pencil/20260303/products-clean/detectores-multig-s.png" },
          { id: "scba", name: "SCBA", image: "/catalog/ai-pencil/20260303/products-clean/scba.png" },
          { id: "mascarillas-industriales", name: "Mascarillas Industriales", image: "/catalog/ai-pencil/20260303/products-clean/mascarillas-industriales.png" },
          { id: "kits-antiderrames", name: "Kits Antiderrames", image: "/catalog/ai-pencil/20260303/products-clean/kits-antiderrames.png" },
          { id: "extintores-pqs-y-co2", name: "Extintores PQS y CO2", image: "/catalog/ai-pencil/20260303/products-clean/extintores-pqs-y-co2.png" },
          { id: "duchas-y-lavaojos", name: "Duchas y Lavaojos", image: "/catalog/ai-pencil/20260303/products-clean/duchas-y-lavaojos.png" }
        ],
      },
      {
        name: "Sistemas LOTO",
        items: [
          { id: "sistemas-loto", name: "Sistemas LOTO", image: "/catalog/ai-pencil/20260303/products-clean/sistemas-loto.png" },
          { id: "bloqueadores-de-v-lvulas", name: "Bloqueadores de Válvulas", image: "/catalog/ai-pencil/20260303/products-clean/bloqueadores-de-v-lvulas.png" }
        ],
      },
    ],
  },
  {
    id: "prod-09",
    slug: "equipos-auxiliares-accesorios",
    domain: "productos",
    title: "Equipos Auxiliares y Accesorios",
    shortTitle: "Auxiliares",
    description:
      "Componentes complementarios para instalación profesional de sistemas de instrumentación, control y automatización.",
    heroImage: "/catalog/ai-pencil/20260303/category-heroes/equipos-auxiliares-accesorios-primary.png",
    badge: "Producto base",
    source: "base",
    sections: [
      {
        name: "Accesorios y Complementos",
        items: [
          { id: "manifolds", name: "Manifolds", image: "/catalog/ai-pencil/20260303/products-clean/manifolds.png" },
          { id: "bridas", name: "Bridas", image: "/catalog/ai-pencil/20260303/products-clean/bridas.png" },
          { id: "tubing-fittings", name: "Tubing & Fittings", image: "/catalog/ai-pencil/20260303/products-clean/tubing-fittings.png" },
          { id: "barreras-de-aislamiento", name: "Barreras de Aislamiento", image: "/catalog/ai-pencil/20260303/products-clean/barreras-de-aislamiento.png" },
          { id: "acondicionadores-de-se-al", name: "Acondicionadores de Señal", image: "/catalog/ai-pencil/20260303/products-clean/acondicionadores-de-se-al.png" },
          { id: "paneles-y-gabinetes", name: "Paneles y Gabinetes", image: "/catalog/ai-pencil/20260303/products-clean/paneles-y-gabinetes.png" },
          { id: "instrumentaci-n-inal-mbrica", name: "Instrumentación Inalámbrica", image: "/catalog/ai-pencil/20260303/products-clean/instrumentaci-n-inal-mbrica.png" }
        ],
      },
    ],
  },
  {
    id: "srv-01",
    slug: "servicios-especializados-ic",
    domain: "servicios",
    title: "Servicios Especializados en I&C",
    shortTitle: "Servicios I&C",
    description:
      "Ejecución técnica para todo el ciclo de vida de sistemas de instrumentación y control, desde ingeniería hasta mantenimiento en campo.",
    heroImage: "/images/hero_instrumentation.png",
    badge: "Servicio base",
    source: "base",
    sections: [
      {
        name: "Ingeniería y Soporte Técnico",
        items: [
          { id: "ingenier-a-de-detalle-en-i-c", name: "Ingeniería de Detalle en I&C", image: undefined },
          { id: "configuraci-n-y-programaci-n", name: "Configuración y Programación", image: undefined },
          { id: "instalaci-n-y-commissioning", name: "Instalación y Commissioning", image: undefined },
          { id: "calibraci-n-y-certificaci-n", name: "Calibración y Certificación", image: undefined },
          { id: "mantenimiento-preventivo-y-correctivo", name: "Mantenimiento Preventivo y Correctivo", image: undefined }
        ],
      },
    ],
  },
  {
    id: "srv-02",
    slug: "procura-logistica",
    domain: "servicios",
    title: "Servicios de Procura y Logística",
    shortTitle: "Procura",
    description:
      "Gestión integral de procura nacional e internacional y logística especializada hasta almacén de cliente, con cumplimiento normativo y operativo.",
    heroImage: "/images/hero_tanks_1772216325041.png",
    badge: "Servicio agregado",
    source: "agregado",
    sections: [
      {
        name: "Procura Nacional",
        items: [
          { id: "identificaci-n-de-fabricantes-nacionales", name: "Identificación de fabricantes nacionales", image: undefined },
          { id: "cumplimiento-covenin", name: "Cumplimiento COVENIN", image: undefined },
          { id: "gesti-n-fiscal-local", name: "Gestión fiscal local", image: undefined },
          { id: "optimizaci-n-de-inventarios", name: "Optimización de inventarios", image: undefined }
        ],
      },
      {
        name: "Procura Internacional",
        items: [
          { id: "identificaci-n-oem-en-eeuu-europa-y-asia", name: "Identificación OEM en EEUU, Europa y Asia", image: undefined },
          { id: "negociaci-n-fob-exw-fca", name: "Negociación FOB, EXW, FCA", image: undefined },
          { id: "gesti-n-de-seguros-y-embalaje-especializado", name: "Gestión de seguros y embalaje especializado", image: undefined },
          { id: "responsabilidad-integral-hasta-almac-n-del-cliente", name: "Responsabilidad integral hasta almacén del cliente", image: undefined }
        ],
      },
      {
        name: "Logística Nacional",
        items: [
          { id: "administraci-n-de-flotas-especializadas", name: "Administración de flotas especializadas", image: undefined },
          { id: "distribuci-n-a-taladros-estaciones-y-refiner-as", name: "Distribución a taladros, estaciones y refinerías", image: undefined },
          { id: "cumplimiento-normativo-de-transporte", name: "Cumplimiento normativo de transporte", image: undefined }
        ],
      },
      {
        name: "Logística Internacional",
        items: [
          { id: "gesti-n-de-carga-sobredimensionada", name: "Gestión de carga sobredimensionada", image: undefined },
          { id: "aduanas-y-nacionalizaci-n", name: "Aduanas y nacionalización", image: undefined },
          { id: "rutas-estrat-gicas", name: "Rutas estratégicas", image: undefined }
        ],
      },
    ],
  },
]
