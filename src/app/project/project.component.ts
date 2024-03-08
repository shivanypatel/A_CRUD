import { Component ,ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { CrudapiService } from '../crudapi.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Observable, Subscription } from 'rxjs';
import { CanDeactivateGuard } from 'src/guards/can-deactivate.guard';


@Component({selector: 'app-project',templateUrl: './project.component.html',styleUrls: ['./project.component.css'],})

// export class ProjectComponent implements CanDeactivateGuard{
  export class ProjectComponent  {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
 public loginForm!: FormGroup;
  public employeeData: any[] = [];
  private updateSubscription: Subscription | undefined;
  public isChecked: boolean = false;
  public submitted = false;
  public selectedOption: any;
  public $Event: any;
  public itemsPerPage: number = 8;
  public p: number = 1;
  public employee: any;
  public employeeId :any;
  public updatedEmployee :any;
  public formGroup: any;
  public rowDisabled :boolean =false;
  selectedCountryCode: string = '';
  loginData: any;
  private isDirty: boolean = false;
  countries = [
    { value: 'us', desc: 'United States', mobile: '+1' },
    { value: 'cn', desc: 'China', mobile: '+86' },
    { value: 'in', desc: 'India', mobile: '+91' },
    { value: 'id', desc: 'Indonesia', mobile: '+62' },
    { value: 'br', desc: 'Brazil', mobile: '+55' },
    { value: 'pk', desc: 'Pakistan', mobile: '+92' },
    { value: 'ng', desc: 'Nigeria', mobile: '+234' },
    { value: 'bd', desc: 'Bangladesh', mobile: '+880' },
    { value: 'ru', desc: 'Russia', mobile: '+7' },
    { value: 'mx', desc: 'Mexico', mobile: '+52' },
    { value: 'jp', desc: 'Japan', mobile: '+81' },
    { value: 'ph', desc: 'Philippines', mobile: '+63' },
    { value: 'et', desc: 'Ethiopia', mobile: '+251' },
    { value: 'vn', desc: 'Vietnam', mobile: '+84' },
    { value: 'eg', desc: 'Egypt', mobile: '+20' },
    { value: 'dr', desc: 'DR Congo', mobile: '+243' },
    { value: 'tr', desc: 'Turkey', mobile: '+90' },
    { value: 'ir', desc: 'Iran', mobile: '+98' },
    { value: 'de', desc: 'Germany', mobile: '+49' },
    { value: 'th', desc: 'Thailand', mobile: '+66' },
    { value: 'gb', desc: 'United Kingdom', mobile: '+44' },
    { value: 'fr', desc: 'France', mobile: '+33' },
    { value: 'it', desc: 'Italy', mobile: '+39' },
    { value: 'mm', desc: 'Myanmar', mobile: '+95' },
    { value: 'kr', desc: 'South Korea', mobile: '+82' },
    { value: 'es', desc: 'Spain', mobile: '+34' },
    { value: 'ua', desc: 'Ukraine', mobile: '+380' },
    { value: 'za', desc: 'South Africa', mobile: '+27' },
    { value: 'co', desc: 'Colombia', mobile: '+57' },
    { value: 'ke', desc: 'Kenya', mobile: '+254' },
    { value: 'ar', desc: 'Argentina', mobile: '+54' },
    { value: 'sd', desc: 'Sudan', mobile: '+249' },
    { value: 'dz', desc: 'Algeria', mobile: '+213' },
    { value: 'ca', desc: 'Canada', mobile: '+1' },
    { value: 'ir', desc: 'Iraq', mobile: '+964' },
    { value: 'af', desc: 'Afghanistan', mobile: '+93' },
    { value: 'pl', desc: 'Poland', mobile: '+48' },
    { value: 'ug', desc: 'Uganda', mobile: '+256' },
    { value: 'ma', desc: 'Morocco', mobile: '+212' },
    { value: 'sa', desc: 'Saudi Arabia', mobile: '+966' },
    { value: 'pe', desc: 'Peru', mobile: '+51' },
    { value: 'uz', desc: 'Uzbekistan', mobile: '+998' },
    { value: 've', desc: 'Venezuela', mobile: '+58' },
    { value: 'my', desc: 'Malaysia', mobile: '+60' },
    { value: 'np', desc: 'Nepal', mobile: '+977' },
    { value: 'mg', desc: 'Madagascar', mobile: '+261' },
    { value: 'cm', desc: 'Cameroon', mobile: '+237' },
    { value: 'ci', desc: 'Ivory Coast', mobile: '+225' },
    { value: 'au', desc: 'Australia', mobile: '+61' }
    
  ];
 
   modalData: any;
  fristName: any;

constructor(private crudapiService: CrudapiService, private router :Router , private matslidetoggle :MatSlideToggleModule, )
   { this.router.navigate(['/employee']);}
 
 
  
ngOnInit() {
this.modalData = this.crudapiService.getModalData();
this.loginForm = new FormGroup({
      salutaion: new FormControl(''),
      fristName: new FormControl('', [ Validators.required, Validators.minLength(6),]),
      lastName: new FormControl('', [Validators.required,Validators.minLength(6),]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required,Validators.maxLength(10),]),
      age: new FormControl('', Validators.required),
      accountNumber: new FormControl('', Validators.required),
      checkboxControl: new FormControl(false, Validators.requiredTrue),
      selectedCountry : new FormControl (''),
      code :new FormControl (''),
});
    this.getAllEmployee();
  }


get checkboxControl() { return this.loginForm.get('checkboxControl')}

get f() { return this.loginForm.controls}

onOptionSelected(event: any) {
    this.selectedOption = event.target.value;
  }

onKeypressEvent(event: any) {
    const allowedKeys = ['0', '1','2','3','4','5','6','7','8','9','Backspace','Delete','ArrowLeft','ArrowRight','Tab','Enter',];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

getAllEmployee() {
    this.crudapiService.getAllEmployee().subscribe((res: any) => {
     this.employeeData = res;
      this.loginForm.patchValue(this.employee);
      })
  }
  
postEmployeeDetails() {
    this.submitted = true;
  if (this.loginForm.valid) {
      if (!this.loginForm.get('checkboxControl')?.value) {
        Swal.fire({
          icon: 'error',
          text: 'Please agree the conditions!',
        });
      } else {
        this.crudapiService
          .postEmployee(this.loginForm.value)
          .subscribe((res: any) => {
            Swal.fire({
              icon: 'success',
              title: 'Data Saved Succesfully',
              showConfirmButton: true,
            }).then(() => {
              this.loginForm.reset(); 
              this.submitted = false;
              this.getAllEmployee();
             });
          });
      
      }
    }
  }

deleteEmployee(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this employee!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '##0000FF',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonColor: "#d33"
    }).then((result) => {
      if (result.isConfirmed) {
        this.crudapiService.delete(id).subscribe(() => {
          Swal.fire('Deleted!', 'Employee has been deleted.', 'success').then(() => {
            this.getAllEmployee();
          });
        });
      }
    });
  }
  
