import { Component, computed, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RETREAT_CONTACT } from '../../../core/data/retreat.data';

@Component({
  selector: 'app-reservation-modal',
  imports: [FormsModule],
  templateUrl: './reservation-modal.html',
  styleUrl: './reservation-modal.css',
})
export class ReservationModal {
  readonly open = input.required<boolean>();
  readonly closeModal = output<void>();

  protected readonly guestName = signal('');
  protected readonly origin = signal('');
  protected readonly travelers = signal('1 persona');
  protected readonly notes = signal('');
  protected readonly copied = signal(false);

  protected readonly contact = RETREAT_CONTACT;

  protected readonly composedMessage = computed(() => {
    const name = this.guestName().trim() || 'Peregrino/a';
    const city = this.origin().trim();
    const count = this.travelers();
    const extra = this.notes().trim();

    const lines = [
      `Hola ${this.contact.coordinatorName}, paz y bien.`,
      `Me gustaría solicitar información y reservar mi cupo para el retiro "Un Descanso para el Alma" en Posada El Edén (Experiencia de 7 días).`,
      `• Nombre: ${name}`,
      ...(city ? [`• Ciudad / País: ${city}`] : []),
      `• Cupos de interés: ${count}`,
      ...(extra ? [`• Consulta o intención: ${extra}`] : []),
    ];

    return lines.join('\n');
  });

  protected readonly whatsappUrl = computed(
    () => `https://wa.me/${this.contact.whatsappNumber}?text=${encodeURIComponent(this.composedMessage())}`,
  );

  protected async copyMessage(): Promise<void> {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(this.composedMessage());
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2500);
    }
  }

  protected onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeModal.emit();
    }
  }
}
