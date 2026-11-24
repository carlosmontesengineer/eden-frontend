import { Component, output } from '@angular/core';
import { RETREAT_CONTACT } from '../../../core/data/retreat.data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly reserveClick = output<void>();
  protected readonly contact = RETREAT_CONTACT;
}
