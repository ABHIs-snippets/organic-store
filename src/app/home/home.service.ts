import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  baseUrl = environment.baseUrl;

  get latestProducts(){
    return this.http.get(this.baseUrl+'products/latest');
  }

  get topRatedProducts(){
    return this.http.get(this.baseUrl+'products/top-rated');
  }


}
