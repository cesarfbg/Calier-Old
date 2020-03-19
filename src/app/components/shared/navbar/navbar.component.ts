import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  trmPromedio: string;

  constructor( public http: HttpClient ) {
    this.http.get('https://www.datos.gov.co/api/id/32sa-8pi3.json?$query=select%20*%20order%20by%20`unidad`%20asc%20limit%2020')
      .subscribe((tasas: {valor: string, unidad: string, vigenciadesde: string, vigenciahasta: string }[]) => {
        this.trmPromedio = this.calcularPromedioTRM(tasas);
      });
  }

  calcularPromedioTRM(tasas: {valor: string, unidad: string, vigenciadesde: string, vigenciahasta: string }[]) {
    const tasasArr: number[] = [];
    const fechaLimite = new Date(tasas[0].vigenciadesde);
    fechaLimite.setDate(fechaLimite.getDate() - 20);
    for (const tasa of tasas) {
      const fechaDesdeTasa = new Date(tasa.vigenciadesde);
      if (fechaDesdeTasa.getTime() > fechaLimite.getTime()) {
        if (tasa.vigenciadesde !== tasa.vigenciahasta) {
          const fechaDesde = new Date(tasa.vigenciadesde).getTime();
          const fechaHasta = new Date(tasa.vigenciahasta).getTime();
          const diferencia = ((fechaHasta - fechaDesde) / 1000 / 60 / 60 / 24) + 1; // Días
          for (let i = 0; i < diferencia; i++) {
            tasasArr.push(Number(tasa.valor));
          }
        } else {
          tasasArr.push(Number(tasa.valor));
        }
      } else {
        break;
      }
    }
    return ( this.sumarArray(tasasArr) / tasasArr.length ).toFixed(2);
  }

  sumarArray(tasas: number[]): number {
    let suma = 0;
    tasas.forEach((tasa) => {
      suma += tasa;
    });
    return suma;
  }

}
