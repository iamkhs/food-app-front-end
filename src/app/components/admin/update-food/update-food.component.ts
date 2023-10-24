import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/service/admin/admin.service';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent {
  foodForm!: FormGroup;
  foodId:any;
  constructor(private formBuilder: FormBuilder, private adminService: AdminService) {}

  ngOnInit(): void {
    // Create the form structure
    this.foodForm = this.formBuilder.group({
      name: '',
      description: '',
      price: 0,
      image: '',
    });

    const foodDataString = localStorage.getItem('food');

    if (foodDataString !== null) {
      const foodData = JSON.parse(foodDataString);
      this.foodId = foodData.id;
      this.foodForm.patchValue(foodData);
    }
  }


  onSubmit() {
    if (this.foodForm.valid) {
      const updatedFood = this.foodForm.value;
      console.log('Updated Food:', updatedFood);
      console.log(this.foodId);
      this.adminService.updateFood(this.foodId, updatedFood).subscribe(
        (data)=>{
          console.log(data);
          window.location.href="/admin/dashboard"
        },
        (error)=>{
          console.log(error);
          
        }
      )
    }
  }
}
