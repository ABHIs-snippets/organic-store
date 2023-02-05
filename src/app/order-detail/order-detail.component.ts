import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailService } from './order-detail.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit{

  constructor(private _orderDetail:OrderDetailService, private route:ActivatedRoute){}

  orderId!:string;

  orderItems!:any[];

  orderDetail:any;

  shippingAddress:any;

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('id') as string;
    this.getOrderDetail()
  }

  getOrderDetail(){
    this._orderDetail.orderDetail(this.orderId).subscribe((res:any)=>{
      console.log(res);
      this.orderItems = res.order.items;
      this.shippingAddress = res.order.shippingAddress;
      delete res.order.shippingAddress;
      delete res.order.orderItems;
      this.orderDetail = res.order;
    })
  }
}
