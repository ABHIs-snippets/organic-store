import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.baseUrl;

  giveReview(payload: any) {
    return this.http.post(this.baseUrl + 'ratings', payload);
  }
}
