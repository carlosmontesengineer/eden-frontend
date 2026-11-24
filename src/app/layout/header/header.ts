import { Component, output, signal } from '@angular/core';
import { BrandLogo } from '../../shared/components/brand-logo/brand-logo';

@Component({
  selector: 'app-header',
  imports: [BrandLogo],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
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
}
