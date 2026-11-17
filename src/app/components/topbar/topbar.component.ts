import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HotelService } from '../../services/hotel.service';

interface Resultado { texto: string; detalle: string; ruta: string; }
interface Aviso { texto: string; ruta: string; }

@Component({
  selector: 'app-topbar',
  imports: [RouterLink],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  private hotel = inject(HotelService);
  private ref = inject(ElementRef);

  fecha = this.formatoFecha();
  busqueda = '';
  resultados: Resultado[] = [];
  abierto: '' | 'avisos' | 'usuario' = '';
  avisos: Aviso[] = [];

  constructor() {
    const pendientes = this.hotel.reservas.filter(r => r.estado === 'Pendiente').length;
    const mantenimiento = this.hotel.habitaciones.filter(h => h.estado === 'Mantenimiento').length;
    this.avisos = [
      { texto: `${this.hotel.checkInsHoy.length} check-ins programados para hoy`, ruta: '/reservas' },
      { texto: `${this.hotel.checkOutsHoy.length} check-outs programados para hoy`, ruta: '/reservas' },
      { texto: `${pendientes} reservas pendientes de confirmar`, ruta: '/reservas' },
      { texto: `${mantenimiento} habitaciones en mantenimiento`, ruta: '/habitaciones' }
    ];
  }

  private formatoFecha(): string {
    const t = new Date().toLocaleDateString('es-PE', { weekday: 'long', day: 'numeric', month: 'long' });
    return t.charAt(0).toUpperCase() + t.slice(1);
  }

  buscar(texto: string) {
    this.busqueda = texto;
    this.abierto = '';
    const q = texto.trim().toLowerCase();
    if (q.length < 2) {
      this.resultados = [];
      return;
    }
    const res: Resultado[] = [];
    for (const r of this.hotel.reservas) {
      if (r.huesped.toLowerCase().includes(q) || r.codigo.toLowerCase().includes(q)) {
        res.push({ texto: r.huesped, detalle: `Reserva ${r.codigo} · Hab. ${r.habitacion}`, ruta: '/reservas' });
      }
    }
    for (const h of this.hotel.habitaciones) {
      if (h.numero.includes(q)) {
        res.push({ texto: `Habitación ${h.numero}`, detalle: `${h.tipo} · ${h.estado}`, ruta: '/habitaciones' });
      }
    }
    this.resultados = res.slice(0, 6);
  }

  alternar(panel: 'avisos' | 'usuario') {
    this.abierto = this.abierto === panel ? '' : panel;
    this.busqueda = '';
    this.resultados = [];
  }

  cerrar() {
    this.abierto = '';
    this.busqueda = '';
    this.resultados = [];
  }

  @HostListener('document:click', ['$event'])
  fuera(e: Event) {
    if (!this.ref.nativeElement.contains(e.target)) {
      this.abierto = '';
      this.busqueda = '';
      this.resultados = [];
    }
  }
}
