import { Component, output } from '@angular/core';
import { RETREAT_CONTACT } from '../../../core/data/retreat.data';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class Pricing {
  readonly reserveClick = output<void>();
  protected readonly contact = RETREAT_CONTACT;
  protected readonly whatsappUrl = `https://wa.me/${RETREAT_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    `Hola ${RETREAT_CONTACT.coordinatorName}, me gustaría recibir información sobre próximas fechas y reservar mi cupo en el retiro "Un Descanso para el Alma".`,
  )}`;
}
