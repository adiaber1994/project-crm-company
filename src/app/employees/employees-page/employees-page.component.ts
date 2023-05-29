import { Component, Input, OnInit } from '@angular/core';
import { Employee, User } from 'src/app/app.component';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent implements OnInit {
  @Input() email='';
  filterData:Array<Employee>=[];

  employees: Array<Employee> = [];

  constructor(private api: ApiService) {
  }
  ngOnInit(): void {
    this.api.getEmployees().subscribe({
      next: (data: Array<Employee>) => this.employees = data,
      error: (err) => console.log(err)
    })
    
  }

  serchInEmployees(event: any) {
    if(event.target.value === '')
   this.api.getEmployees();

    this.filterData=this.employees.filter(emp => emp.name?.includes(event.target.value))
    this.employees=this.filterData
  }


}

  
