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
    slug: "facilidades-superficie",
    domain: "productos",
    title: "Equipos e Insumos para Facilidades de Superficie",
    shortTitle: "Superficie",
    description: "Soluciones de instrumentación, control, actuación, válvulas y sistemas de bombeo superficial para optimizar e integrar sus operaciones.",
    heroImage: "/catalog/ai-pencil/20260303/category-heroes/instrumentacion-campo-primary.png",
    badge: "Producto base",
    source: "base",
    sections: [
      {
        name: "Instrumentación de Campo",
        items: [
          { id: "transmisores-de-presi-n-relativa-absoluta-y-diferencial", name: "Transmisores de Presión", image: "/catalog/ai-pencil/20260303/products-clean/transmisores-de-presi-n-relativa-absoluta-y-diferencial.png" },
          { id: "man-metros-industriales", name: "Manómetros Industriales", image: "/catalog/ai-pencil/20260303/products-clean/man-metros-industriales.png" },
          { id: "sensores-de-temperatura", name: "Sensores de Temperatura", image: "/catalog/ai-pencil/20260303/products-clean/sensores-de-temperatura.png" },
          { id: "caudal-metros-ultras-nicos", name: "Caudalímetros Ultrasónicos", image: "/catalog/ai-pencil/20260303/products-clean/caudal-metros-ultras-nicos.png" },
          { id: "elementos-primarios-de-flujo", name: "Elementos Primarios de Flujo", image: "/catalog/ai-pencil/20260303/products-clean/elementos-primarios-de-flujo.png" },
          { id: "transmisores-de-nivel-radar-onda-guiada-y-no-contacto", name: "Transmisores de Nivel", image: "/catalog/ai-pencil/20260303/products-clean/transmisores-de-nivel-radar-onda-guiada-y-no-contacto.png" },
          { id: "analizadores-de-gas", name: "Analizadores de Gas", image: "/catalog/ai-pencil/20260303/products-clean/analizadores-de-gas.png" }
        ],
      },
      {
        name: "Sistemas de Control y Automatización",
        items: [
          { id: "sistemas-de-control-distribuido-dcs", name: "Sistemas de Control Distribuido (DCS)", image: "/catalog/ai-pencil/20260303/products-clean/sistemas-de-control-distribuido-dcs.png" },
          { id: "controladores-l-gicos-programables-plc", name: "Controladores Lógicos Programables (PLC)", image: "/catalog/ai-pencil/20260303/products-clean/controladores-l-gicos-programables-plc.png" },
          { id: "sistemas-scada", name: "Sistemas SCADA", image: "/catalog/ai-pencil/20260303/products-clean/sistemas-scada.png" },
          { id: "unidades-terminales-remotas-rtu", name: "Unidades Terminales Remotas (RTU)", image: "/catalog/ai-pencil/20260303/products-clean/unidades-terminales-remotas-rtu.png" },
          { id: "sistemas-instrumentados-de-seguridad-sis", name: "Sistemas Instrumentados de Seguridad (SIS)", image: "/catalog/ai-pencil/20260303/products-clean/sistemas-instrumentados-de-seguridad-sis.png" }
        ],
      },
      {
        name: "Elementos Finales de Control y Actuación",
        items: [
          { id: "posicionadores", name: "Posicionadores", image: "/catalog/ai-pencil/20260303/products-clean/posicionadores.png" },
          { id: "accesorios", name: "Accesorios", image: "/catalog/ai-pencil/20260303/products-clean/accesorios.png" },
          { id: "neum-ticos-diafragma-pist-n", name: "Actuadores Neumáticos", image: "/catalog/ai-pencil/20260303/products-clean/neum-ticos-diafragma-pist-n.png" },
          { id: "el-ctricos", name: "Actuadores Eléctricos", image: "/catalog/ai-pencil/20260303/products-clean/el-ctricos.png" },
          { id: "hidr-ulicos-y-electrohidr-ulicos", name: "Actuadores Hidráulicos", image: "/catalog/ai-pencil/20260303/products-clean/hidr-ulicos-y-electrohidr-ulicos.png" }
        ],
      },
      {
        name: "Válvulas y Accesorios",
        items: [
          { id: "v-lvulas-de-control", name: "Válvulas de Control", image: "/catalog/ai-pencil/20260303/products-clean/v-lvulas-de-control.png" },
          { id: "v-lvulas-de-compuerta", name: "Válvulas de Compuerta", image: "/catalog/ai-pencil/20260303/products-clean/v-lvulas-de-compuerta.png" },
          { id: "v-lvulas-de-bola", name: "Válvulas de Bola", image: "/catalog/ai-pencil/20260303/products-clean/v-lvulas-de-bola.png" },
          { id: "v-lvulas-mariposa", name: "Válvulas Mariposa", image: "/catalog/ai-pencil/20260303/products-clean/v-lvulas-mariposa.png" },
          { id: "v-lvulas-de-alivio-y-seguridad", name: "Válvulas de Alivio y Seguridad", image: "/catalog/ai-pencil/20260303/products-clean/v-lvulas-de-alivio-y-seguridad.png" }
        ],
      },
      {
        name: "Equipos de Bombeo de Superficie",
        items: [
          { id: "bombas-centr-fugas", name: "Bombas Centrífugas", image: "/catalog/ai-pencil/20260303/products-clean/bombas-centr-fugas.png" },
          { id: "bombas-de-pist-n-reciprocantes", name: "Bombas de Pistón / Reciprocantes", image: "/catalog/ai-pencil/20260303/products-clean/bombas-de-pist-n-reciprocantes.png" }
        ],
      },
    ],
  },
  {
    id: "prod-02",
    slug: "equipos-electricos",
    domain: "productos",
    title: "Equipos e Insumos Eléctricos",
    shortTitle: "Eléctrico",
    description: "Soluciones eléctricas completas: transformadores, e-houses, bancos de baterías, sistemas de protección y maniobra.",
    heroImage: "/catalog/ai-pencil/20260303/category-heroes/suministros-electricos-industriales-primary.png",
    badge: "Producto agregado",
    source: "agregado",
    sections: [
      {
        name: "Transformadores y Energía",
        items: [
          { id: "transformadores", name: "Transformadores", image: "/catalog/brain/c8839c20-9824-4537-9cd0-866a6ab3e772/ele_transformer_ven_1772499034356.png", description: "Transformadores de potencia y distribución." },
          { id: "generadores-diesel", name: "Generadores Diésel", image: "/catalog/brain/c8839c20-9824-4537-9cd0-866a6ab3e772/ele_diesel_gen_ven_1772498998193.png" },
          { id: "turbinas-de-gas", name: "Turbinas de Gas", image: "/catalog/brain/c8839c20-9824-4537-9cd0-866a6ab3e772/ele_gas_turbine_ven_1772499016579.png" }
        ],
      },
      {
        name: "Salas Eléctricas Modulares",
        items: [
          { id: "e-houses", name: "E-Houses", image: "/catalog/ai-pencil/20260303/products-clean/e-houses.png" },
          { id: "gis-ais", name: "Equipos MT/BT (GIS / AIS)", image: "/catalog/ai-pencil/20260303/products-clean/gis-ais.png" },
          { id: "paneles-arranque", name: "Paneles de Arranque", image: "/catalog/ai-pencil/20260303/products-clean/paneles-arranque.png" }
        ],
      },
      {
        name: "Bancos de Baterías y Rectificadores",
        items: [
          { id: "baterias-rectificadores", name: "Bancos de Baterías y Rectificadores", image: "/catalog/ai-pencil/20260303/products-clean/baterias-rectificadores.png" },
          { id: "ups", name: "Sistemas UPS", image: "/catalog/ai-pencil/20260303/products-clean/ups.png" }
        ],
      },
      {
        name: "Cables e Iluminación",
        items: [
          { id: "cables-potencia", name: "Cables de Potencia y Control", image: "/catalog/ai-pencil/20260303/products-clean/cables-potencia.png" },
          { id: "cables-umbilicales", name: "Cables Umbilicales", image: "/catalog/ai-pencil/20260303/products-clean/cables-umbilicales.png" },
          { id: "iluminacion-ex", name: "Iluminación LED Ex (Explosion Proof)", image: "/catalog/ai-pencil/20260303/products-clean/iluminacion-ex.png" }
        ],
      },
      {
        name: "Control, Medición y Protección",
        items: [
          { id: "megohmetros", name: "Megóhmetros (Meggers)", image: "/catalog/ai-pencil/20260303/products-clean/megohmetros.png" },
          { id: "rectificadores-catodica", name: "Rectificadores de Corriente Impresa", image: "/catalog/ai-pencil/20260303/products-clean/rectificadores-catodica.png" },
          { id: "anodos-sacrificio", name: "Ánodos de Sacrificio", image: "/catalog/ai-pencil/20260303/products-clean/anodos-sacrificio.png" }
        ],
      },
    ],
  },
  {
    id: "prod-03",
    slug: "instalaciones-subsuelo",
    domain: "productos",
    title: "Equipos e Insumos para Instalaciones de Subsuelo",
    shortTitle: "Subsuelo",
    description: "Componentes para sistemas de levantamiento y completación: cabillas, cabezales, tuberías petroleras y bombas de subsuelo.",
    heroImage: "/catalog/ai-pencil/20260303/category-heroes/produccion-pozo-cabillas-cabezales-primary.png",
    badge: "Producto agregado",
    source: "agregado",
    sections: [
      {
        name: "Cabillas y Cabezales para Pozos",
        items: [
          { id: "cabillas-grado-c-acero-al-carbono", name: "Cabillas Grado C", image: "/catalog/ai-pencil/20260303/products-clean/cabillas-grado-c-acero-al-carbono.png" },
          { id: "cabillas-continuas-continuous-rod", name: "Cabillas Continuas", image: "/catalog/ai-pencil/20260303/products-clean/cabillas-continuas-continuous-rod.png" },
          { id: "cuplas", name: "Cuplas", image: "/catalog/ai-pencil/20260303/products-clean/cuplas.png" },
          { id: "cabezales-de-pozo-suspensi-n-y-sellado", name: "Cabezales de Pozo", image: "/catalog/ai-pencil/20260303/products-clean/cabezales-de-pozo-suspensi-n-y-sellado.png" },
          { id: "empacaduras", name: "Empacaduras", image: "/catalog/ai-pencil/20260303/products-clean/empacaduras.png" },
          { id: "sellos-mec-nicos", name: "Sellos Mecánicos", image: "/catalog/ai-pencil/20260303/products-clean/sellos-mec-nicos.png" }
        ],
      },
      {
        name: "Tuberías Petroleras",
        items: [
          { id: "tuber-a-de-perforaci-n-drill-pipe", name: "Tubería de Perforación (Drill Pipe)", image: "/catalog/brain/c8839c20-9824-4537-9cd0-866a6ab3e772/pip_drill_v2_1772498351235.png" },
          { id: "tuber-a-de-revestimiento-casing", name: "Tubería de Revestimiento (Casing)", image: "/catalog/brain/c8839c20-9824-4537-9cd0-866a6ab3e772/pip_casing_v2_1772498364510.png" },
          { id: "tuber-a-de-producci-n-tubing", name: "Tubería de Producción (Tubing)", image: "/catalog/brain/c8839c20-9824-4537-9cd0-866a6ab3e772/pip_tubing_ven_1772498443475.png" },
          { id: "tuber-a-de-l-nea-line-pipe", name: "Tubería de Línea (Line Pipe)", image: "/catalog/brain/c8839c20-9824-4537-9cd0-866a6ab3e772/pip_line_ven_v2_1772498521591.png" },
          { id: "tuber-a-flexible-coiled-tubing", name: "Tubería Flexible (Coiled Tubing)", image: "/catalog/brain/c8839c20-9824-4537-9cd0-866a6ab3e772/pip_coiled_ven_1772498470306.png" }
        ],
      },
      {
        name: "Equipos de Bombeo para Pozos",
        items: [
          { id: "bombas-electrosumergibles", name: "Bombas Electrosumergibles", image: "/catalog/ai-pencil/20260303/products-clean/bombas-electrosumergibles.png" },
          { id: "bombas-de-cavidad-progresiva-bcp", name: "Bombas de Cavidad Progresiva (BCP)", image: "/catalog/ai-pencil/20260303/products-clean/bombas-de-cavidad-progresiva-bcp.png" },
          { id: "variadores-de-frecuencia-vfd", name: "Variadores de Frecuencia (VFD)", image: "/catalog/ai-pencil/20260303/products-clean/variadores-de-frecuencia-vfd.png" }
        ],
      },
    ],
  },
  {
    id: "prod-04",
    slug: "seguridad-industrial",
    domain: "productos",
    title: "Seguridad Industrial",
    shortTitle: "Seguridad",
    description: "Dotación y equipos de protección industrial para operación segura de personal e instalaciones en campo y planta.",
    heroImage: "/catalog/ai-pencil/20260303/category-heroes/seguridad-industrial-primary.png",
    badge: "Producto agregado",
    source: "agregado",
    sections: [
      {
        name: "Indumentaria y Protección Personal",
        items: [
          { id: "overoles-ign-fugos", name: "Overoles Ignífugos", image: "/catalog/ai-pencil/20260303/products-clean/overoles-ign-fugos.png" },
          { id: "calzado-diel-ctrico", name: "Calzado Dieléctrico", image: "/catalog/ai-pencil/20260303/products-clean/calzado-diel-ctrico.png" },
          { id: "guantes-de-impacto-y-qu-micos", name: "Guantes de Impacto y Químicos", image: "/catalog/ai-pencil/20260303/products-clean/guantes-de-impacto-y-qu-micos.png" },
          { id: "protecci-n-auditiva", name: "Protección Auditiva", image: "/catalog/ai-pencil/20260303/products-clean/protecci-n-auditiva.png" },
          { id: "mascarillas-industriales", name: "Mascarillas Industriales", image: "/catalog/ai-pencil/20260303/products-clean/mascarillas-industriales.png" }
        ],
      },
      {
        name: "Equipos de Emergencia y Detección",
        items: [
          { id: "detectores-multig-s", name: "Detectores Multigás", image: "/catalog/ai-pencil/20260303/products-clean/detectores-multig-s.png" },
          { id: "extintores-pqs-y-co2", name: "Extintores PQS y CO2", image: "/catalog/ai-pencil/20260303/products-clean/extintores-pqs-y-co2.png" },
          { id: "duchas-y-lavaojos", name: "Duchas y Lavaojos", image: "/catalog/ai-pencil/20260303/products-clean/duchas-y-lavaojos.png" },
          { id: "kits-antiderrames", name: "Kits Antiderrames", image: "/catalog/ai-pencil/20260303/products-clean/kits-antiderrames.png" }
        ],
      },
      {
        name: "Sistemas LOTO y Bloqueo",
        items: [
          { id: "sistemas-loto", name: "Sistemas LOTO", image: "/catalog/ai-pencil/20260303/products-clean/sistemas-loto.png" },
          { id: "bloqueadores-de-v-lvulas", name: "Bloqueadores de Válvulas", image: "/catalog/ai-pencil/20260303/products-clean/bloqueadores-de-v-lvulas.png" }
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
    description: "Ejecución técnica para todo el ciclo de vida de sistemas de instrumentación y control, desde ingeniería hasta mantenimiento en campo.",
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
    description: "Gestión integral de procura nacional e internacional y logística especializada hasta almacén de cliente, con cumplimiento normativo y operativo.",
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
