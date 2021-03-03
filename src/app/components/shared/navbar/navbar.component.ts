import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  // trmPromedio: string;
  // pulseFlag = false;

  constructor( public http: HttpClient ) {
    // this.http.get('https://www.datos.gov.co/api/id/32sa-8pi3.json?$query=select%20*%20order%20by%20`unidad`%20asc%20limit%2040')
    //   .subscribe((tasas: {valor: string, unidad: string, vigenciadesde: string, vigenciahasta: string }[]) => {
    //     this.trmPromedio = tasas[0].valor;
    //   });
    // setInterval(() => {
    //   this.pulseFlag = !this.pulseFlag;
    // }, 600);
  }

  // CALCULAR PROMEDIO ÚLTIMOS 20 DÍAS MES VIGENTE (YA NO SE USA)
  // constructor( public http: HttpClient ) {
  //   this.http.get('https://www.datos.gov.co/api/id/32sa-8pi3.json?$query=select%20*%20order%20by%20`unidad`%20asc%20limit%2040')
  //     .subscribe((tasas: {valor: string, unidad: string, vigenciadesde: string, vigenciahasta: string }[]) => {
  //       this.trmPromedio = this.calcularPromedioTRM(tasas);
  //     });
  //   setInterval(() => {
  //     this.pulseFlag = !this.pulseFlag;
  //   }, 600);
  // }

  // calcularPromedioTRM(tasas: {valor: string, unidad: string, vigenciadesde: string, vigenciahasta: string }[]) {
  //   const mesActual = new Date(tasas[0].vigenciadesde).getMonth();
  //   let sumaTasas = 0;
  //   let contador = 0;
  //   tasas.forEach((tasa) => {
  //     if (new Date(tasa.vigenciahasta).getMonth() === mesActual) {
  //       sumaTasas += Number(tasa.valor);
  //       contador++;
  //     }
  //   });
  //   return (sumaTasas / contador).toFixed(0);
  // }

}
