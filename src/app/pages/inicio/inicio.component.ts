import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Kpi {
  titulo: string;
  valor: number;
  detalle: string;
  icono: 'hotel' | 'llave' | 'personas' | 'calendario';
  color: 'azul' | 'verde' | 'dorado' | 'morado';
  tendencia: string;
  sube: boolean;
  progreso?: number;
}

interface Segmento {
  nombre: string;
  cantidad: number;
  color: string;
  dasharray: string;
  offset: number;
}

@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  kpis: Kpi[] = [
    {
      titulo: 'Habitaciones totales', valor: 40, detalle: 'Capacidad del hotel',
      icono: 'hotel', color: 'azul', tendencia: 'Sin cambios', sube: true
    },
    {
      titulo: 'Habitaciones ocupadas', valor: 26, detalle: '65% de ocupación',
      icono: 'llave', color: 'verde', tendencia: '+3 hoy', sube: true, progreso: 65
    },
    {
      titulo: 'Huéspedes hospedados', valor: 41, detalle: 'Actualmente en el hotel',
      icono: 'personas', color: 'dorado', tendencia: '+5 hoy', sube: true
    },
    {
      titulo: 'Reservas activas', valor: 12, detalle: 'Confirmadas y pendientes',
      icono: 'calendario', color: 'morado', tendencia: '-2 hoy', sube: false
    }
  ];

  // Ocupación semanal (%)
  semana = [
    { dia: 'Lun', valor: 52, hoy: false },
    { dia: 'Mar', valor: 65, hoy: true },
    { dia: 'Mié', valor: 70, hoy: false },
    { dia: 'Jue', valor: 74, hoy: false },
    { dia: 'Vie', valor: 88, hoy: false },
    { dia: 'Sáb', valor: 92, hoy: false },
    { dia: 'Dom', valor: 61, hoy: false }
  ];

  // Dona: estado de habitaciones (suma 40)
  readonly radio = 70;
  readonly circunferencia = 2 * Math.PI * this.radio;
  readonly totalHabitaciones = 40;
  segmentos: Segmento[] = [];

  accesos = [
    { ruta: '/habitaciones', titulo: 'Habitaciones', texto: 'Estado, tipos y tarifas por noche.' },
    { ruta: '/huespedes', titulo: 'Huéspedes', texto: 'Registro de huéspedes hospedados.' },
    { ruta: '/reservas', titulo: 'Reservas', texto: 'Check-in, check-out y estados.' }
  ];

  constructor() {
    const estados = [
      { nombre: 'Ocupadas', cantidad: 26, color: '#2868b2' },
      { nombre: 'Disponibles', cantidad: 11, color: '#35b887' },
      { nombre: 'Mantenimiento', cantidad: 3, color: '#e8a83a' }
    ];

    let acumulado = 0;
    this.segmentos = estados.map(e => {
      const largo = (e.cantidad / this.totalHabitaciones) * this.circunferencia;
      const segmento: Segmento = {
        ...e,
        dasharray: `${largo} ${this.circunferencia - largo}`,
        offset: -acumulado
      };
      acumulado += largo;
      return segmento;
    });
  }
}