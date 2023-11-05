import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

export interface RestaurantResponse {
  restaurantDtoList: any[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  lastPage: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  restaurants: any;
  pageNumber: number = 0;
  pageSize: number = 10;
  totalElements: number = 0;
  constructor(private homeService: HomeService, private router: Router) {}

  addressName:string = '';

  ngOnInit(): void {
    this.homeService.getAllRestaurant(this.pageNumber, this.pageSize).subscribe(
      (data: any) => {
        console.log(data);
        this.restaurants = data.restaurantDtoList;
        this.totalElements = data.totalElements;
        this.pageNumber = data.pageNumber;
        this.pageSize = data.pageSize;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          console.log(latitude);
          console.log(longitude);
          
          const apiUrl = `https://barikoi.xyz/v1/api/search/reverse/bkoi_97d38c88ec16db8c08bbdba559a0b8932c9b1b46bce207f85014a16a864ce1b9/geocode?longitude=${longitude}&latitude=${latitude}&district=true&post_code=true&country=true&sub_district=true&union=true&pauroshova=true&location_type=true&division=true&address=true&area=true&bangla=true`;

          // The locationRequest object
          const locationRequest = {
            latitude: latitude,
            longitude: longitude,
          };

          this.homeService.getNearByRestaurant(locationRequest).subscribe(
            (data) => {
              this.restaurants = data;
              this.homeService.getAddressName(apiUrl).subscribe(
                (data:any)=>{
                  this.addressName = data.place.address;
                  console.log(this.addressName);
                  
                }
              )
            },
            (error) => {
              console.log(error);
            }
          );
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }


  onPageChange(event: PageEvent) {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.homeService.getAllRestaurant(this.pageNumber, this.pageSize).subscribe(
      (data:any) => {
        this.restaurants = data.restaurantDtoList; // Update the data to the restaurantDtoList
      },
      (error) => {
        console.log(error);
      }
    );
  }
  

}
