import { Component, OnInit } from '@angular/core';
import { TuService } from '../services/tu.service';

@Component({
  selector: 'app-tabla-proyectos',
  templateUrl: './tabla-proyectos.component.html',
  styleUrls: ['./tabla-proyectos.component.css']
})
export class TablaProyectosComponent implements OnInit {

  resultados: any[] = [];

  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private servicio: TuService) {}

  ngOnInit(): void {
    this.obtenerResultados();
  }

  obtenerResultados() {
    this.servicio.getProyectos().subscribe(data => {
      this.resultados = data;
    });
  }

  ordenar(columna: string) {
    if (this.sortColumn === columna) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = columna;
      this.sortDirection = 'asc';
    }

    this.resultados.sort((a: any, b: any) => {
      const valorA = a[columna];
      const valorB = b[columna];

      if (valorA < valorB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valorA > valorB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  iconoOrden(columna: string) {
    if (this.sortColumn !== columna) return '';
    return this.sortDirection === 'asc' ? '↑' : '↓';
  }
}
