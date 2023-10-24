import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartItemCountSubject = new BehaviorSubject<number>(0);

  cartItemCount$ = this.cartItemCountSubject.asObservable();

  constructor() {
    // Initialize cartItems from localStorage when the service is constructed
    const storedCartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cartItems = storedCartItems;
    this.updateCartItemCount();
  }

  addToCart(item: any): void {
    this.cartItems.push(item);
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
}