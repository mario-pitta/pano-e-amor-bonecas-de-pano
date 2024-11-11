import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)

  },
  {
    path: 'produtos',
    loadComponent: () => import('./product-list/product-list.component').then(m => m.ProductListComponent)
  },
  {
    path: 'buscar/:query',
    loadComponent: () => import('./product-list/product-list.component').then(m => m.ProductListComponent)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'contato',
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class PagesRoutesModule {}
