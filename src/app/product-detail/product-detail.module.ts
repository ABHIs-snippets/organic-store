import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { ImageSectionComponent } from './image-section/image-section.component';
import { ControlSectionComponent } from './control-section/control-section.component';
import { SharedModule } from '../shared/shared.module';
import { ReviewsComponent } from './reviews/reviews.component';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ImageSectionComponent,
    ControlSectionComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    SharedModule
  ]
})
export class ProductDetailModule { }
