import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListServiceService } from './product-list-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  constructor(private _productListService:ProductListServiceService, private route:ActivatedRoute){}

  categoryName = "" ;

  products:any = false;

  ngOnInit(): void {
    this.categoryName = this.route.snapshot.paramMap.get('category') || '';
    this.categoryName = this.categoryName.split('-').join(' ');

    this._productListService.productList(this.categoryName).subscribe((res:any)=>{
      this.products = res.products;
    })

  }
}
