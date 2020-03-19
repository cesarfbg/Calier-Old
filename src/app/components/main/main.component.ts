import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

import { ContentItem } from 'src/app/interfaces/content';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  contentInicioItems;

  constructor(private contentService: ContentService) {

    this.contentService.getContentInicio()
    .snapshotChanges()
    .subscribe(item => {
      this.contentInicioItems = {};
      item.forEach(element => {
        const k = element.key;
        const obj = element.payload.toJSON();
        this.contentInicioItems[k] = obj as ContentItem;
      });
    });

   }

  ngOnInit() {
  }

}
