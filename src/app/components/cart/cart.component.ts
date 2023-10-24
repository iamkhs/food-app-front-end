import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartExpanded = true;
  cartItems: any[] = [];

  constructor(private cartService: CartService, 
    private _snackBar:MatSnackBar) {}
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
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}