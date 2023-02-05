import { Component, Input, OnInit } from '@angular/core';

let classes = {
  'danger':'text-danger',
  'default':'text-gray-400'
}

@Component({
  selector: 'icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit{

  @Input('type') type:string = 'default';


  appliedClass!:string;

  constructor(){
  }

  ngOnInit(): void {
    this.appliedClass = classes[this.type  as keyof typeof classes];

  }


}
