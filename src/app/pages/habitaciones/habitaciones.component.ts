import { Component } from '@angular/core';

@Component({
  selector: 'app-habitaciones',
  imports: [],
  templateUrl: './habitaciones.component.html',
  styleUrl: './habitaciones.component.css'
})
export class HabitacionesComponent {
  tipos = [
    { nombre: 'Simple', capacidad: 1, precio: 120, detalle: 'Cama individual y baño privado.' },
    { nombre: 'Doble', capacidad: 2, precio: 190, detalle: 'Cama matrimonial, TV y WiFi.' },
    { nombre: 'Suite', capacidad: 4, precio: 380, detalle: 'Sala, minibar y vista panorámica.' }
  ];

  habitaciones = [
    { numero: '101', tipo: 'Simple', piso: 1, precio: 120, estado: 'Disponible' },
    { numero: '102', tipo: 'Simple', piso: 1, precio: 120, estado: 'Ocupada' },
    { numero: '201', tipo: 'Doble', piso: 2, precio: 190, estado: 'Ocupada' },
    { numero: '202', tipo: 'Doble', piso: 2, precio: 190, estado: 'Mantenimiento' },
    { numero: '203', tipo: 'Doble', piso: 2, precio: 190, estado: 'Disponible' },
    { numero: '301', tipo: 'Suite', piso: 3, precio: 380, estado: 'Ocupada' },
    { numero: '302', tipo: 'Suite', piso: 3, precio: 380, estado: 'Disponible' }
  ];
}
