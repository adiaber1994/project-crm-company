import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUserPosts() {
    // fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    // .then(res => res.json())
    // .then(json => {
    //   console.log(json);
    // })

    this.http.get('https://jsonplaceholder.typicode.com/users/1/posts')
    }
    
  }
}
