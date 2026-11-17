import { Injectable } from '@angular/core';

export type EstadoHabitacion = 'Ocupada' | 'Disponible' | 'Mantenimiento';
export type TipoHabitacion = 'Simple' | 'Doble' | 'Suite';
export type EstadoReserva = 'Confirmada' | 'Pendiente' | 'Cancelada';

export interface Habitacion {
  numero: string;
  piso: number;
  tipo: TipoHabitacion;
  tarifa: number;
  estado: EstadoHabitacion;
  huespedes: number;
}

export interface Reserva {
  codigo: string;
  huesped: string;
  habitacion: string;
  entrada: string;
  salida: string;
  entradaTxt: string;
  salidaTxt: string;
  noches: number;
  total: number;
  estado: EstadoReserva;
}

const TARIFAS: Record<TipoHabitacion, number> = { Simple: 120, Doble: 180, Suite: 320 };
const ESTADOS: Record<string, EstadoHabitacion> = { O: 'Ocupada', D: 'Disponible', M: 'Mantenimiento' };

// Un texto por piso (10 habitaciones). Total: 26 ocupadas, 11 disponibles, 3 en mantenimiento.
const PISOS = ['OOODOOMODO', 'ODOOODOOOM', 'OODODOODOO', 'DODODOODMO'];

// [código, huésped, habitación, días de entrada respecto a hoy, días de salida, estado]
const RESERVAS: [string, string, string, number, number, EstadoReserva][] = [
  ['R-1001', 'Andrea Torres', '201', -2, 1, 'Confirmada'],
  ['R-1002', 'Carlos Mendoza', '102', -3, 0, 'Confirmada'],
  ['R-1003', 'Sofía Herrera', '301', -1, 3, 'Confirmada'],
  ['R-1004', 'Mateo Rossi', '302', 0, 4, 'Confirmada'],
  ['R-1005', 'Lucía Ramírez', '105', 0, 2, 'Pendiente'],
  ['R-1006', 'Diego Paredes', '208', -4, 0, 'Confirmada'],
  ['R-1007', 'Valeria Cruz', '410', 1, 5, 'Confirmada'],
  ['R-1008', 'Jorge Salazar', '304', 2, 4, 'Pendiente'],
  ['R-1009', 'Camila Ortega', '207', 0, 3, 'Confirmada'],
  ['R-1010', 'Renzo Vargas', '110', 3, 6, 'Pendiente'],
  ['R-1011', 'Paula Medina', '401', 5, 8, 'Confirmada'],
  ['R-1012', 'Hugo Castillo', '109', 7, 10, 'Pendiente'],
  ['R-1013', 'Ana Quispe', '203', 2, 3, 'Cancelada'],
  ['R-1014', 'Luis Palomino', '306', -1, 1, 'Cancelada']
];

function dia(offset: number): Date {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d;
}

function iso(d: Date): string {
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${dd}`;
}

function corto(d: Date): string {
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function crearHabitaciones(): Habitacion[] {
  const lista: Habitacion[] = [];
  let ocupadas = 0;
  PISOS.forEach((fila, i) => {
    [...fila].forEach((c, j) => {
      const tipo: TipoHabitacion = j < 4 ? 'Simple' : j < 8 ? 'Doble' : 'Suite';
      const estado = ESTADOS[c];
      let huespedes = 0;
      if (estado === 'Ocupada') {
        huespedes = ocupadas < 15 ? 2 : 1; // 15x2 + 11x1 = 41 huéspedes
        ocupadas++;
      }
      lista.push({
        numero: `${i + 1}${String(j + 1).padStart(2, '0')}`,
        piso: i + 1,
        tipo,
        tarifa: TARIFAS[tipo],
        estado,
        huespedes
      });
    });
  });
  return lista;
}

function crearReservas(habs: Habitacion[]): Reserva[] {
  return RESERVAS.map(([codigo, huesped, habitacion, ini, fin, estado]) => {
    const noches = fin - ini;
    const tarifa = habs.find(h => h.numero === habitacion)?.tarifa ?? 150;
    return {
      codigo,
      huesped,
      habitacion,
      entrada: iso(dia(ini)),
      salida: iso(dia(fin)),
      entradaTxt: corto(dia(ini)),
      salidaTxt: corto(dia(fin)),
      noches,
      total: noches * tarifa,
      estado
    };
  });
}

@Injectable({ providedIn: 'root' })
export class HotelService {
  readonly habitaciones = crearHabitaciones();
  readonly reservas = crearReservas(this.habitaciones);
  readonly hoy = iso(new Date());

  get checkInsHoy(): Reserva[] {
    return this.reservas.filter(r => r.entrada === this.hoy && r.estado !== 'Cancelada');
  }

  get checkOutsHoy(): Reserva[] {
    return this.reservas.filter(r => r.salida === this.hoy && r.estado !== 'Cancelada');
  }

  get recientes(): Reserva[] {
    return [...this.reservas].sort((a, b) => b.codigo.localeCompare(a.codigo)).slice(0, 5);
  }
}
