import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  // private baseUrl = 'http://localhost:8080/food-app/api/users/admin';
  private baseUrl = 'https://app-fooddelivery-backend.azurewebsites.net/food-app/api/users/admin';
  constructor(private http: HttpClient) {}

  getRestaurant(userId: any) {
    return this.http.get(`${this.baseUrl}/${userId}/restaurants`);
  }

  getFoodById(foodId: any, restaurantId: any) {
    const requestBody = { restaurantId: restaurantId, foodId: foodId };
    return this.http.post(`${this.baseUrl}/foods/food-details`, requestBody);
  }

  deleteFoodById(foodId:any){
    return this.http.delete(`${this.baseUrl}/foods/delete/${foodId}`);
  }

  updateFood(foodId: any, foodRequest: any) {
    return this.http.put(`${this.baseUrl}/foods/update/${foodId}`, foodRequest);
  }

  addNewFood(food: any) {
    // Include restaurantId as a query parameter

    return this.http.post(`${this.baseUrl}/foods/add-food`, food);
  }
}
