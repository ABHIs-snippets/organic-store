import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  isLogin = false;

  constructor(private http:HttpClient,private _auth:AuthService, private toast:ToastrService, private route:Router) {
_auth.isLogin.subscribe(_login=>this.isLogin = _login);
   }


  baseUrl = environment.baseUrl;

  get cart(){
    return this.http.get(this.baseUrl+'carts');
  }

  get cartBill(){
    return this.http.get(this.baseUrl+'carts/bill');
  }

  addToCart(payload:{itemId:string,quantity:number}){
    if(this.isLogin)
    return this.http.post(this.baseUrl+'carts/items',payload);
    else{
this.toast.info('Please sign in first');
this.route.navigate(['/auth']);
      return new Observable(()=>{});
    }
  }

  deleteFromCart(itemId:string){
    return this.http.delete(this.baseUrl+'carts/items',{body:{itemId}});
  }
}
