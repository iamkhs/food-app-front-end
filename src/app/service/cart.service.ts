import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = 'https://app-fooddelivery-backend.azurewebsites.net/food-app/api'
    // private baseUrl = 'http://localhost:8080/food-app/api'

  
  private cartItems: any[] = [];
  private cartItemCountSubject = new BehaviorSubject<number>(0);

  cartItemCount$ = this.cartItemCountSubject.asObservable();

  constructor(private http : HttpClient) {
    // Initialize cartItems from localStorage when the service is constructed
    const storedCartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cartItems = storedCartItems;
    this.updateCartItemCount();
  }

  addToCart(item: any, restaurantId:any): void {
    const cartItem = { item, restaurantId };
    // Push the cartItem into the cartItems array
    this.cartItems.push(cartItem);
    
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.updateCartItemCount();
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  removeFromCart(index: number): void {
    this.cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.updateCartItemCount();
  }

  getCartSize(): number {
    return this.cartItems.length;
  }

  private updateCartItemCount(): void {
    this.cartItemCountSubject.next(this.cartItems.length);
  }


  placeOrder(orders: any[]): Observable<any> { // Use 'any[]' for the parameter
    return this.http.post(`${this.baseUrl}/place-order`, orders);
  }
}