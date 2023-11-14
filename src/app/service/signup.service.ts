import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseUrl = 'https://app-fooddelivery-backend.azurewebsites.net/food-app/api/users'
    // private baseUrl = 'http://localhost:8080/food-app/api/users'


  constructor(private http : HttpClient) { }

  saveUser(user:any){
    return this.http.post(`${this.baseUrl}/save`, user);
  }
}
