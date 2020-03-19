import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ContentItem } from '../interfaces/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  contentSectionList: AngularFireList<any>;
  selectedContent: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getContents() {
    return this.contentSectionList = this.firebase.list('content');
  }

  getContentInicio() {
    return this.selectedContent = this.firebase.list('content/inicio');
  }

  setContentInicio(sections) {
    this.contentSectionList.update('inicio', sections);
  }

}
