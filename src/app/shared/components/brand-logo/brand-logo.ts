import { Component, input } from '@angular/core';

@Component({
  selector: 'app-brand-logo',
  template: `
    <span class="brand-lockup" [class.brand-lockup--light]="theme() === 'light'">
      <svg
        class="brand-monogram"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="29" stroke="currentColor" stroke-width="2.5" />
        <!-- Marian Cross & M Monogram -->
        <path
          d="M32 11V48M25 18.5H39M13.5 40.5H50.5"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
        />
        <path
          d="M19 47V26.5L32 39.5L45 26.5V47"
          stroke="currentColor"
          stroke-width="2.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span class="brand-text">
        <span class="brand-name">CASA DE SANACIÓN</span>
        <span class="brand-sub">Posada el Edén</span>
      </span>
    </span>
  `,
  styles: `
    .brand-lockup {
      display: inline-flex;
      align-items: center;
      gap: clamp(0.5rem, 1.8vw, 0.72rem);
      color: var(--color-primary);
    }

    .brand-lockup--light {
      color: var(--color-surface);
    }

    .brand-monogram {
      width: clamp(2.15rem, 5.8vw, 2.65rem);
      height: clamp(2.15rem, 5.8vw, 2.65rem);
      flex: 0 0 auto;
    }

    .brand-text {
      display: flex;
      flex-direction: column;
      line-height: 1.05;
    }

    .brand-name {
      font-family: var(--font-heading);
      font-size: clamp(0.78rem, 2.3vw, 0.92rem);
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .brand-sub {
      font-family: var(--font-heading);
      font-style: italic;
      font-size: clamp(0.8rem, 2.1vw, 0.9rem);
      font-weight: 500;
      opacity: 0.85;
      white-space: nowrap;
    }
  `,
})
export class BrandLogo {
  readonly theme = input<'dark' | 'light'>('dark');
}
