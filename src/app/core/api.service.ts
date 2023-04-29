import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer, User } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  serverURL = 'http://localhost:3000/'
  TOKEN_KEY = 'token'

  setToken(value: string) {
    localStorage.setItem(this.TOKEN_KEY, value)
   
  }
  
  getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY) || '';
  }

  constructor(private http: HttpClient) {}

 
  getCustomers(): Observable<Array<Customer>> {
    return this.GET<Customer>(`customers`);

  }

  getUsers(): Observable<Array<User>> {
    return this.GET<User>(`users`);
  }


  addCustomer(customer: Customer): Observable<Customer> {

    return this.POST<Customer>('customers', customer);
  }


  GET<T>(endpoint: string): Observable<Array<T>> {
    return this.http.get<Array<T>>(
      `${this.serverURL}${endpoint}`,
      {
        headers: {
          'Content-Type': 'application/json',
         'x-auth-token': this.getToken()
        }
      }
    )
  }


  POST<T>(endpoint:string, data: object): Observable<T>
   {return this.http.post<T>(
      `${this.serverURL}${endpoint}`,
      data,
      {headers: { 
         'Content-Type': 'application/json',
         'x-auth-token': this.getToken()
        }
      }
  )}
  


  deleteCustomer(id: string): Observable<Customer> {
    return this.http.delete<Customer>(
      `${this.serverURL}customers/${id}`,
      {headers: {
        'Content-Type': 'application/json',
        'x-auth-token': this.getToken()} 
      }
    );

  }


  updateCustomer(id:string, customer: Customer): Observable<Customer> {
     return this.http.put<Customer>(
      `${this.serverURL}customers/${customer._id}`,
     customer,
      {headers: {
        'Content-Type': 'application/json',
        'x-auth-token': this.getToken()}
      }
    )
  }

 signup(user: User): Observable<User> {
    return this.http.post<User>(
      `${this.serverURL}users/signup`,
      user,
      {headers: {'Content-Type': 'application/json'}}
    )
  }
  

  login(user: User): Observable<User> {
    return this.http.post<User>(
      `${this.serverURL}users/login`,
      user,
      {headers: {'Content-Type': 'application/json'}}
    )
  }



  deleteToken() {
    localStorage.removeItem(this.TOKEN_KEY)
  }


}



