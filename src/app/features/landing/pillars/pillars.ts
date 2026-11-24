import { Component, computed, signal } from '@angular/core';
import { ANATOMY_CORE, ANATOMY_LAYERS, RETREAT_PILLARS } from '../../../core/data/retreat.data';
import { AnatomyLayer } from '../../../core/models/retreat.model';

@Component({
  selector: 'app-pillars',
  templateUrl: './pillars.html',
  styleUrl: './pillars.css',
})
export class Pillars {
  protected readonly pillars = RETREAT_PILLARS;
  protected readonly anatomyCore = ANATOMY_CORE;
  protected readonly layers = ANATOMY_LAYERS;
  protected readonly activeLayerId = signal<AnatomyLayer['id']>('fuente');

  protected readonly activeLayer = computed(
    () => this.layers.find((layer) => layer.id === this.activeLayerId()) ?? this.layers[2],
  );
}
