import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './shared/topnav/topnav.component';
import { SignupPageComponent } from './auth/signup-page/signup-page.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module';
import { EmployeesModule } from './employees/employees.module';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    HomeModule,
    CoreModule,
    CustomersModule,
    EmployeesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
