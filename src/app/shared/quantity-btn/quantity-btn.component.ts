import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'quantity-btn',
  templateUrl: './quantity-btn.component.html',
  styleUrls: ['./quantity-btn.component.scss']
})
export class QuantityBtnComponent {

  @Input() quantity!: number;
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  decrease() {
    this.quantity--;
    this.quantityChange.emit(this.quantity);
  }

  increase(){
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }
}
