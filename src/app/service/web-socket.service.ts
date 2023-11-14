import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  // socket = new SockJS('http://localhost:8080/server');
  socket = new SockJS('https://app-fooddelivery-backend.azurewebsites.net/server')
  stompClient = Stomp.over(this.socket);

  constructor(){
    this.stompClient.connect({}, (frame : any) => {
      console.log('WebSocket connection is open' + frame);
    }, (error: any) => {
      console.error('WebSocket connection is closed:', error);
      // Handle connection closure or errors here
    });
  }

  send(data: any) {
    this.stompClient.send('/app/placeOrder', {}, JSON.stringify(data));
  }


  onMessage(callback: (message: MessageEvent) => void) {
    this.socket.onmessage = callback;
  }

  close() {
    this.socket.close();
  }

}
