import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    });
  });

  it('should create the app', () => {
    expect(TestBed.createComponent(App).componentInstance).toBeTruthy();
  });

  it('renders the hero, guides, and reservation section without displaying a price', async () => {
    const harness = await RouterTestingHarness.create('/');
    const landing = harness.routeNativeElement;

    expect(landing?.querySelector('h1')?.textContent).toMatch(/Un Descanso\s*para el\s*Alma/);
    expect(landing?.querySelector('.primary-link')?.getAttribute('href')).toBe('#reserva');
    expect(landing?.querySelector('#reserva')?.textContent).toContain('Martha Soraya Facundo');
    expect(landing?.textContent).not.toMatch(/USD\s*1[.,]590/i);
    expect(landing?.querySelector('#guias')?.textContent).toContain('Pbro. Alfredo Arias');
    expect(landing?.querySelector('#guias')?.textContent).toContain('Dr. Yezid Arango');
    expect(landing?.querySelector('#guias')?.textContent).toContain('Laico José Patiño');
  });

  it('switches itinerary days interactively when clicking day tabs', async () => {
    const harness = await RouterTestingHarness.create('/');
    const landing = harness.routeNativeElement as HTMLElement;

    const tabs = landing.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    expect(tabs.length).toBe(7);
    expect(landing.querySelector('.day-detail')?.textContent).toContain('Llegada y Aterrizaje');

    tabs[2].click();
    harness.detectChanges();

    expect(landing.querySelector('.day-detail')?.textContent).toContain('Peregrinación y Milagros');
    expect(landing.querySelector('.day-detail')?.textContent).toContain('Basílica del Señor de los Milagros de Buga');
  });

  it('opens the reservation modal when clicking the header CTA', async () => {
    const harness = await RouterTestingHarness.create('/');
    const landing = harness.routeNativeElement as HTMLElement;

    expect(landing.querySelector('[role="dialog"]')).toBeNull();

    const reserveBtn = landing.querySelector<HTMLButtonElement>('.cta-reserve');
    reserveBtn?.click();
    harness.detectChanges();

    const dialog = landing.querySelector('[role="dialog"]');
    expect(dialog).not.toBeNull();
    expect(dialog?.textContent).toContain('Martha Soraya Facundo');
  });

  it('switches concentric anatomy layers interactively', async () => {
    const harness = await RouterTestingHarness.create('/');
    const landing = harness.routeNativeElement as HTMLElement;

    const outerRing = landing.querySelector<HTMLButtonElement>('.anatomy-ring--outer');
    expect(outerRing?.getAttribute('aria-pressed')).toBe('false');

    outerRing?.click();
    harness.detectChanges();

    expect(outerRing?.getAttribute('aria-pressed')).toBe('true');
    expect(landing.querySelector('.anatomy-core-mobile')?.textContent).toContain(
      'alineación perfecta de mente, cuerpo y espíritu',
    );
  });

  it('toggles the mobile navigation menu and closes the modal on Escape', async () => {
    const harness = await RouterTestingHarness.create('/');
    const landing = harness.routeNativeElement as HTMLElement;

    const menuToggle = landing.querySelector<HTMLButtonElement>('.menu-toggle');
    const nav = landing.querySelector('#main-nav');
    expect(nav?.classList.contains('open')).toBe(false);

    menuToggle?.click();
    harness.detectChanges();
    expect(nav?.classList.contains('open')).toBe(true);

    const reserveBtn = landing.querySelector<HTMLButtonElement>('.cta-reserve');
    reserveBtn?.click();
    harness.detectChanges();
    expect(nav?.classList.contains('open')).toBe(false);
    expect(landing.querySelector('[role="dialog"]')).not.toBeNull();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    harness.detectChanges();
    expect(landing.querySelector('[role="dialog"]')).toBeNull();
  });
});
