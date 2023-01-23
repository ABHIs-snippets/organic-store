import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    CategoryFilterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
