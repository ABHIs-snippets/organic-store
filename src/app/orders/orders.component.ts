import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {


  constructor(private _order:OrderService) {}

  orders!: any[];

  ngOnInit(): void {
this.getOrders()
  }

  getOrders(){
    this._order.orders.subscribe((res:any)=>{
      this.orders = res.orders;
    })
  }

  addressStr(add:Object){
return Object.values(add).join(' ').slice(0,30);
  }

  convertDate(createAt:string){
return new Date(createAt).toLocaleDateString();
  }
}
