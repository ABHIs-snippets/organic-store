import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/cart/cart.service';
import { WishlistService } from 'src/app/wishlist/wishlist.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit{

  @Input() product:any;

  constructor(private _cart:CartService,private _wishlist:WishlistService,private toastr: ToastrService){}

  ngOnInit(): void {
  }

  addToCart(){
    this._cart.addToCart({itemId:this.product._id,quantity:1}).subscribe(console.log)
  }

  addToWishlist(){
    this._wishlist.addToWishlist(this.product._id).subscribe(console.log)
  }
}
