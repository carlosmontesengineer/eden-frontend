import { Component, ElementRef, inject, output, signal } from '@angular/core';
import { BrandLogo } from '../../shared/components/brand-logo/brand-logo';

@Component({
  selector: 'app-header',
  imports: [BrandLogo],
  templateUrl: './header.html',
  styleUrl: './header.css',
  host: {
    '(document:click)': 'onDocumentClick($event)',
    '(document:keydown.escape)': 'menuOpen.set(false)',
  },
})
export class Header {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  readonly reserveClick = output<void>();
  protected readonly menuOpen = signal(false);

  protected readonly navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#refugio', label: 'El Refugio' },
    { href: '#itinerario', label: 'Itinerario de 7 Días' },
    { href: '#guias', label: 'Nuestros Guías' },
    { href: '#preguntas', label: 'Preguntas Frecuentes' },
  ] as const;

  protected onReserve(): void {
    this.menuOpen.set(false);
    this.reserveClick.emit();
  }

  protected onDocumentClick(event: MouseEvent): void {
    if (this.menuOpen() && !this.elementRef.nativeElement.contains(event.target as Node)) {
      this.menuOpen.set(false);
    }
  }
}
