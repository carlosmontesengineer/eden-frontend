import {
  AnatomyLayer,
  BenefitItem,
  DestinationItem,
  FaqItem,
  GuideItem,
  ItineraryDay,
  PillarItem,
} from '../models/retreat.model';

export const RETREAT_CONTACT = {
  coordinatorName: 'Martha Soraya Facundo',
  phoneDisplay: '+1 (519) 636-2515',
  whatsappNumber: '15196362515',
  location: 'Pereira, Risaralda · Colombia',
  sanctuaryName: 'Casa de Sanación Posada El Edén',
  airfareNote: 'No incluye tiquetes aéreos',
} as const;

export const REFUGE_HIGHLIGHTS = [
  {
    id: 'exhaustion',
    icon: 'candle' as const,
    text: 'Vivimos tiempos de agotamiento, transiciones difíciles y sequedad espiritual.',
  },
  {
    id: 'sanctuary',
    icon: 'wave' as const,
    text: 'Casa de Sanación Posada El Edén no es solo un destino turístico; es un hogar de encuentro y quietud.',
  },
  {
    id: 'restoration',
    icon: 'heart' as const,
    text: 'Un refugio diseñado meticulosamente para restaurar tu bienestar mental, corporal y espiritual bajo la luz de la fe católica.',
  },
] as const;

export const RETREAT_PILLARS: readonly PillarItem[] = [
  {
    id: 'alma',
    name: 'El Alma',
    subtitle: 'Encuentro espiritual y gracia',
    description:
      'Terapias de sanación diarias, dirección espiritual, devoción Mariana, adoración y oración de intercesión.',
    activities: [
      'Dirección espiritual personalizada',
      'Devoción Mariana y adoración',
      'Eucaristía y oración de intercesión',
    ],
  },
  {
    id: 'mente',
    name: 'La Mente',
    subtitle: 'Claridad emocional y acompañamiento',
    description:
      'Terapia psicológica experta, manejo de duelo, acompañamiento en adicciones y talleres de sanación emocional.',
    activities: [
      'Terapia psicológica experta',
      'Manejo de duelo y procesos difíciles',
      'Talleres de sanación emocional',
    ],
  },
  {
    id: 'cuerpo',
    name: 'El Cuerpo',
    subtitle: 'Naturaleza y descanso reparador',
    description:
      'Contacto con la naturaleza exuberante del Eje Cafetero, aguas termales, descanso reparador y gastronomía tradicional.',
    activities: [
      'Aguas termales en Santa Rosa',
      'Gastronomía tradicional colombiana',
      'Descanso en entorno natural puro',
    ],
  },
];

export const ANATOMY_CORE =
  'El Refugio El Edén no ofrece solo distracción, sino una alineación perfecta de mente, cuerpo y espíritu en un ambiente seguro.';

export const ANATOMY_LAYERS: readonly AnatomyLayer[] = [
  {
    id: 'entorno',
    ringLabel: 'El Entorno · Naturaleza',
    title: 'La majestuosidad del Eje Cafetero',
    subtitle: 'Risaralda, Quindío y Valle del Cauca',
    description:
      'La majestuosidad curativa del Eje Cafetero abre los sentidos con aire puro, paisajes de montaña y silencio reparador.',
  },
  {
    id: 'instrumentos',
    ringLabel: 'Los Instrumentos · Facilitadores',
    title: 'Ciencia psicológica y compasión pastoral',
    subtitle: 'Acompañamiento multidisciplinario',
    description:
      'Un equipo multidisciplinario que fusiona la salud del comportamiento y la psicoterapia con la sensibilidad pastoral.',
  },
  {
    id: 'fuente',
    ringLabel: 'La Fuente · La Fe Católica',
    title: 'El ancla de toda la experiencia',
    subtitle: 'Sacramentos, devoción y gracia',
    description:
      'La sanación real ocurre en la fuente: a través de los sacramentos, la oración comunitaria, la devoción Mariana y la gracia de Dios.',
  },
];

