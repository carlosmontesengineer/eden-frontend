import { Component } from '@angular/core';
import { RETREAT_GUIDES } from '../../../core/data/retreat.data';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.html',
  styleUrl: './guides.css',
})
export class Guides {
  protected readonly guides = RETREAT_GUIDES;
}
