import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

showSearchBox = false;

  showSearch(){
    this.showSearchBox = true;
  }

  hideSearch(){
    this.showSearchBox = false;

  }
}
