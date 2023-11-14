import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseUrl = 'https://app-fooddelivery-backend.azurewebsites.net/food-app/api'
  // private baseUrl = 'http://localhost:8080/food-app/api'

  constructor(private http:HttpClient) { }

  // calling all the restaurant
  getAllRestaurant(pageNumber:any, pageSize:any){
    return this.http.get(`${this.baseUrl}/restaurants?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  // getAllFoodByRestaurant
  getFoodsByRestaurant(id:any){
    return this.http.get(`${this.baseUrl}/foods/restaurant/${id}`);
  }

  // getNearestRestaurant
  getNearByRestaurant(locationRequest:any){
    return this.http.post(`${this.baseUrl}/restaurants/location`, locationRequest);
  }

  getAddressName(apiUrl:any){
    return this.http.get(apiUrl);
  }
}
