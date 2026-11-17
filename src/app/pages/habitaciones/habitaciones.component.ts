import { Component, inject } from '@angular/core';
import { HotelService, Habitacion } from '../../services/hotel.service';

@Component({
  selector: 'app-habitaciones',
  imports: [],
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css', '../../shared/filtros.css']
})
export class HabitacionesComponent {
  private hotel = inject(HotelService);

  estados = ['Todas', 'Ocupada', 'Disponible', 'Mantenimiento'];
  tipos = ['Todos', 'Simple', 'Doble', 'Suite'];
  estado = 'Todas';
  tipo = 'Todos';
  texto = '';

  get todas(): Habitacion[] {
    return this.hotel.habitaciones;
  }

  get lista(): Habitacion[] {
    const q = this.texto.trim();
    return this.todas.filter(h =>
      (this.estado === 'Todas' || h.estado === this.estado) &&
      (this.tipo === 'Todos' || h.tipo === this.tipo) &&
      (!q || h.numero.includes(q))
    );
  }

  contar(estado: string): number {
    return estado === 'Todas' ? this.todas.length : this.todas.filter(h => h.estado === estado).length;
  }
}
