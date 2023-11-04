import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin/admin.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent {

  foodRequest: any = {};
  selectedFile: File | null = null;
  restaurantId:any;

  constructor(private adminService : AdminService){}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }


  onSubmit() {
    const formData = new FormData();
    console.log(this.selectedFile);
    
    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }
    formData.append('name', this.foodRequest.name);
    formData.append('description', this.foodRequest.description);
    formData.append('price', this.foodRequest.price);
    this.restaurantId = localStorage.getItem("restaurantId")?.toString();
    formData.append('restaurantId', this.restaurantId);
    console.log(formData);
    
    this.adminService.addNewFood(formData).subscribe(
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
