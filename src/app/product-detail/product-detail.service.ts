import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(private http:HttpClient) { }

  baseUrl = environment.baseUrl;

  productDetail(sku:string){
    return this.http.get(this.baseUrl+'products/id/'+sku);
  }
}
