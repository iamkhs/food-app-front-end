import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService,
     private router:Router, private authService : LoginService) {}

     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.authService.isLoggedIn()) {
        const userRole = this.authService.getUserRole();
    
        // Check if the route data contains the required role
        const data = route.data as { expectedRole: string }; // Explicitly define the type
        console.log("data, "+data.expectedRole);
        
        if (data && data.expectedRole && userRole === data.expectedRole) {
          return true;
        }
    
        // If the user does not have the required role, redirect to the login page or another page
        this.router.navigate(['login']);
        return false;
      }
    
      // If the user is not logged in, redirect to the login page
      this.router.navigate(['login']);
      return false;
    }
  }    