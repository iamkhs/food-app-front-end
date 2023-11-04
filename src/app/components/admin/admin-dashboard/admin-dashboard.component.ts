import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin/admin.service';
import { OrdersComponent } from '../orders/orders.component';
import { AdminSocketService } from 'src/app/service/admin/admin-socket.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {

  constructor(private socketSercice : AdminSocketService,  private adminService: AdminService, private router : Router) {}

  restuarants : any;
  foodItems : any;
  restuarantId:any;

  ngOnInit(): void {
    
    // 1. Retrieve the userDto from localStorage
    const userDtoString = localStorage.getItem('userDto');
    let userId = ''
    if (userDtoString) {
      const userDto = JSON.parse(userDtoString);
      userId = userDto.id;
      console.log(userId);
    } else {
      console.log('user not found in localStorage');
    }


    this.adminService.getRestaurant(userId).subscribe(
      (data:any)=>{
        console.log(data);
        this.restuarants = data;
        this.foodItems = data.foodMenuList;
        console.log(this.foodItems);
        this.restuarantId = data.id;
        console.log(this.restuarantId);
        
        localStorage.setItem("restaurantId", this.restuarantId)
        
      },
      (error)=>{
        console.log(error);
      }
    )
    
  }


  onCardClick(food: any) {
    // Implement your desired action here, e.g., navigate to a details page
    console.log(food);
    localStorage.setItem('food', JSON.stringify(food));
    this.router.navigate(['/admin/food-details', food.id], { queryParams: { restaurant: this.restuarantId } });

  }
}
