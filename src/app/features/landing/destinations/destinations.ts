import { Component } from '@angular/core';
import { RETREAT_DESTINATIONS } from '../../../core/data/retreat.data';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.html',
  styleUrl: './destinations.css',
})
export class Destinations {
  protected readonly destinations = RETREAT_DESTINATIONS;
}
