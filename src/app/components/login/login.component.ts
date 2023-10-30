import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}

  credentials = {
    username: '',
    password: '',
  };

  formSubmit() {
    console.log('hello submiting form');

    if (
      this.credentials.username != null &&
      this.credentials.password != null &&
      this.credentials.username != '' &&
      this.credentials.password != ''
    ) {
      // token generate
      this.loginService
        .generateToken(this.credentials)
        .subscribe((response) => {
          // success to generate token
          console.log(response);

          const token = (response as any).token; // Use type assertion as 'any'
          this.loginService.loginUser(token);
          const userDto = (response as any).userDto;
          localStorage.setItem('userDto', JSON.stringify(userDto));

          if (userDto.role == 'ADMIN') {
            window.location.href = '/admin/dashboard';
          } else {
            window.location.href = '/';
          }
        },
        (error)=>{
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Something went wrong!'
          });
          
        }
        
        
        );
    }
  }
}
