import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippingRoutingModule } from './shipping-routing.module';
import { ShippingComponent } from './shipping.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShippingComponent
  ],
  imports: [
    CommonModule,
    ShippingRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ShippingModule { }
