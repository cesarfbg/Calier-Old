import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  categoryListArr: any[][];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.setCategories();
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
