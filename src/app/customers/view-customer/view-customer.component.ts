import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { retry, switchMap } from 'rxjs';
import { Customer } from 'src/app/app.component';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  customer: Customer | null = null;

    viewCustomerForm = new FormGroup({
    firstName: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(200)
      ]
    }),

    lastName: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(200)
      ]
    }),

    phone: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(12)
      ]
    }),

    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(255),
      ]
    }),

    address: new FormControl('', {
      validators: [
        Validators.minLength(6),
        Validators.maxLength(255),
      ]
    })

  })

  constructor(
    private api: ApiService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id') as string;
        return this.api.getOnecustomer(id);
      })
    ).subscribe({
      next: (data: Customer) => {
        this.customer = data;
        const firstName = data.firstName || '';
        const lastName = data.lastName || '';
        const phone = data.phone || '';
        const email = data.email || '';
        const address = data.address || '';
        this.viewCustomerForm.get('firstName')?.setValue(firstName);
        this.viewCustomerForm.get('lastName')?.setValue(lastName);
        this.viewCustomerForm.get('phone')?.setValue(phone);
        this.viewCustomerForm.get('email')?.setValue(email);
        this.viewCustomerForm.get('address')?.setValue(address);

      },
      error: (err) => console.log(err) 

    })
  }
  

    onSubmit(){
      this.router.navigate(['customers'])
      
  }



}
