import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{


  constructor(private _home:HomeService) {}

  topRatedProducts:any[] = [];

  latestProducts:any[] = [];

  ngOnInit(): void {
    this._home.topRatedProducts.subscribe((res:any)=>this.topRatedProducts = res.product);

    this._home.latestProducts.subscribe((res:any)=>this.latestProducts = res.product);
  }

}
