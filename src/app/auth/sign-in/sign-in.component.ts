import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(private _auth: AuthService, private fb: FormBuilder, private router:Router) {}

  signInPayload!: FormGroup;

  isOTPSend = false;

  ngOnInit(): void {
    this.signInPayload = this.createForm();
  }

  createForm() {
    return this.fb.group({
      email: [''],
      otp: [''],
    });
  }

  sendOTP(){
    this._auth.generateOTP(this.signInPayload.value.email).subscribe((res:any)=>{
this.isOTPSend = true;
    })
  }

  varify(){
    this._auth.varify(this.signInPayload.value).subscribe((res:any)=>{
      this.router.navigate(['/']);
    })
  }
}
