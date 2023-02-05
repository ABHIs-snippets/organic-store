import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {


  constructor(private http:HttpClient) { }

  baseUrl = environment.baseUrl;

  get wishlist(){
    return this.http.get(this.baseUrl+'wishlists');
  }

  addToWishlist(itemId:string){
    return this.http.post(this.baseUrl+'wishlists/add',{itemId});
  }

  deleteWishlist(itemId:string){
    return this.http.delete(this.baseUrl+'wishlists/delete',{body:{itemId}});
  }
}
