import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { AdminSocketService } from 'src/app/service/admin/admin-socket.service';
import { OrderService } from 'src/app/service/admin/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {

  declineOrder(_t5: any) {
    throw new Error('Method not implemented.');
  }
  acceptOrder(_t5: any) {
    throw new Error('Method not implemented.');
  }
  orders: any[] = [];

  constructor(private socketService: AdminSocketService, 
    private orderService : OrderService,
    private router : Router) {}


  ngOnInit() {
    this.orders = this.socketService.orders;
  }

  restaurantId:any;
  pendinOrder() {
    this.router.navigate(['/admin/dashboard/orders/pending-orders'])
  }
}
