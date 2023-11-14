import { Injectable, OnInit } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { OrderNotificationService } from './order-notification.service';

@Injectable({
  providedIn: 'root'
})
export class AdminSocketService {

  // socket = new SockJS('http://localhost:8080/server');
  socket = new SockJS('https://app-fooddelivery-backend.azurewebsites.net/server')
  stompClient = Stomp.over(this.socket);
  orders: any[] = [];
  
  constructor(private orderNotificationService: OrderNotificationService) {
    this.connectToWebSocket();
  }

  public connectToWebSocket() {
    this.stompClient.connect({}, (frame: any) => {
      console.log('WebSocket connection is open' + frame);
      this.subscribeToOrdersTopic();
    }, (error: any) => {
      console.error('WebSocket connection is closed:', error);
      // Handle connection closure or errors here
    });
  }

  public subscribeToOrdersTopic() {
    this.stompClient.subscribe('/topic/orders', (message: any) => {
      const orderData = JSON.parse(message.body);

      orderData.forEach((element: any) => {
        const localRestaurantId = localStorage.getItem('restaurantId');
        if (element.restaurantId === localRestaurantId) {
          this.orders.push(element);
          console.log('Received order:', element);
                  // Notify the OrderNotificationService that new orders have arrived
          this.orderNotificationService.notifyNewOrdersArrived();
        }
      });
    });
  }
}