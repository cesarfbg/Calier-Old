import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Product } from '../models/product';
import { AplicationService } from '../services/aplication.service';
import {  } from 'angularfire2';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: AngularFireList<any>;
  product: AngularFireObject<any>;
  aplicationsList: string;
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase, private aplicationService: AplicationService) {
    this.aplicationService.getAplications()
    .snapshotChanges()
    .subscribe(item => {
      let strApps = '';
      item.forEach(element => {
        const x = element.payload.toJSON();
        strApps = strApps + '"' + x['slug'] + '":false,';
      });
      const jsonStrApps = '{' + strApps.slice(0, -1) + '}';
      this.selectedProduct.aplications = JSON.parse( jsonStrApps );
    });
  }

  getProduct(id: string ) {
    this.product = this.firebase.object(`products/${id}`);
    return this.product;
  }

  getProducts() {
    return this.productList = this.firebase.list('products');
  }

  getProductsByRelevance() {
    return this.productList = this.firebase.list('products', ref =>
    ref.orderByChild('relevance'));
  }


  getProductsByAplications(aplication: string) {
    return this.productList = this.firebase.list('products', ref =>
    ref.equalTo('relevance'));
  }

  insertProduct(product: Product) {
    this.productList.push({
      name: product.name,
      shortDesc: product.shortDesc,
      longDesc: product.longDesc,
      brand: product.brand,
      brandurl: product.brandurl,
      relevance: product.relevance,
      aplications: product.aplications,
      category: product.category,
      imageurl: product.imageurl,
      videourl: product.videourl
    });
  }

  updateProduct(product: Product) {
    this.productList.update(product.$key, {
      name: product.name,
      shortDesc: product.shortDesc,
      longDesc: product.longDesc,
      brand: product.brand,
      brandurl: product.brandurl,
      relevance: product.relevance,
      aplications: product.aplications,
      category: product.category,
      imageurl: product.imageurl,
      videourl: product.videourl
    });
  }

  deleteProduct(id: string) {
    this.productList.remove(id);
  }

}
