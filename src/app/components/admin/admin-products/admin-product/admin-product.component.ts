import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';

// Service
import { ProductService } from '../../../../services/product.service';
import { AplicationService } from '../../../../services/aplication.service';
import { CategoryService } from '../../../../services/category.service';

// Models
import { Product } from 'src/app/models/product';
import { Aplication } from 'src/app/models/aplication';


@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  headerTitle = 'Nuevo Producto';

  aplicationList: Aplication[];
  aplications: any;

  categoryListArr: any[][];

  constructor(
    public productService: ProductService,
    public aplicationService: AplicationService,
    public categoryService: CategoryService,
    private router: Router
    ) { }

  ngOnInit() {
    if (this.router.url === '/admin/product-add') {
      this.resetForm();
    }

    this.productService.getProducts();
    const nameProduct = this.productService.selectedProduct.name;
    this.headerTitle = nameProduct ? 'Producto: ' + nameProduct : 'Nuevo Producto';

    this.aplications = this.productService.selectedProduct.aplications;
    if (this.aplications == null) {
      this.aplicationService.getAplications()
      .snapshotChanges()
      .subscribe(item => {
        this.aplicationList = [];
        let strApps = '';
        item.forEach(element => {
          const x = element.payload.toJSON();
          // tslint:disable-next-line: no-string-literal
          strApps = strApps + '"' + x['slug'] + '":false,';
          this.aplicationList.push(x as Aplication);
        });
        const jsonStrApps = '{' + strApps.slice(0, -1) + '}';
        this.aplications = JSON.parse( jsonStrApps );
      });
    }

    this.setCategories();

  }

  onSubmit(productForm: NgForm) {

    productForm.value.aplications = this.aplications;
    productForm.value.brandurl = this.brandImg(productForm.value.brand);

    if (productForm.value.$key == null) {
      this.productService.insertProduct(productForm.value);
    } else {
      this.productService.updateProduct(productForm.value);
    }
    this.resetForm(productForm);
  }

  brandImg(brand: string) {
    return brand.toLowerCase().replace(' ', '_') + '.png';
  }

  resetForm(productForm?: NgForm) {
    this.productService.selectedProduct = new Product();
    if (productForm != null) {
      productForm.reset();
      this.router.navigate(['admin/products']);
    }
  }

  setCategories() {
    this.categoryService.getCategories()
    .snapshotChanges()
    .subscribe(
      item => {
        const data = [];
        item.forEach(element => {
          const x = element.payload.toJSON();
          const label = element.key;
          data[label] = x;
        });
        this.categoryListArr = data;
      }
    );
  }

}
