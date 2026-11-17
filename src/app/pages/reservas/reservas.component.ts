import { Component, inject } from '@angular/core';
import { HotelService, Reserva } from '../../services/hotel.service';

@Component({
  selector: 'app-reservas',
  imports: [],
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css', '../../shared/filtros.css']
})
export class ReservasComponent {
  private hotel = inject(HotelService);

  estados = ['Todas', 'Confirmada', 'Pendiente', 'Cancelada'];
  estado = 'Todas';
  texto = '';

  get todas(): Reserva[] {
    return this.hotel.reservas;
  }

  get lista(): Reserva[] {
    const q = this.texto.trim().toLowerCase();
    return this.todas.filter(r =>
      (this.estado === 'Todas' || r.estado === this.estado) &&
      (!q || r.huesped.toLowerCase().includes(q) || r.codigo.toLowerCase().includes(q) || r.habitacion.includes(q))
    );
  }

  get ingresos(): number {
    return this.lista.filter(r => r.estado !== 'Cancelada').reduce((suma, r) => suma + r.total, 0);
  }

  contar(estado: string): number {
    return estado === 'Todas' ? this.todas.length : this.todas.filter(r => r.estado === estado).length;
  }
}
