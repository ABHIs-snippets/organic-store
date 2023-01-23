import { Component } from '@angular/core';

@Component({
  selector: 'quantity-btn',
  templateUrl: './quantity-btn.component.html',
  styleUrls: ['./quantity-btn.component.scss']
})
export class QuantityBtnComponent {
quantity = 1;

increase(){
  this.quantity++;
}

decrease(){
  if(this.quantity>1)
  this.quantity--;
}
}
