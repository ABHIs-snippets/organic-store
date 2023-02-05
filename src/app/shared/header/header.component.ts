import { Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

showSearchBox = false;
isLogin = false;

constructor(private _auth:AuthService){}

ngOnInit(): void {
  this._auth.isLogin.subscribe(_login=>this.isLogin = _login);
}

  showSearch(){
    this.showSearchBox = true;
  }

  hideSearch(){
    this.showSearchBox = false;

  }
}
