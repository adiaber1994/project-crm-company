import { Component } from '@angular/core';
import { ApiService } from './core/api.service';
import { Route, Router } from '@angular/router';
import { SessionService } from './core/session.service';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'company-crm';
  developer = '2023';


  constructor(
    private session: SessionService,
    private api: ApiService,
    private router: Router,
    private auth: AuthService
  ){ }

 loggedIn(): boolean {
    return this.auth.isLoggedIn()
  }


 logout(){
    this.api.deleteToken();
    this.router.navigate(['login']);
  }

}

export interface User {
  _id?: string | null;
  name?: string | null;
  email?: string | null;
  password?: string | null;
  token?: string | null;
}

export interface Customer {
  _id?: string | null;
 firstName?: string | null;
 lastName?: string | null;
 phone?: string | null;
 email?: string | null;
 address?: string | null;
}

export interface Employee {
  _id?: string | null;
  name?: string | null;
  email?: string | null;
  birthday?: Date | null;
  phone?: string | null;
}
