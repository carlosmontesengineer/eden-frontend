import { Component } from '@angular/core';
import { REFUGE_HIGHLIGHTS } from '../../../core/data/retreat.data';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.html',
  styleUrl: './introduction.css',
})
export class Introduction {
  protected readonly highlights = REFUGE_HIGHLIGHTS;
}
