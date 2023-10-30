import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-restaurant-foods',
  templateUrl: './restaurant-foods.component.html',
  styleUrls: ['./restaurant-foods.component.css']
})
export class RestaurantFoodsComponent implements OnInit{

  constructor(private homeService: HomeService, 
    private cartService:CartService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar) {}
  
  foods:any;
  restaurantId:any;
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.restaurantId = params['restaurantId'];
      
      // Now, you can use the restaurantId in your component logic
      console.log('Restaurant ID:', this.restaurantId);
      
      // You can also fetch restaurant-specific data using the restaurantId
      this.homeService.getFoodsByRestaurant(this.restaurantId).subscribe(
        (data) => {
          this.foods = data;
          console.log('Restaurant Data:', this.foods);
        },
        (error) => {
          console.log('Error:', error);
        }
      );
    });
  }

  addToCart(food: any) {
    this.cartService.addToCart(food, this.restaurantId);
    this._snackBar.open("Item successfully added to your cart.", "OK", {
      duration: 2000 // Set the duration in milliseconds
    });
    
  }
}
