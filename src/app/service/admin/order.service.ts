import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'https://app-fooddelivery-backend.azurewebsites.net/food-app/api/users/admin';
  // private baseUrl = 'http://localhost:8080/food-app/api/users/admin'

  constructor(private http : HttpClient) { }

  getOrdersOfRestaurant(restaurantId:any){
    return this.http.get(`${this.baseUrl}/orders/${restaurantId}`)
  }
}
