import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductListServiceService {

  constructor(private http:HttpClient) { }

  baseUrl = environment.baseUrl;

  productList(id:string){
    return this.http.get(this.baseUrl+'products/by-category/'+id);
  }

}
