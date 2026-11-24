import { Component, signal } from '@angular/core';
import { Footer } from '../../layout/footer/footer';
import { Header } from '../../layout/header/header';
import { ReservationModal } from '../../shared/components/reservation-modal/reservation-modal';
import { Benefits } from './benefits/benefits';
import { Destinations } from './destinations/destinations';
import { Faq } from './faq/faq';
import { Guides } from './guides/guides';
import { Hero } from './hero/hero';
import { Introduction } from './introduction/introduction';
import { Itinerary } from './itinerary/itinerary';
import { Pillars } from './pillars/pillars';
import { Pricing } from './pricing/pricing';

@Component({
  selector: 'app-landing',
  imports: [
    Header,
    Hero,
    Introduction,
    Pillars,
    Destinations,
    Itinerary,
    Guides,
    Benefits,
    Pricing,
    Faq,
    Footer,
    ReservationModal,
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  protected readonly modalOpen = signal(false);

  protected openReservationModal(): void {
    this.modalOpen.set(true);
  }

  protected closeReservationModal(): void {
    this.modalOpen.set(false);
  }
}
