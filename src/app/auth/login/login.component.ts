import { Component } from '@angular/core';
import { FormGroup,Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CrudapiService } from 'src/app/crudapi.service';
// import { JwtHelperService } from '@auth0/angular-jwt';


@Component({selector: 'app-login',templateUrl: './login.component.html',styleUrls: ['./login.component.css']})
export class LoginComponent {
  public loginSucessForm!: FormGroup;
  public submitted = false;
  employee: any;
  email: string | undefined;
  password: string | undefined;
  modal: object | undefined ;
  constructor(private fb: FormBuilder, private http: HttpClient, private router :Router ,private crudapiService: CrudapiService  ) { }

  ngOnInit(): void {
    this.loginSucessForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });

    this.http.get('http://localhost:3000/auth').subscribe(
      (data: any) => {
        this.employee = data; 
      },
      error => {
        console.error('Error occurred while fetching employee data:', error);
      }
    );
}

get f() { return this.loginSucessForm.controls; }


onLogin() {
  this.submitted = true;

  if (this.loginSucessForm.invalid) {
    return;
  }

  const enteredEmail = this.loginSucessForm.value.email;
  const enteredPassword = this.loginSucessForm.value.password;
  const user = this.employee.find((userData: any) => userData.email === enteredEmail && userData.password === enteredPassword);

  if (user) {
    console.log('Login successful!');

    const token = {email: user.email,password: user.password  };
    const modal = {email: user.email,password: user.password };

    const modalString = JSON.stringify(modal);
    localStorage.setItem('modal', modalString);
    this.crudapiService.setModalData(user.email , user.password);
   
    const tokenString = JSON.stringify(token);
    const encodedToken = btoa(tokenString);
    localStorage.setItem('token', encodedToken);

   this.router.navigateByUrl('/employee');
  } else {
    console.log('Invalid username or password');
    alert('First register then login');
  }
}
}












































































// onLogin() {
//   this.submitted = true;

//   if (this.loginSucessForm.invalid) {
//     return;
//   }

//   const enteredEmail = this.loginSucessForm.value.email;
//   const enteredPassword = this.loginSucessForm.value.password;
//   const user = this.employee.find((userData: any) => userData.email === enteredEmail && userData.password === enteredPassword);

//   if (user) {
//     console.log('Login successful!');

//     const token = {email: user.email,password: user.password  };
//     const modal = {email: user.email,password: user.password };

//     const modalString = JSON.stringify(modal);
//     localStorage.setItem('modal', modalString);
//     this.crudapiService.setModalData(user.email , user.password);
   
//     const tokenString = JSON.stringify(token);
//     const encodedToken = btoa(tokenString);
//     localStorage.setItem('token', encodedToken);

//    this.router.navigateByUrl('/employee');
//   } else {
//     console.log('Invalid username or password');
//     alert('First register then login');
//   }
// }

























































































































//  onLogin() {
//   this.submitted = true;
//   if (this.loginSucessForm.invalid) {
//     return;
//   }
//   const enteredEmail = this.loginSucessForm.value.email;
//   const enteredPassword = this.loginSucessForm.value.password;
//   const user = this.employee.find((userData: any) => userData.email === enteredEmail && userData.password === enteredPassword);
//   if (user) {
//     console.log('Login successful!');
//     const token = {
//       email: user.email,
//       password: user.password 
//     };

//     const tokenString = JSON.stringify(token);
//     const encodedToken = btoa(tokenString);
//     localStorage.setItem('token', encodedToken);
//     this.router.navigateByUrl('/employee');
//   } else {
//     console.log('Invalid username or password');
//     alert('First register then login');
//   }
// }














































































































