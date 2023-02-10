import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart/cart.service';
import { ProfileService } from '../profile/profile.service';
import { ShippingService } from './shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss'],
})
export class ShippingComponent implements OnInit {
  singleProductId!: string | null;
  shippingAddressId!: string;

  constructor(
    private _cart: CartService,
    private _profile: ProfileService,
    private _shipping: ShippingService,
    private route: ActivatedRoute,
    private fb:FormBuilder,
    private router:Router,
    private toast:ToastrService
  ) {}

  cart: any;

  bill: any;

  addresses: any[] = [];

  paymentMethod!:FormGroup;

  ngOnInit(): void {
    this.singleProductId = this.route.snapshot.paramMap.get('id');
    if (this.singleProductId) {
      this.fetchProduct();
    } else {
      this.fetchCart();
    }
    this.getAddress();

    this.paymentMethod = this.fb.group({
      mode:['COD']
    });
  }

  fetchCart() {
    this._cart.cart.subscribe((res: any) => {
      this.cart = res.cart.items;
    });
    this._cart.cartBill.subscribe((res: any) => {
      this.bill = res.bill;
    });
  }

  fetchProduct() {
    this._shipping
      .fetchProductFromCart(this.singleProductId as string)
      .subscribe((res: any) => {
        console.log(res);
        this.cart = [res.item];
        this.bill = res.bill;
      });
  }

  getAddress() {
    this._profile.address.subscribe((res: any) => {
      this.addresses = res.addresses;
      this.shippingAddressId = res.shippingAddressId;
    });
  }

  updateDefault(id: string) {
    this._profile.setDefaultAddress(id).subscribe((res) => {
      this.getAddress();
    });
  }

  checkOrder() {
    if(!this.addresses.length){
      this.toast.warning('Please enter your shipping address');
    }
    else{
      if(this.paymentMethod.value.mode == 'COD')
      this.cashOnDelivery();
      else{
        this._shipping.checkOutOrder().subscribe((res: any) => {
          window.location.assign(res.url);
        });
      }
    }
  }

  cashOnDelivery() {
    this._shipping.cashOnDelivery().subscribe((res: any) => {
this.router.navigate(['payment/success']);
    });
  }
}
