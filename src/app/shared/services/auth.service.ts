import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {
    this.isLogin.next(!!localStorage.getItem('token'));
  }

  baseUrl = environment.baseUrl;

  generateOTP(email: string) {
    return this.http.post(this.baseUrl + 'users/otp/generate', { email });
  }

  varify(payload: any) {
    return this.http.post(this.baseUrl + 'users/otp/verify', payload).pipe(
      map((res: any) => {
        localStorage.setItem('token', res.token);
        this.isLogin.next(true);
        return res;
      })
    );
  }

  logout() {
    return this.http.get(this.baseUrl + 'users/logout').pipe(
      map((res: any) => {
        localStorage.removeItem('token');
        this.isLogin.next(false);
        this.router.navigate(['/']);
      })
    );
  }
}
