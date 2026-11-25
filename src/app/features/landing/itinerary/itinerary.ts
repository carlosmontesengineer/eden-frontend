import { Component, ElementRef, computed, inject, signal } from '@angular/core';
import { ITINERARY_DAYS } from '../../../core/data/retreat.data';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.html',
  styleUrl: './itinerary.css',
})
export class Itinerary {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly days = ITINERARY_DAYS;
  protected readonly selectedDayNumber = signal(1);

  protected readonly currentDay = computed(
    () => this.days.find((d) => d.day === this.selectedDayNumber()) ?? this.days[0],
  );

  protected readonly curveNodes = [
    { day: 1, label: 'Día 1: Aterrizaje', x: 70, y: 148 },
    { day: 2, label: 'Día 2: Asombro', x: 205, y: 74 },
    { day: 4, label: 'Días 3–5: Profundidad', x: 350, y: 112 },
    { day: 6, label: 'Día 6: Celebración', x: 495, y: 68 },
    { day: 7, label: 'Día 7: Paz', x: 635, y: 26 },
  ] as const;

  protected selectDay(day: number): void {
    this.selectedDayNumber.set(day);
    this.scrollActiveTabIntoView();
  }

  protected stepDay(delta: number): void {
    const next = this.selectedDayNumber() + delta;
    if (next >= 1 && next <= this.days.length) {
      this.selectedDayNumber.set(next);
      this.scrollActiveTabIntoView();
    }
  }

  private scrollActiveTabIntoView(): void {
    if (typeof window === 'undefined') {
      return;
    }

    queueMicrotask(() => {
      const activeTab = this.elementRef.nativeElement.querySelector('.day-tab.active');
      if (activeTab instanceof HTMLElement && typeof activeTab.scrollIntoView === 'function') {
        activeTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    });
  }
}
