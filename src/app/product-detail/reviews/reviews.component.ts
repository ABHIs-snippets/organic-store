import { Component, Input, OnInit } from '@angular/core';
import { ProductDetailService } from '../product-detail.service';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit{

  @Input('id') id!:string;

  reviews!:any[];

  constructor(private _productDetail:ProductDetailService){}

  ngOnInit(): void {
    this.getReviews()
  }

  getReviews(){
    this._productDetail.reviews(this.id).subscribe((res:any)=>{
      this.reviews = res.ratings;
    },console.log);
  }

  convertDate(createAt:string){
    return new Date(createAt).toLocaleDateString();
      }
}
