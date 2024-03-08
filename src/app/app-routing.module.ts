import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { DummyComponent } from './dummy/dummy.component';
import { CanDeactivateGuard } from 'src/guards/can-deactivate.guard';


const routes: Routes = [

  { path: 'employee/:id', component: ProjectComponent },
//  { path: 'employee', component: ProjectComponent,canDeactivate:[CanDeactivateGuard]} ,
 { path: 'employee', component: ProjectComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'login',component : LoginComponent},
  { path: 'register',component : RegisterComponent},
  {path: 'logout' ,component : LogoutComponent},
  { path: 'dummy', component: DummyComponent }
   // { path: '', redirectTo: '/login', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanDeactivateGuard]
})
export class AppRoutingModule { }
