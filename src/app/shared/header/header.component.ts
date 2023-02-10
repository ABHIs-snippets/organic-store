import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showSearchBox = false;
  isLogin = false;

  searchInput :string = '';
  searchProductList!:any[];

  constructor(private _auth: AuthService, private _search: SearchService) {}

  ngOnInit(): void {
    this._auth.isLogin.subscribe((_login) => (this.isLogin = _login));
  }

  showSearch() {
    this.showSearchBox = true;
  }

  hideSearch() {
    this.showSearchBox = false;
  }

  logout() {
    this._auth.logout().subscribe(() => {});
  }

  id!:any;
  debounce() {
    if(this.id) clearTimeout(this.id);
    this.id = setTimeout(() => {
      this.searchProduct();
    },1000);
  }

  searchProduct() {
    this._search.search(this.searchInput).subscribe((res:any)=>{
      this.searchProductList = res.products;
    });
  }
}
