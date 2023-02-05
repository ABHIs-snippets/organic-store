import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor(private http: HttpClient) {}

  baseUrl = environment.baseUrl;

  orderDetail(id:string){
   return this.http.get(this.baseUrl+'orders/'+id);
  }
}
