import { Component } from '@angular/core';

@Component({
  selector: 'app-huespedes',
  imports: [],
  templateUrl: './huespedes.component.html',
  styleUrls: ['./huespedes.component.css', '../../shared/filtros.css']
})
export class HuespedesComponent {
  huespedes = [
    { id: 1, nombre: 'Andrea Torres', documento: '72451893', pais: 'Perú', habitacion: '201' },
    { id: 2, nombre: 'Carlos Mendoza', documento: '45128796', pais: 'Perú', habitacion: '102' },
    { id: 3, nombre: 'Sofía Herrera', documento: 'AR-30458712', pais: 'Argentina', habitacion: '301' },
    { id: 4, nombre: 'Mateo Rossi', documento: 'IT-88213490', pais: 'Italia', habitacion: '301' },
    { id: 5, nombre: 'Lucía Ramírez', documento: '70981234', pais: 'Perú', habitacion: '—' }
  ];

  paises = ['Todos', ...new Set(this.huespedes.map(h => h.pais))];
  pais = 'Todos';
  texto = '';

  get lista() {
    const q = this.texto.trim().toLowerCase();
    return this.huespedes.filter(h =>
      (this.pais === 'Todos' || h.pais === this.pais) &&
      (!q || h.nombre.toLowerCase().includes(q) || h.documento.toLowerCase().includes(q) || h.habitacion.includes(q))
    );
  }
}
