import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getCategories() {
    return this.categoryList = this.firebase.list('categories');
  }

}
