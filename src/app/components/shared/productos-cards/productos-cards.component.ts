import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos-cards',
  templateUrl: './productos-cards.component.html',
  styleUrls: ['./productos-cards.component.css']
})
export class ProductosCardsComponent implements OnInit {

  productList: Product[];
  moreProducts = false;

  @Input() byAplication: string;
  @Input() showCategory: string;

  constructor(
      private productService: ProductService,
      public route: Router
    ) { }

  ngOnInit() {

    if (!this.byAplication) {
      this.getProducts();
    } else {
      this.getProductsByAplication(this.byAplication);
    }
  }

  getProducts() {
    this.productService.getProductsByRelevance().snapshotChanges()
    .subscribe( item => {
      const data = [];
      item.forEach(element => {
        const x = element.payload.toJSON();
        // tslint:disable-next-line: no-string-literal
        x['$key'] = element.key;
        // tslint:disable-next-line: no-string-literal
        x['aplications'] = JSON.stringify(x['aplications']);
        data.push(x as Product);
        if (this.route.url === '/inicio') {
          this.productList = data.slice(0, 7);
          this.moreProducts = true;
        } else {
          this.productList = data;
        }
      });
    });   
  }

  getProductsByAplication(aplication: string) {
    this.productService.getProducts().snapshotChanges()
    .subscribe( item => {
      const data = [];
      item.forEach(element => {
        const x = element.payload.toJSON();
        // tslint:disable-next-line: no-string-literal
        x['$key'] = element.key;
        // tslint:disable-next-line: no-string-literal
        if (x['aplications'][aplication] === true) {
          data.push(x as Product);
          this.productList = data;
        }
      });
    });
  }

}
