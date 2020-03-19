import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  departments: object;
  cities: string[];

  policies: boolean = false;

  constructor(private departmentsService: DepartmentsService) { }

  ngOnInit() {
    this.departments = this.departmentsService.getDepartments();
  }

  handleChange(id: any) {
    this.cities = this.departments[id].ciudades;
 }

}