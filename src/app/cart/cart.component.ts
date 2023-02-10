import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private _cart: CartService) {}

  cart: any;
  bill: any;

  ngOnInit(): void {
    this.fetchCart();
  }

  fetchCart() {
    this._cart.cart.subscribe((res: any) => {
      this.cart = res.cart;
    });
    this._cart.cartBill.subscribe((res: any) => {
      this.bill = res.bill;
    });
  }

  deleteFromCart(_id: string) {
    this._cart.deleteFromCart(_id).subscribe((res) => {
      this.fetchCart();
    });
  }

  addToCart(_id:string,quantity:number){
    this._cart.addToCart({itemId:_id,quantity}).subscribe((res:any)=>{
      this.fetchCart();
    })
  }
}
