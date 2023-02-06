import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./category/category.module').then((m) => m.CategoryModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'wishlist',
    loadChildren: () =>
      import('./wishlist/wishlist.module').then((m) => m.WishlistModule),
  },
  {
    path: 'shipping',
    loadChildren: () =>
      import('./shipping/shipping.module').then((m) => m.ShippingModule),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'shipping/:id',
    loadChildren: () =>
      import('./shipping/shipping.module').then((m) => m.ShippingModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
      canActivate:[AuthGuard]
  },
  {
    path: 'payment/success',
    loadChildren: () =>
      import('./success/success.module').then((m) => m.SuccessModule),
  },
  {
    path: 'order-detail/:id',
    loadChildren: () =>
      import('./order-detail/order-detail.module').then(
        (m) => m.OrderDetailModule
      ),
  },
  {
    path: ':category',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./product-list/product-list.module').then(
            (m) => m.ProductListModule
          ),
      },
      {
        path: ':sku',
        loadChildren: () =>
          import('./product-detail/product-detail.module').then(
            (m) => m.ProductDetailModule
          ),
      },
    ],
  },
  {
    path:'**',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
