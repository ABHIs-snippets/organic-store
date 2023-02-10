import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShippingService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.baseUrl;

  checkOutOrder() {
    return this.http.post(this.baseUrl + 'orders/checkout', {});
  }

  cashOnDelivery(){
    return this.http.post(this.baseUrl+'orders/cod',{});
  }

  fetchProductFromCart(id: string) {
    return this.http.get(this.baseUrl + 'carts/items/' + id);
  }
}
