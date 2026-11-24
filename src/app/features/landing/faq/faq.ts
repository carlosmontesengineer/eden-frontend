import { Component } from '@angular/core';
import { FAQ_ITEMS, RETREAT_CONTACT } from '../../../core/data/retreat.data';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  protected readonly questions = FAQ_ITEMS;
  protected readonly contact = RETREAT_CONTACT;
  protected readonly whatsappUrl = `https://wa.me/${RETREAT_CONTACT.whatsappNumber}`;
}
