import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AplicationService {

  aplicationList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getAplications() {
    return this.aplicationList = this.firebase.list('aplications');
  }

}
