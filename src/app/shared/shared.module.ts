import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './topnav/topnav.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    TopnavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    TopnavComponent
  ]
})
export class SharedModule { }
