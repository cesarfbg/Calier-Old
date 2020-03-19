import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {

  productList: Product[];

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.productService.getProducts()
    .snapshotChanges()
    .subscribe(item => {
      this.productList = [];
      item.forEach(element => {
        const x = element.payload.toJSON();
        x['$key'] = element.key;
        this.productList.push(x as Product);
      });
    });
  }

  onEdit(product: Product) {
    this.router.navigate(['admin/product-edit']);
    this.productService.selectedProduct = product;
  }

  onDelete($key: string) {
    if (confirm('¿Desea eliminar el producto?')) {
      this.productService.deleteProduct($key);
    }
  }


}
