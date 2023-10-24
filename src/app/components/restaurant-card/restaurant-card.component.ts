import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'; // Import the Angular Router

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent {
  @Input() restaurant: any;

  constructor(private router: Router) {} // Inject the router

  // Define the method to navigate when a card is clicked
  navigateToRestaurantFoods(restaurantId: number, restaurantName:string) {
    // Navigate to the RestaurantFoodsComponent with the restaurant ID as a route parameter
    this.router.navigate(['/restaurant/foods', restaurantId, restaurantName]);
  }
}
