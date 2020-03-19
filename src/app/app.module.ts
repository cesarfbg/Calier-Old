import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { ParallaxScrollModule } from 'ng2-parallaxscroll';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule} from 'angularfire2';
import { environment } from '../environments/environment';

// Shared
import { PreloaderComponent } from './components/shared/preloader/preloader.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

// Public
import { MainComponent } from './components/main/main.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogEntradaComponent } from './components/blog-entrada/blog-entrada.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CentroDeInvestigacionesComponent } from './components/centro-de-investigaciones/centro-de-investigaciones.component';
import { SociosComponent } from './components/socios/socios.component';
import { AplicacionesComponent } from './components/aplicaciones/aplicaciones.component';
import { AplicacionesCardsComponent } from './components/shared/aplicaciones-cards/aplicaciones-cards.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosCardsComponent } from './components/shared/productos-cards/productos-cards.component';

// Admin
import { AdminComponent } from './components/admin/admin.component';

import { ProductService } from './services/product.service';
import { AdminProductListComponent } from './components/admin/admin-products/admin-product-list/admin-product-list.component';
import { AdminProductComponent } from './components/admin/admin-products/admin-product/admin-product.component';

import { AdminContentComponent } from './components/admin/admin-content/admin-content.component';
import { ContentInicioComponent } from './components/admin/admin-content/content-inicio/content-inicio.component';
import { PostComponent } from './components/admin/admin-blog/post/post.component';
import { PostListComponent } from './components/admin/admin-blog/post-list/post-list.component';
import { ProductoComponent } from './components/productos/producto/producto.component';
import { AplicacionComponent } from './components/aplicaciones/aplicacion/aplicacion.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { ContactFormComponent } from './components/shared/contact-form/contact-form.component';
import { PostThumbComponent } from './components/blog/post-thumb/post-thumb.component';
import { ContactModalComponent } from './components/shared/contact-modal/contact-modal.component';
import { ByCategoryPipe } from './pipes/by-category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    ProductosComponent,
    NosotrosComponent,
    BlogComponent,
    BlogEntradaComponent,
    ContactoComponent,
    CentroDeInvestigacionesComponent,
    SociosComponent,
    AplicacionesComponent,

    AplicacionesCardsComponent,
    ProductosCardsComponent,

    AdminComponent,
    AdminProductListComponent,
    AdminProductComponent,
    AdminContentComponent,
    ContentInicioComponent,
    PostComponent,
    PostListComponent,
    ProductoComponent,
    AplicacionComponent,
    PoliticasComponent,
    ContactFormComponent,
    PostThumbComponent,
    ContactModalComponent,
    ByCategoryPipe,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ParallaxScrollModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    ProductService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
