import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomersPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
   
  ]
})
export class CustomersModule { }
