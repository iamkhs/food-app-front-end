import { Component, OnInit } from '@angular/core';
import * as SockJS from 'sockjs-client';
import { AdminSocketService } from 'src/app/service/admin/admin-socket.service';
import { OrderNotificationService } from 'src/app/service/admin/order-notification.service';
import * as Stomp from 'stompjs';

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

  constructor(private socketService: AdminSocketService) {
  }
  ngOnInit() {
    this.orders = this.socketService.orders;
  }
}
