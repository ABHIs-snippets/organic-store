import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  baseUrl = environment.baseUrl;

  get category(){
    return this.http.get(this.baseUrl+'categories/get');
  }
}
