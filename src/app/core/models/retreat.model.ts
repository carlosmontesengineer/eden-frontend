export interface PillarItem {
  id: 'alma' | 'mente' | 'cuerpo';
  name: string;
  subtitle: string;
  description: string;
  activities: readonly string[];
}

export interface AnatomyLayer {
  id: 'entorno' | 'instrumentos' | 'fuente';
  ringLabel: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface DestinationItem {
  id: string;
  name: string;
  dayTag: string;
  location: string;
  detail: string;
  variant: 'photo' | 'navy' | 'sage';
  image?: string;
  imageAlt?: string;
  featured?: boolean;
}

export interface ItineraryActivity {
  timeLabel: string;
  text: string;
  icon: 'plane' | 'coffee' | 'cross' | 'moon' | 'sun' | 'camera' | 'mountain' | 'water' | 'heart' | 'utensils' | 'bus';
}

export interface ItineraryDay {
  day: number;
  phase: 'Aterrizaje' | 'Asombro' | 'Profundidad' | 'Celebración' | 'Paz';
  title: string;
  quote: string;
  summary: string;
  activities: readonly ItineraryActivity[];
}

export interface GuideItem {
  id: string;
  initials: string;
  role: string;
  name: string;
  bio: string;
  highlights: readonly string[];
  accent: 'spiritual' | 'clinical' | 'intercessor';
}

export interface BenefitItem {
  id: string;
  title: string;
  detail: string;
  icon: 'home' | 'dining' | 'therapy' | 'transport' | 'tickets' | 'shield';
}

export interface FaqItem {
  question: string;
  answer: string;
}
