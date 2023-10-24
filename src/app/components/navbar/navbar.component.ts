import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartExpanded = false;
  cartItemCount: number = 0;
  isLogin = false;
  userDto: any;

  constructor(private router: Router, private cartService: CartService, private loginService: LoginService) {}

  ngOnInit(): void {
    this.cartService.cartItemCount$.subscribe((count) => {
      this.cartItemCount = count;
    });

    // Initialize the userDto from local storage, if available
    const userDtoJson = localStorage.getItem('userDto');
    if (userDtoJson) {
      this.userDto = JSON.parse(userDtoJson);
    }

    // Check the user's authentication status
    if (this.loginService.getToken() != null) {
      this.isLogin = true;
    }
  }

  toggleCart(): void {
    this.cartExpanded = !this.cartExpanded;
    this.router.navigate(['/cart']);
  }

  navigateToSignUp() {
    if (this.isLogin) {
      this.logout();
    } else {
      // Navigate to the signup page
      this.router.navigate(['/login']);
    }
  }

  logout() {
    // Clear JWT token from local storage
    localStorage.removeItem('token');
    localStorage.clear();

    // Redirect to the login page (you should define the login route)
    this.router.navigate(['/login']);
  }
}
