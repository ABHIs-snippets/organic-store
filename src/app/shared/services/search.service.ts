import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  baseUrl = environment.baseUrl;

  search(keyword:string){
    return this.http.get(this.baseUrl+'products/search?keyword='+keyword);
  }
}
