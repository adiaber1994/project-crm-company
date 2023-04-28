import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './auth/signup-page/signup-page.component';
import { LoginPageComponent } from './home/login-page/login-page.component';
import { CustomersPageComponent } from './customers/customers-page/customers-page.component';
import { AuthService } from './core/auth.service';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: LoginPageComponent},
  {path: 'signup', component:SignupPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path:'',
    // redirectTo: '/home',
    // pathMatch: 'full',
    canActivateChild: [AuthService],
    children: [
      {path: 'customers', component: CustomersPageComponent},

    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
