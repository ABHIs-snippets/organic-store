import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  baseUrl = environment.baseUrl;

  get cart(){
    return this.http.get(this.baseUrl+'carts');
  }

  get cartBill(){
    return this.http.get(this.baseUrl+'carts/bill');
  }

  addToCart(payload:{itemId:string,quantity:number}){
    return this.http.post(this.baseUrl+'carts/add',payload);
  }

  deleteFromCart(itemId:string){
    return this.http.delete(this.baseUrl+'carts/delete',{body:{itemId}});
  }
}
