import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee.model';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employee: Employee = new Employee();

  constructor(private router: Router, private httpClientService: HttpClientService) { }

  createEmployee(): void {
    this.httpClientService.createEmployee(this.employee)
          .subscribe(data => {
            alert('Employee created successfully.');
            this.router.navigate(['']);
          });
  }

}
