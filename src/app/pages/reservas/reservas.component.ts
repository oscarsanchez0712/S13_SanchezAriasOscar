import { Component } from '@angular/core';

@Component({
  selector: 'app-reservas',
  imports: [],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent {
  reservas = [
    { codigo: 'R-001', huesped: 'Andrea Torres', habitacion: '201', ingreso: '2026-11-15', salida: '2026-11-18', estado: 'Confirmada' },
    { codigo: 'R-002', huesped: 'Sofía Herrera', habitacion: '301', ingreso: '2026-11-16', salida: '2026-11-20', estado: 'Confirmada' },
    { codigo: 'R-003', huesped: 'Lucía Ramírez', habitacion: '203', ingreso: '2026-11-19', salida: '2026-11-21', estado: 'Pendiente' },
    { codigo: 'R-004', huesped: 'Carlos Mendoza', habitacion: '102', ingreso: '2026-11-14', salida: '2026-11-17', estado: 'Confirmada' },
    { codigo: 'R-005', huesped: 'Mateo Rossi', habitacion: '302', ingreso: '2026-11-22', salida: '2026-11-25', estado: 'Cancelada' }
  ];
}
