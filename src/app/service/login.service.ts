import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = "https://app-fooddelivery-backend.azurewebsites.net/food-app/api/auth";
    // private baseUrl = 'http://localhost:8080/food-app/api/auth'

  constructor(private http : HttpClient) { }

  loginUser(token:any){
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  generateToken(user:any){
    return this.http.post(`${this.baseUrl}/generate-token`,  user);
  }

  getUser(username: string): any {
    return this.http.get(`http://localhost:8080/food-app/api/users/${username}`);
  }

  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token == undefined || token == '' || token==null){
      return false;
    }
    else return true;
  }

  getUserRole(): string {
    const userDtoString = localStorage.getItem('userDto');
    if (userDtoString) {
      const userDto = JSON.parse(userDtoString);
      return userDto.role;
    }
    return "";
  }

}
