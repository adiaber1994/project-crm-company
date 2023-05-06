import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { RouterModule } from '@angular/router';
import { ViewCustomerComponent } from './view-customer/view-customer.component';



@NgModule({
  declarations: [
    CustomersPageComponent,
    EditCustomerComponent,
    ViewCustomerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
   
  ]
})
export class CustomersModule { }
