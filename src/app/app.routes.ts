import { AdminComponent } from './components/admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/productos/producto/producto.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogEntradaComponent } from './components/blog-entrada/blog-entrada.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CentroDeInvestigacionesComponent } from './components/centro-de-investigaciones/centro-de-investigaciones.component';
import { SociosComponent } from './components/socios/socios.component';
import { AplicacionesComponent } from './components/aplicaciones/aplicaciones.component';
import { AplicacionComponent } from './components/aplicaciones/aplicacion/aplicacion.component';
import { AdminProductListComponent } from './components/admin/admin-products/admin-product-list/admin-product-list.component';
import { AdminProductComponent } from './components/admin/admin-products/admin-product/admin-product.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { PostListComponent } from './components/admin/admin-blog/post-list/post-list.component';
import { PostComponent } from './components/admin/admin-blog/post/post.component';
import { AdminContentComponent } from './components/admin/admin-content/admin-content.component';
import { ContentInicioComponent } from './components/admin/admin-content/content-inicio/content-inicio.component';

const APP_ROUTES: Routes = [
    { path: 'inicio', component: MainComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog-entrada', component: BlogEntradaComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'centro-de-investigaciones', component: CentroDeInvestigacionesComponent },
    { path: 'socios', component: SociosComponent },
    { path: 'aplicaciones', component: AplicacionesComponent },
    { path: 'aplicacion/:aplication', component: AplicacionComponent },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: 'products', component: AdminProductListComponent },
            { path: 'product-add', component: AdminProductComponent },
            { path: 'product-edit', component: AdminProductComponent },
            { path: 'blog', component: PostListComponent },
            { path: 'post/:id', component: PostComponent },
            { path: 'post-add', component: PostComponent },
            {
                path: 'content',
                component: AdminContentComponent,
                children: [
                    { path: 'inicio', component: ContentInicioComponent },
                ]
            },
        ]
    },
    { path: 'politicas-privacidad', component: PoliticasComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
