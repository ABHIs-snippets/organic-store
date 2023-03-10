import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  baseUrl = environment.baseUrl;

  get orders(){
    return this.http.get(this.baseUrl+'orders');
  }
}
