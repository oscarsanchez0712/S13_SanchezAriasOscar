import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HotelService } from '../../../services/hotel.service';

@Component({
  selector: 'app-actividad',
  imports: [RouterLink],
  templateUrl: './actividad.component.html',
  styleUrl: './actividad.component.css'
})
export class ActividadComponent {
  private hotel = inject(HotelService);

  checkIns = this.hotel.checkInsHoy;
  checkOuts = this.hotel.checkOutsHoy;
  recientes = this.hotel.recientes;
}
