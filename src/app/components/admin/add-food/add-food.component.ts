import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin/admin.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent {
  foodRequest: any = {};

  constructor(private adminService : AdminService){}

  onSubmit() {
    console.log(this.foodRequest);
    const restaurantId = localStorage.getItem("restaurantId")?.toString();
    console.log(restaurantId);
    this.adminService.addNewFood(this.foodRequest, restaurantId).subscribe(
      (data)=>{
        console.log(data);
        window.location.href='admin/dashboard';
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }



}
