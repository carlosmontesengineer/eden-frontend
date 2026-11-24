import { Component } from '@angular/core';
import { PACKAGE_BENEFITS } from '../../../core/data/retreat.data';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.html',
  styleUrl: './benefits.css',
})
export class Benefits {
  protected readonly benefits = PACKAGE_BENEFITS;
}