export const RETREAT_DESTINATIONS: readonly DestinationItem[] = [
  {
    id: 'cocora',
    name: 'Valle del Cocora',
    dayTag: 'Día 2',
    location: 'Quindío',
    detail: 'Recorrido histórico y maravilla natural entre montañas de niebla y palmas de cera.',
    variant: 'photo',
    image: 'assets/images/hero-cocora.jpg',
    imageAlt: 'Amanecer dorado entre las palmas de cera del Valle del Cocora',
    featured: true,
  },
  {
    id: 'salento',
    name: 'Salento y Artesanías',
    dayTag: 'Día 2',
    location: 'Quindío',
    detail: 'Arquitectura tradicional de balcones coloridos, historia y esencia cafetera.',
    variant: 'photo',
    image: 'assets/images/salento-tradicion.jpg',
    imageAlt: 'Calle tradicional con balcones coloridos en Salento, Quindío',
  },
  {
    id: 'buga',
    name: 'Basílica del Señor de los Milagros',
    dayTag: 'Día 3',
    location: 'Buga, Valle del Cauca',
    detail: 'Peregrinación de fe, participación en la Santa Eucaristía, visita al Camarín, museo y bordados de Cartago.',
    variant: 'navy',
  },
  {
    id: 'termales',
    name: 'Termales de Santa Rosa',
    dayTag: 'Día 4',
    location: 'Santa Rosa de Cabal',
    detail: 'Pausa de bienestar corporal entre cascadas andinas y aguas termales en medio del bosque.',
    variant: 'sage',
  },
  {
    id: 'filandia',
    name: 'Filandia y Finca Cafetera',
    dayTag: 'Día 6',
    location: 'Eje Cafetero',
    detail: 'Encuentro con la cultura cafetera tradicional, miradores y cestería artesanal.',
    variant: 'photo',
    image: 'assets/images/finca-cafetera.jpg',
    imageAlt: 'Cultivos de café entre colinas verdes al amanecer en el Eje Cafetero',
  },
  {
    id: 'eden',
    name: 'Refugio Posada El Edén',
    dayTag: 'Días 1–7',
    location: 'Pereira, Risaralda',
    detail: 'Tu casa de sanación: jardines de paz, alimentación tradicional y espacios de oración.',
    variant: 'photo',
    image: 'assets/images/posada-eden-garden.jpg',
    imageAlt: 'Jardín con fuente de terracota y bambú en Casa de Sanación Posada El Edén',
    featured: true,
  },
];

