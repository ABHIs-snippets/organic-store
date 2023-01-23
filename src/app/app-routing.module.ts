import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: 'product-detail',
    loadChildren: () =>
      import('./product-detail/product-detail.module').then(
        (m) => m.ProductDetailModule
      ),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./category/category.module').then((m) => m.CategoryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
