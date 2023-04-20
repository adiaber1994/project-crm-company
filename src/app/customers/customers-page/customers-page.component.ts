import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { LoggerService } from 'src/app/core/logger.service';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.css']
})
export class CustomersPageComponent implements OnInit {

  constructor(
    private api: ApiService,
    private logger: LoggerService
    ) {}

  ngOnInit(): void {
    // this.api.getUserPosts().subscribe({
    //   next: (data) => this.logger.log (data.toString()),
    //   error:(err) => console.log(err)
      
    // })
  }
}

