import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { ReviewComponent } from 'src/app/shared/review/review.component';



@Component({
  selector: 'control-section',
  templateUrl: './control-section.component.html',
  styleUrls: ['./control-section.component.scss']
})
export class ControlSectionComponent  implements OnInit {


  @Input('productDetail') productDetail:any;

  quantity = 1;

  constructor(private _cart:CartService,private router:Router){

  }

  ngOnInit(): void {
  }


  addToCart(){
    this._cart.addToCart({itemId:this.productDetail._id,quantity:this.quantity}).subscribe(console.log)
    }

  buyNow(){
    this._cart.addToCart({itemId:this.productDetail._id,quantity:this.quantity}).subscribe((res:any)=>{
this.router.navigate(['/shipping',res.itemId]);
    })
    }



}
