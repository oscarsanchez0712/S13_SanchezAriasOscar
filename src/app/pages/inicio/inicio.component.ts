import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  kpis = [
    { titulo: 'Habitaciones totales', valor: 40, detalle: 'Capacidad del hotel' },
    { titulo: 'Habitaciones ocupadas', valor: 26, detalle: '65% de ocupación' },
    { titulo: 'Huéspedes hospedados', valor: 41, detalle: 'Actualmente en el hotel' },
    { titulo: 'Reservas activas', valor: 12, detalle: 'Confirmadas y pendientes' }
  ];

  accesos = [
    { ruta: '/habitaciones', titulo: 'Habitaciones', texto: 'Estado, tipos y tarifas por noche.' },
    { ruta: '/huespedes', titulo: 'Huéspedes', texto: 'Registro de huéspedes hospedados.' },
    { ruta: '/reservas', titulo: 'Reservas', texto: 'Check-in, check-out y estados.' }
  ];
}
