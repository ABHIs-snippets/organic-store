import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from './product-detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{

  constructor(private _productListService:ProductDetailService, private route:ActivatedRoute){}

  sku:string = '';

  productDetail:any;

ngOnInit(): void {
this.sku = this.route.snapshot.paramMap.get('sku') || '';

this._productListService.productDetail(this.sku).subscribe((res:any)=>{
  this.productDetail = res.product;
})
}



}
