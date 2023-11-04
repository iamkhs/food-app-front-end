import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/service/cart.service';
import { WebSocketService } from 'src/app/service/web-socket.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit{
  cartExpanded = true;
  cartItems: any[] = [];
  userDTO: any = localStorage.getItem('userDto') || 'null';

  constructor(private cartService: CartService,
    private _snackBar:MatSnackBar,    private webSocketService: WebSocketService, // Inject the WebSocket service
    ) {

    }
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    console.log(this.cartItems)
  }

  // Method to remove an item from the cart
  removeFromCart(index: number): void {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getCartItems(); // Update the cartItems after removal
    this._snackBar.open("Item successfully removed.", "OK", {
      duration: 2000 // Set the duration in milliseconds
    });
  }

  // Method to close the cart view
  closeCart(): void {
    
  }

  // Method to calculate the total price of cart items
  calculateTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.item.price, 0);
  }

  orderRequest(): void {
    // Create an array of objects with the required properties
    const orders = this.cartItems.map(item => ({
      id: item.item.id,   // Convert id to string if needed
      name: item.item.name,
      description: item.item.description,
      price: item.item.price,
      restaurantId: item.restaurantId,
      userDto: JSON.parse(this.userDTO)
    }));
    console.log('Sending orders to server:', orders); // Add a console log statement to see what is being sent to the server
    this.webSocketService.send(orders);
  }
}