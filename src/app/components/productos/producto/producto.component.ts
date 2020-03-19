import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  idProduct: string;
  product: any;

  // Variables temporales, hay que arreglar.
  definicion: string;
  ventajas: string[] = [];

  constructor(
    private ariveRoute: ActivatedRoute,
    // private router: Router,
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.idProduct = this.ariveRoute.snapshot.params.id;
    this.productService.getProduct(this.idProduct)
      .snapshotChanges()
      .subscribe( resp => {
        const x = resp.payload.toJSON();
        // tslint:disable-next-line: no-string-literal
        x['$key'] = resp.key;
        this.product = x;
        // Separar ventajas competitivas TEMPORAL
        this.product.longDesc = this.product.longDesc.split(/\n/g).filter((str) => {
          if ( str !== '' ) {
            return str;
          }
        });
        this.definicion = this.product.longDesc.shift();
        this.ventajas = this.product.longDesc;
      }
    );
  }
}
