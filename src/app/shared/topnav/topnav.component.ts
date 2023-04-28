import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent {

  constructor(
    private api: ApiService,
    private router: Router,
    private auth: AuthService
  ){}


loggedIn(): boolean {
  return this.auth.isLoggedIn();
}
  


logout(){
    this.api.deleteToken();
    this.router.navigate(['login']);
}

}
