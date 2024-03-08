import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({selector: 'app-register',templateUrl: './register.component.html',styleUrls: ['./register.component.css']})
export class RegisterComponent {
  public registrationForm!: FormGroup;
  public submitted = false;
  passwordMismatch = false;
 
constructor(private fb: FormBuilder,private http :HttpClient, private route :Router) { }

ngOnInit(): void {
  this.registrationForm = this.fb.group({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required),
  }, { validator: this.passwordMatchValidator });
}

get f() { return this.registrationForm.controls}

passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmpassword');

    return password && confirmPassword && password.value !== confirmPassword.value ? { 'misMatch': true } : null;
  };


onregister() {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }
    this.http.post<any>('http://localhost:3000/auth', this.registrationForm.value)
      .subscribe(
        response => {
          console.log('Data stored successfully!', response);
          Swal.fire({
           icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          this.route.navigateByUrl('/login');
        },
        error => {
          console.error('Error occurred while storing data:', error);
        }
      );
  }
}


















































































































//  onregister() {
//     this.submitted = true;
//     if (this.registrationForm.invalid) {
//       return;
//     }
//     this.http.post<any>('http://localhost:3000/auth', this.registrationForm.value)
//       .subscribe(
//         response => {
//           console.log('Data stored successfully!', response);
//           alert('Register successfully');
//        this.route.navigateByUrl('/login');
//         },
//         error => {
//           console.error('Error occurred while storing data:', error);
//         }
//       );
//   }






























