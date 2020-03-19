import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-aplicacion',
  templateUrl: './aplicacion.component.html',
  styleUrls: ['./aplicacion.component.css']
})
export class AplicacionComponent implements OnInit {

  aplication: string;
  categoryListArr: any[][];

  constructor(
    private ariveRoute: ActivatedRoute,
    private categoryService: CategoryService
    ) { }

  ngOnInit() {
    this.aplication = this.ariveRoute.snapshot.params.aplication;
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
