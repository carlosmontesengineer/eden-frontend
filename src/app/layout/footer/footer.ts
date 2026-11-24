import { Component, output } from '@angular/core';
import { RETREAT_CONTACT } from '../../core/data/retreat.data';
import { BrandLogo } from '../../shared/components/brand-logo/brand-logo';

@Component({
  selector: 'app-footer',
  imports: [BrandLogo],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly reserveClick = output<void>();
  protected readonly contact = RETREAT_CONTACT;
  protected readonly whatsappUrl = `https://wa.me/${RETREAT_CONTACT.whatsappNumber}`;
}
