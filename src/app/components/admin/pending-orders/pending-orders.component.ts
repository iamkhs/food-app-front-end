import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/admin/order.service';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit{
declineOrder(_t4: any) {
throw new Error('Method not implemented.');
}
acceptOrder(_t4: any) {
throw new Error('Method not implemented.');
}
  
  constructor(private orderService : OrderService){}
  orders:any;
  restaurantId:any

  ngOnInit(): void {
    this.restaurantId = localStorage.getItem('restaurantId')
    this.orderService.getOrdersOfRestaurant(this.restaurantId).subscribe(
      (data)=>{
        console.log(data);
        this.orders = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