onEdit(employee: any) {
  this.employeeId =employee.id
    this.loginForm.patchValue(employee);
    //  this.router.navigate(['/employee', employee.id]); 
     this.router.navigate(['/employee'], { queryParams: { id: employee.id } });
    //  this.router.navigate(['/employee/:id', employee.id]); 
   }

  updateEmployee(employeeId: number) {
  const data = this.loginForm.value;
  this.updateSubscription = this.crudapiService.updateEmployee(data, employeeId)
    .subscribe(response => {
      this.loginForm.reset(); 
              this.submitted = false;
      this.getAllEmployee();
      console.log('Employee updated successfully:', response);
   Swal.fire({
        icon: "success",
        title: "Data updated successfully!",
        showConfirmButton: false,
        timer: 1500
      });
    });
}

toggleMenu(employee: any) {
employee.isRowDisabled = !employee.isRowDisabled;
}

logOut(){
localStorage.removeItem('token');
localStorage.removeItem('modal');
this.crudapiService.setModalData('', '');
}


onCountrySelect(event: any) {
  const selectedValue = event.target.value;
  const selectedCountry = this.countries.find(country => country.value === selectedValue);
  if (selectedCountry) {
    this.selectedCountryCode = selectedCountry.mobile;
  } else {
    this.selectedCountryCode = '';
  }
}

onDummy(){
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes!"
  }).then((result) => {
    if (result.isConfirmed) {
    this.router.navigate(['/dummy']);
    }
  });
}
// canDeactivate(): Observable<boolean> | boolean {
//   if (this.loginForm.dirty) {
//     return confirm('Are you sure you want to leave this page? Any unsaved changes will be lost.');
//   }
//   return true;
// }

}
  
 












  


























































// canDeactivate(): Observable<boolean> | boolean {
//   if (this.loginForm.dirty) {
//     return confirm('Are you sure you want to leave this page? Any unsaved changes will be lost.');
//   }
//   return true;
// }



// canDeactivate(): Observable<boolean> | boolean {
//   if (this.loginForm.dirty) {
//     return confirm('Are you sure you want to leave this page? Any unsaved changes will be lost.');
//   }
//   return true;
// }







// canLeave(): boolean {
//         if (this.loginForm.dirty) {
//             return window.confirm('Do you want to discard changes?');
//         }
//         return true;
//     }



    
  // canLeave(): boolean | Observable<boolean> {
  //   if (this.loginForm.dirty) {
  //     return confirm('Do you want to discard changes?');
  //   }
  //   return true;
  // }










































































































































   



















































