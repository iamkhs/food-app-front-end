import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {

  constructor(){}

  addFood() {
    window.location.href='admin/dashboard/food/add'
  }

  testing() {
    window.location.href='http://localhost:8080/food-app/dev/add-restaurant'
  }
}
