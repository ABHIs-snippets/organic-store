import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  baseUrl = environment.baseUrl;

  get address(){
    return this.http.get(this.baseUrl+'addresses');
  }

  setDefaultAddress(_id:string){
    return this.http.post(this.baseUrl+'addresses/shipping/'+_id,{_id});
  }

  deleteAddress(_id:string){
    return this.http.delete(this.baseUrl+'addresses',{body:{_id}});
  }

  addAddress(payload:any){
    return this.http.post(this.baseUrl+'addresses',payload);
  }

  editAddress(payload:any){
    return this.http.patch(this.baseUrl+'addresses',payload);
  }

  get getUser(){
return this.http.get(this.baseUrl+'users');
  }




}
