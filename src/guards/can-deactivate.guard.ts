// import { Injectable } from '@angular/core';
// import { CanDeactivate } from '@angular/router';
// import { Observable } from 'rxjs';
// // import { ProjectComponent } from 'src/app/project/project.component';
// // import { LoginComponent } from 'src/app/auth/login/login.component';
// // import { ProjectComponent } from 'src/app/project/project.component';

// export interface ProjectComponent {
//   loginForm(): unknown;
//   canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class CanDeactivateGuard implements CanDeactivate<ProjectComponent> {
//   canDeactivate(
//     component: ProjectComponent
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     return component.canDeactivate ? component.canDeactivate() : true;
//   }
// }



// import { Injectable } from '@angular/core';
// import { CanDeactivate } from '@angular/router'
// import { ProjectComponent } from 'src/app/project/project.component';

// @Injectable({
//   providedIn: 'root'
// })
// export class CanDeactivateGuard implements CanDeactivate<ProjectComponent> {
//   canDeactivate(component: ProjectComponent): boolean {
//     if (component.loginForm && component.loginForm.dirty) {
//       return window.confirm('Are you sure you want to leave this page?');
//     }
//     return true;
//   }
// }





import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ProjectComponent } from 'src/app/project/project.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<ProjectComponent> {
  canDeactivate(component: ProjectComponent): boolean {
    if (component.loginForm && component.loginForm.dirty) {
      return window.confirm('Are you sure you want to leave this page?');
    }
    return true;
  }
}
















































































// @Injectable({
//   providedIn: 'root'
// })

// export class CanDeactivateGuard implements CanDeactivate<ProjectComponent> {

//   canDeactivate(component: ProjectComponent): boolean {
//     console.log('CanDeactivateGuard is invoked');
//     if (component.loginForm.dirty) {
//       return confirm('Are you sure you want to leave this page?');
//     }
//     return true;
//   }
 
// }












// import { Injectable } from '@angular/core';
// import { CanDeactivate } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CanDeactivateGuard implements CanDeactivate<any> {
//   canDeactivate(
//     component: any
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     if (component.canDeactivate) {
//       return component.canDeactivate();
//     }
//     return true;
//   }
// }


// import { Injectable } from '@angular/core';
// import { CanDeactivate } from '@angular/router';
// import { Observable } from 'rxjs';

// export interface CanComponentDeactivate {
//   canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//   canDeactivate(component: CanComponentDeactivate): Observable<boolean> | Promise<boolean> | boolean {
//     return component.canDeactivate ? component.canDeactivate() : true;
//   }
// }
































































// import { Injectable } from '@angular/core';
// import { CanDeactivate } from '@angular/router';
// import { Observable } from 'rxjs';

// export interface ProjectComponent {
//   canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class CanDeactivateGuard implements CanDeactivate<ProjectComponent> {
//   canDeactivate(
//     component: ProjectComponent
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     return component.canDeactivate ? component.canDeactivate() : true;
//   }
// }

// import { Injectable } from '@angular/core';
// import { CanDeactivate } from '@angular/router';
// import { ProjectComponent } from 'src/app/project/project.component';
// // import { canComponentLeave } from './can-component-leave.interface';


// export interface canComponentLeave{
//   canLeave:() => boolean;
// }

// @Injectable({providedIn: 'root'})

// export class CanDeactivateGuard implements CanDeactivate<canComponentLeave> {
// canDeactivate(component: canComponentLeave) {
//   if (component.canLeave) {
//     return component.canLeave();
//   }
//   return true;
// }
// }
 

// import { Injectable } from '@angular/core';
// import { CanDeactivate } from '@angular/router';
// import { Observable } from 'rxjs';
// import { ProjectComponent } from 'src/app/project/project.component';

// @Injectable({providedIn: 'root'})
// export class CanDeactivateGuard implements CanDeactivate<ProjectComponent> {
//   canDeactivate(component: ProjectComponent): boolean {
//     if(component.loginForm.dirty) {
//       return confirm('are you sure you want to leave this page');
//     }
//     return true;
//   }
// }


// can-deactivate.guard.ts


 // constructor() {}

  // canDeactivate(component: ProjectComponent): boolean {
  //   if (component.loginForm.dirty && !component.loginForm.valid) {
  //     console.log('Form is incomplete. Cannot navigate.');
  //     return confirm('Are you sure you want to leave this page? Any unsaved changes will be lost.');
  //   } else {
  //     return true;
  //   }
  // }