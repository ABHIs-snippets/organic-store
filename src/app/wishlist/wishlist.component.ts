import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { WishlistService } from './wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{

  constructor(private _wishlist:WishlistService,private _cart:CartService){}

  ngOnInit(): void {
this.getWishlist()
  }

  items:any[] = [];

  getWishlist(){
    this._wishlist.wishlist.subscribe((res:any)=>{
      this.items = res.wishlist.items;
    })
  }

  deleteFromWishlist(_id: string) {
    this._wishlist.deleteWishlist(_id).subscribe((res) => {
      this.getWishlist();
    });
  }

  addToCart(_id:string){
    this._cart.addToCart({itemId:_id,quantity:1}).subscribe(console.log)
    }

}
