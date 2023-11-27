import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { SignupService } from 'src/app/service/signup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userDetails: any;

  constructor(private fb: FormBuilder, private userService: SignupService,
    private router : Router) {}

  ngOnInit(): void {
    this.userDetails = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userDetails.valid) {
      const userData = this.userDetails.value;

      this.userService.saveUser(userData).subscribe(
        (data) => {
          console.log(data);
          Swal.fire({
              icon: 'success',
              title: 'Registration Successful',
              text: 'You have successfully registered! Check Your email for verification'
            });

            this.router.navigate(['/verify']);
  
        },
        (error) => {
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
