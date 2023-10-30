import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin/admin.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css'],
})
export class FoodDetailsComponent implements OnInit {
  foodId: any;
  food: any;
  restaurantId: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.restaurantId = params['restaurant'];
      console.log(this.restaurantId);
    });
    this.route.paramMap.subscribe((params) => {
      // Parse the 'id' parameter as a number

      this.foodId = +params.get('foodId')!;

      // Now, you can use this.foodId in your component
      console.log('Food ID:', this.foodId);

      this.adminService.getFoodById(this.foodId, this.restaurantId).subscribe(
        (data: any) => {
          console.log(data);
          this.food = data;
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  deleteFood() {
    this.adminService.deleteFoodById(this.foodId).subscribe(
      (data)=>{
        console.log('Delete successful:', data);
        this.router.navigate(['/admin/dashboard']);
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

  updateFood() {
    console.log('update method click');
    this.router.navigate(['admin/food-details/update', this.foodId], {
      relativeTo: this.route.parent,
    });
  }
}
