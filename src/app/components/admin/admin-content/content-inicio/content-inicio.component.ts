import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ContentService } from '../../../../services/content.service';

import { ContentItem } from '../../../../interfaces/content';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-inicio',
  templateUrl: './content-inicio.component.html',
  styleUrls: ['./content-inicio.component.css']
})
export class ContentInicioComponent implements OnInit {

  contentInicioItems;

  constructor(
    private contentService: ContentService,
    private router: Router
  ) {
  }

  ngOnInit() {

    this.contentService.getContents();

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

  onSubmit(contentInicioForm: NgForm) {
    
    if (confirm('¿Desea eliminar el producto?')) {
      const formValues = contentInicioForm.value;
      const contentInicioSections = {};
      contentInicioSections['header'] = { title: formValues.headerTitle, desc: formValues.headerDesc };
      contentInicioSections['aplications'] = { title: formValues.aplicationsTitle, desc: formValues.aplicationsDesc };
      contentInicioSections['parallaxfirst'] = { title: formValues.parallaxFirstTitle };
      contentInicioSections['products'] = { title: formValues.productsTitle, desc: formValues.productsDesc };
      contentInicioSections['partners'] = { title: formValues.partnersTitle, desc: formValues.partnersDesc };
      contentInicioSections['blog'] = { title: formValues.blogTitle, desc: formValues.blogDesc };
      
      this.contentService.setContentInicio(contentInicioSections);
      
      this.router.navigate(['admin']);
    }
  }

  resetForm(contentInicioForm?: NgForm) {
    if (contentInicioForm != null){
      contentInicioForm.reset();
      this.router.navigate(['admin']);
    }
  }

}