export const ITINERARY_DAYS: readonly ItineraryDay[] = [
  {
    day: 1,
    phase: 'Aterrizaje',
    title: 'Llegada y Aterrizaje',
    quote: 'Dejando atrás el peso del mundo para entrar en un espacio de gracia.',
    summary: 'Recepción en Pereira, bienvenida fraterna en el Refugio El Edén y apertura espiritual.',
    activities: [
      { timeLabel: 'Llegada', text: 'Traslado del aeropuerto al Refugio El Edén.', icon: 'plane' },
      {
        timeLabel: 'Bienvenida',
        text: 'Café de bienvenida, entrega de souvenir y almuerzo tradicional.',
        icon: 'coffee',
      },
      {
        timeLabel: 'Encuentro',
        text: 'Socialización de la misión espiritual del retiro.',
        icon: 'cross',
      },
      { timeLabel: 'Noche', text: 'Cena y descanso reparador.', icon: 'moon' },
    ],
  },
  {
    day: 2,
    phase: 'Asombro',
    title: 'Asombro y Tradición',
    quote: 'Contemplar la creación para despertar la gratitud del corazón.',
    summary: 'Taller matutino de sanación espiritual y recorrido por Salento y el Valle del Cocora.',
    activities: [
      {
        timeLabel: 'Mañana',
        text: '1ra parte: Taller de Sanación Espiritual matutino.',
        icon: 'cross',
      },
      {
        timeLabel: 'Tarde',
        text: 'Salida hacia Salento tras el almuerzo y visita a las artesanías.',
        icon: 'camera',
      },
      {
        timeLabel: 'Paisaje',
        text: 'Recorrido histórico y maravilla natural en el Valle del Cocora.',
        icon: 'mountain',
      },
      {
        timeLabel: 'Noche',
        text: 'Cena, actividad lúdica en grupo y descanso en el Refugio El Edén.',
        icon: 'moon',
      },
    ],
  },
  {
    day: 3,
    phase: 'Profundidad',
    title: 'Peregrinación y Milagros',
    quote: 'Caminar con fe hacia el encuentro con el Señor de los Milagros.',
    summary: 'Jornada de peregrinación a Buga, Santa Eucaristía y parada cultural en Cartago.',
    activities: [
      { timeLabel: 'Trayecto', text: 'Viaje a Buga con refrigerio en el camino.', icon: 'bus' },
      {
        timeLabel: 'Santuario',
        text: 'Visita a la Basílica del Señor de los Milagros de Buga, Eucaristía y visita al Camarín.',
        icon: 'cross',
      },
      {
        timeLabel: 'Tarde',
        text: 'Almuerzo tradicional, visita al museo y tiempo libre para compras.',
        icon: 'utensils',
      },
      {
        timeLabel: 'Regreso',
        text: 'Ingreso a Cartago para conocer sus famosos bordados y cena en el parque lineal antes de volver al Refugio.',
        icon: 'sun',
      },
    ],
  },
  {
    day: 4,
    phase: 'Profundidad',
    title: 'Sanación y Descanso',
    quote: 'Aguas cálidas que renuevan el cuerpo mientras la gracia serena el alma.',
    summary: 'Segunda etapa del taller de sanación y tarde inmersiva en los Termales de Santa Rosa.',
    activities: [
      { timeLabel: 'Mañana', text: 'Desayuno reparador en el Refugio.', icon: 'coffee' },
      {
        timeLabel: 'Taller',
        text: '2da parte: Taller de Sanación Espiritual (refrigerio incluido).',
        icon: 'cross',
      },
      { timeLabel: 'Mediodía', text: 'Almuerzo tradicional en el Refugio.', icon: 'utensils' },
      {
        timeLabel: 'Bienestar',
        text: 'Salida a Termales de Santa Rosa para disfrutar de la naturaleza y las aguas termales.',
        icon: 'water',
      },
      { timeLabel: 'Noche', text: 'Cena y descanso reparador en el Refugio.', icon: 'moon' },
    ],
  },
  {
    day: 5,
    phase: 'Profundidad',
    title: 'Terapia Profunda y Devoción',
    quote: 'Integrar la sanación emocional con la ternura de la Madre del Cielo.',
    summary: 'Sesión clínica con el Dr. Yezid Arango, charla Mariana y Eucaristía en santuario.',
    activities: [
      {
        timeLabel: 'Mañana',
        text: 'Terapia y acompañamiento clínico con el Dr. Yezid Arango.',
        icon: 'heart',
      },
      { timeLabel: 'Mediodía', text: 'Almuerzo en el Refugio El Edén.', icon: 'utensils' },
      {
        timeLabel: 'Tarde',
        text: 'Charla espiritual sobre la Virgen María y visita al Santuario de la Virgen del Jordán.',
        icon: 'cross',
      },
      { timeLabel: 'Eucaristía', text: 'Celebración de la Santa Eucaristía.', icon: 'sun' },
      {
        timeLabel: 'Noche',
        text: 'Cena en Pereira y regreso al Refugio El Edén.',
        icon: 'moon',
      },
    ],
  },
  {
    day: 6,
    phase: 'Celebración',
    title: 'Cultura y Despedida',
    quote: 'Celebrar los frutos recogidos en comunidad y gratitud.',
    summary: 'Inmersión en finca cafetera y Filandia, seguida de una cena especial de despedida.',
    activities: [
      { timeLabel: 'Mañana', text: 'Desayuno en el Refugio El Edén.', icon: 'coffee' },
      { timeLabel: 'Cultura', text: 'Visita guiada a finca cafetera tradicional.', icon: 'sun' },
      { timeLabel: 'Pueblo', text: 'Visita a Filandia, almuerzo y regreso a Pereira.', icon: 'camera' },
      {
        timeLabel: 'Despedida',
        text: 'Cena de despedida, retroalimentación fraterna y entrega de souvenir final.',
        icon: 'heart',
      },
    ],
  },
  {
    day: 7,
    phase: 'Paz',
    title: 'Regreso al Hogar',
    quote: 'Volver a casa con un corazón liviano, acompañado y en paz.',
    summary: 'Desayuno de confraternidad para sellar los lazos formados y traslado al aeropuerto.',
    activities: [
      {
        timeLabel: 'Mañana',
        text: 'Desayuno de confraternidad para sellar los lazos formados.',
        icon: 'coffee',
      },
      {
        timeLabel: 'Traslado',
        text: 'Traslado organizado al aeropuerto, llevando un alma renovada.',
        icon: 'plane',
      },
    ],
  },
];

