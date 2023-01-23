import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  }
})
export class DropdownComponent {

@Input('title') title!:string;
@Input('type') type:string = 'primary';

isShow:boolean = false;

constructor(private _eref: ElementRef) {}

onClick(event:any){
  if (!this._eref.nativeElement.contains(event.target))
  this.isShow = false;
}

}
