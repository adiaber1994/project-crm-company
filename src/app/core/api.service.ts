import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

 
  getCustomers(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>('http://localhost:3000/customers')
  }


  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(
      'http://localhost:3000/customers',
      customer,
      {headers: {'Content-Type': 'application/json'}}
    )
  }



}