export const RETREAT_GUIDES: readonly GuideItem[] = [
  {
    id: 'alfredo-arias',
    initials: 'P.A.',
    role: 'El Guía Espiritual',
    name: 'Pbro. Alfredo Arias',
    bio: 'Carisma de sanación inspirado en el amor. Capellán de grupos Marianos y de la comunidad de claustro Hermanas Concepcionistas.',
    highlights: ['Dirección espiritual', 'Devoción Mariana', 'Sacramentos'],
    accent: 'spiritual',
  },
  {
    id: 'yezid-arango',
    initials: 'Y.A.',
    role: 'El Experto Clínico',
    name: 'Dr. Yezid Arango',
    bio: 'Experto en salud del comportamiento, manejo de duelo y psicología espiritual. Director de clínicas, escritor y conferencista.',
    highlights: ['Salud del comportamiento', 'Manejo de duelo', 'Psicología espiritual'],
    accent: 'clinical',
  },
  {
    id: 'jose-patino',
    initials: 'J.P.',
    role: 'El Intercesor',
    name: 'Laico José Patiño',
    bio: 'Misionero orante de intercesión. Siervo de Dios con amplios carismas al servicio de la comunidad, conferencista y escritor.',
    highlights: ['Oración de intercesión', 'Servicio pastoral', 'Acompañamiento'],
    accent: 'intercessor',
  },
];

export const PACKAGE_BENEFITS: readonly BenefitItem[] = [
  {
    id: 'alojamiento',
    title: 'Alojamiento',
    detail: 'Estadía completa en la Casa de Sanación Posada El Edén.',
    icon: 'home',
  },
  {
    id: 'alimentacion',
    title: 'Alimentación',
    detail: 'Desayunos, almuerzos, cenas y refrigerios diarios tradicionales.',
    icon: 'dining',
  },
  {
    id: 'talleres',
    title: 'Talleres y Terapia',
    detail: 'Toda la programación de sanación, psicología espiritual y charlas.',
    icon: 'therapy',
  },
  {
    id: 'transporte',
    title: 'Transporte',
    detail: 'Traslados seguros desde el aeropuerto y hacia todas las rutas mencionadas.',
    icon: 'transport',
  },
  {
    id: 'entradas',
    title: 'Entradas',
    detail: 'Acceso garantizado a termales, basílicas, museos y miradores.',
    icon: 'tickets',
  },
  {
    id: 'proteccion',
    title: 'Protección',
    detail: 'Seguro básico de viajes incluido para tu completa paz mental.',
    icon: 'shield',
  },
];

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: '¿El retiro incluye los tiquetes aéreos?',
    answer:
      'No. Los tiquetes aéreos hacia y desde Pereira se adquieren por separado. Una vez aterrizas, el programa incluye todos tus traslados desde el aeropuerto y hacia cada destino del itinerario.',
  },
  {
    question: '¿Cuándo es el próximo retiro y cuántos cupos hay?',
    answer:
      'Trabajamos con cupos limitados para asegurar una experiencia íntima y personalizada. Las fechas de los próximos grupos y la disponibilidad actual se confirman directamente al solicitar tu reserva con nuestra coordinadora.',
  },
  {
    question: '¿Qué incluye exactamente la experiencia en El Edén?',
    answer:
      'Incluye los 7 días y 6 noches de estadía en Posada El Edén, alimentación tradicional completa (desayunos, almuerzos, cenas y refrigerios), talleres espirituales, terapia clínica, traslados locales, entradas a termales y basílicas, y seguro básico de viaje.',
  },
  {
    question: '¿Dónde me hospedaré durante la experiencia?',
    answer:
      'Te hospedarás en la Casa de Sanación Posada El Edén, ubicada en Pereira (Risaralda), rodeada de tranquilidad, jardines y la naturaleza del Eje Cafetero.',
  },
  {
    question: '¿Puedo viajar solo o acompañado?',
    answer:
      'Puedes vivir el retiro de manera individual, en pareja o con familiares. Desde tu llegada al aeropuerto serás recibido por nuestro equipo y caminarás junto a un grupo fraterno.',
  },
  {
    question: '¿Cómo reservo mi cupo o solicito información sobre el valor y fechas?',
    answer:
      'Puedes iniciar tu pre-reserva directamente desde el botón "Reservar mi Cupo" o escribir por WhatsApp a Martha Soraya Facundo (+1 519 636-2515), quien te brindará información personalizada sobre fechas, cupos y modalidades de reserva.',
  },
  {
    question: '¿Qué documentos necesito para viajar a Colombia?',
    answer:
      'Los requisitos migratorios dependen de tu nacionalidad y país de salida. Te recomendamos verificar pasaporte vigente y requisitos oficiales de ingreso antes de emitir tus tiquetes aéreos.',
  },
  {
    question: '¿Cómo se manejan cancelaciones o cambios de fecha?',
    answer:
      'Las condiciones específicas de cancelación, reprogramación y reembolso se entregan por escrito junto con la confirmación de tu fecha de retiro.',
  },
];
