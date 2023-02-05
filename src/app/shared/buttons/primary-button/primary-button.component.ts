import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent implements OnInit{

  @Input('size') size:string = 'default';

  classes = {
    'large':'text-2xl w-full pb-2 pt-2 shadow-md',
    'default':''
  }

  appliedClass!:string;


  ngOnInit(): void {
    this.appliedClass = this.classes[this.size  as keyof typeof this.classes];

  }
}
