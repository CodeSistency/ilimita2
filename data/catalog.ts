export type CatalogDomain = "productos" | "servicios"
export type CatalogSource = "base" | "agregado"

export interface CatalogSection {
  name: string
  items: string[]
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
    heroImage: "/venezuela/cat_01_instrumentacion.png",
    badge: "Producto base",
    source: "base",
    sections: [
      {
        name: "Medición de Presión",
        items: [
          "Transmisores de Presión (Relativa, Absoluta y Diferencial)",
          "Manómetros Industriales",
          "Interruptores de Presión (Pressure Switches)",
        ],
      },
      {
        name: "Medición de Temperatura",
        items: [
          "Sensores de Temperatura",
          "Transmisores de Temperatura",
          "Termopozos",
          "Pirómetros Infrarrojos",
        ],
      },
      {
        name: "Medición de Flujo (Caudal)",
        items: [
          "Caudalímetros Magnéticos",
          "Caudalímetros Ultrasónicos",
          "Caudalímetros de Masa (Coriolis)",
          "Caudalímetros Vortex",
          "Caudalímetros de Turbina",
          "Elementos Primarios de Flujo",
        ],
      },
      {
        name: "Medición de Nivel",
        items: [
          "Transmisores de Nivel Radar (Onda Guiada y No Contacto)",
          "Transmisores Ultrasónicos",
          "Transmisores Capacitivos",
          "Medidores Hidrostáticos",
          "Interruptores de Nivel",
        ],
      },
      {
        name: "Instrumentación Analítica",
        items: [
          "Analizadores de pH/ORP y Conductividad",
          "Analizadores de Gas",
          "Medidores de Humedad / Punto de Rocío",
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
    heroImage: "/venezuela/cat_02_control.png",
    badge: "Producto base",
    source: "base",
    sections: [
      {
        name: "Sistemas de Control",
        items: [
          "Sistemas de Control Distribuido (DCS)",
          "Controladores Lógicos Programables (PLC)",
          "Sistemas SCADA",
          "Unidades Terminales Remotas (RTU)",
          "Edge Devices",
          "Sistemas Instrumentados de Seguridad (SIS)",
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
    heroImage: "/venezuela/cat_03_actuacion.png",
    badge: "Producto base",
    source: "base",
    sections: [
      {
        name: "Válvulas de Control",
        items: [
          "Válvulas de Control",
          "Posicionadores",
          "Accesorios",
        ],
      },
      {
        name: "Actuadores",
        items: [
          "Neumáticos (Diafragma / Pistón)",
          "Eléctricos",
          "Hidráulicos y Electrohidráulicos",
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
    heroImage: "/venezuela/cat_04_bombeo.png",
    badge: "Producto agregado",
    source: "agregado",
    sections: [
      {
        name: "Sistemas de Bombeo",
        items: [
          "Bombas de Cavidad Progresiva (BCP)",
          "Bombas Centrífugas",
          "Bombas de Pistón / Reciprocantes",
          "Bombas Electrosumergibles",
        ],
      },
      {
        name: "Válvulas Industriales de Proceso",
        items: [
          "Válvulas de Compuerta",
          "Válvulas de Bola",
          "Válvulas de Tapón",
          "Válvulas de Globo",
          "Válvulas de Alivio y Seguridad",
          "Válvulas Mariposa",
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
    heroImage: "/venezuela/cat_05_pozo.png",
    badge: "Producto agregado",
    source: "agregado",
    sections: [
      {
        name: "Cabillas Petroleras",
        items: [
          "Cabillas Grado C (Acero al Carbono)",
          "Cabillas Grado K (Aleación de Níquel)",
          "Cabillas Grado D (Alta Resistencia)",
          "Cabillas de Fibra de Vidrio (FRP)",
          "Cabillas Ultra-High Strength",
          "Cabillas Continuas (Continuous Rod)",
        ],
      },
      {
        name: "Componentes Complementarios",
        items: [
          "Cuplas",
          "Centralizadores",
          "Barra Pulida",
        ],
      },
      {
        name: "Cabezales y Sellado",
        items: [
          "Cabezales de Pozo (Suspensión y Sellado)",
          "Variadores de Frecuencia (VFD)",
          "Empacaduras",
          "Sellos Mecánicos",
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
    heroImage: "/venezuela/cat_06_tuberias.png",
    badge: "Producto agregado",
    source: "agregado",
    sections: [
      {
        name: "Tipos de Tubería",
        items: [
          "Tubería de Perforación (Drill Pipe)",
          "Tubería de Revestimiento (Casing)",
          "Tubería de Producción (Tubing)",
          "Tubería de Línea (Line Pipe)",
          "Tubería Flexible (Coiled Tubing)",
          "Tubería de Conducción Eléctrica (Conduit)",
          "Tubería de Acero Inoxidable y Aleaciones",
        ],
      },
      {
        name: "Materiales y Normas",
        items: [
          "Acero al carbono (J55, N80, P110)",
          "API 5L",
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
    heroImage: "/venezuela/cat_07_electrico.png",
    badge: "Producto agregado",
    source: "agregado",
    sections: [
      {
        name: "Generación y Energía",
        items: [
          "Generadores Diésel",
          "Turbinas de Gas",
          "Transformadores (Aceite y Secos)",
          "E-Houses",
          "Bancos de Baterías",
          "Rectificadores",
        ],
      },
      {
        name: "Media y Baja Tensión",
        items: [
          "GIS / AIS",
          "Paneles de Arranque y Protección",
          "Arrancadores Suaves",
          "Variadores de Frecuencia (VFD)",
          "UPS",
        ],
      },
      {
        name: "Control y Automatización Eléctrica",
        items: ["PLC", "RTU"],
      },
      {
        name: "Protección Catódica",
        items: [
          "Rectificadores de Corriente Impresa",
          "Ánodos de Sacrificio",
          "Ánodos ICCP",
          "Electrodos de Referencia",
        ],
      },
      {
        name: "Instrumentos Eléctricos",
        items: [
          "Megóhmetros",
          "Cámaras Termográficas",
          "Multímetros Intrínsecamente Seguros",
          "Analizadores de Calidad de Potencia",
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
    heroImage: "/venezuela/cat_08_seguridad.png",
    badge: "Producto agregado",
    source: "agregado",
    sections: [
      {
        name: "Equipos de Protección y Emergencia",
        items: [
          "Overoles Ignífugos",
          "Calzado Dieléctrico",
          "Guantes de Impacto y Químicos",
          "Protección Auditiva",
          "Detectores Multigás",
          "SCBA",
          "Mascarillas Industriales",
          "Kits Antiderrames",
          "Extintores PQS y CO2",
          "Duchas y Lavaojos",
        ],
      },
      {
        name: "Sistemas LOTO",
        items: ["Sistemas LOTO", "Bloqueadores de Válvulas"],
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
    heroImage: "/venezuela/cat_09_auxiliares.png",
    badge: "Producto base",
    source: "base",
    sections: [
      {
        name: "Accesorios y Complementos",
        items: [
          "Manifolds",
          "Bridas",
          "Tubing & Fittings",
          "Barreras de Aislamiento",
          "Acondicionadores de Señal",
          "Paneles y Gabinetes",
          "Instrumentación Inalámbrica",
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
          "Ingeniería de Detalle en I&C",
          "Configuración y Programación",
          "Instalación y Commissioning",
          "Calibración y Certificación",
          "Mantenimiento Preventivo y Correctivo",
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
          "Identificación de fabricantes nacionales",
          "Cumplimiento COVENIN",
          "Gestión fiscal local",
          "Optimización de inventarios",
        ],
      },
      {
        name: "Procura Internacional",
        items: [
          "Identificación OEM en EEUU, Europa y Asia",
          "Negociación FOB, EXW, FCA",
          "Gestión de seguros y embalaje especializado",
          "Responsabilidad integral hasta almacén del cliente",
        ],
      },
      {
        name: "Logística Nacional",
        items: [
          "Administración de flotas especializadas",
          "Distribución a taladros, estaciones y refinerías",
          "Cumplimiento normativo de transporte",
        ],
      },
      {
        name: "Logística Internacional",
        items: [
          "Gestión de carga sobredimensionada",
          "Aduanas y nacionalización",
          "Rutas estratégicas",
        ],
      },
    ],
  },
]
