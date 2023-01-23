import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './buttons/primary-button/primary-button.component';
import { SecondryButtonComponent } from './buttons/secondry-button/secondry-button.component';
import { IconButtonComponent } from './buttons/icon-button/icon-button.component';
import { HeaderComponent } from './header/header.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { HoverClassDirective } from './directives/hover-class.directive';
import { QuantityBtnComponent } from './quantity-btn/quantity-btn.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { SearchListModelComponent } from './search-list-model/search-list-model.component';
import { RatingComponent } from './rating/rating.component';
import { RouterModule } from '@angular/router';


const components = [
  PrimaryButtonComponent,
  SecondryButtonComponent,
  IconButtonComponent,
  HeaderComponent,
  DropdownComponent,
  ProductCardComponent,
  HoverClassDirective,
  QuantityBtnComponent,
  InfoCardComponent,
  SearchListModelComponent,
  RatingComponent
]

@NgModule({
  declarations: components,
  exports:components,
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
