import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'company-crm';

}

export interface Customer {
  firstName?: string | null;
  lastName?: string | null;
 phone?: string | null;
  email?: string | null;
}
