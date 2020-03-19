import { Component, OnInit } from '@angular/core';
import { ApplicationList } from '../../../interfaces/applicationList.interface';
import { AplicationService } from 'src/app/services/aplication.service';

@Component({
  selector: 'app-aplicaciones-cards',
  templateUrl: './aplicaciones-cards.component.html',
  styleUrls: ['./aplicaciones-cards.component.css']
})
export class AplicacionesCardsComponent implements OnInit {

  applicationList: ApplicationList[];
  phathImg = './assets/images/photos/aplicaciones/';

  constructor( private aplicationService: AplicationService ) {
  }

  ngOnInit() {
    this.aplicationService.getAplications()
    .snapshotChanges()
    .subscribe(item => {
      this.applicationList = [];
      item.forEach(element => {
        const x = element.payload.toJSON();
        // tslint:disable-next-line: no-string-literal
        x['$key'] = element.key;
        this.applicationList.push(x as ApplicationList);
      });
    });
  }

}
