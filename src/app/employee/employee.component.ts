import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees?: Employee[];

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.httpClientService.getEmployee().subscribe(response => this.employees = response);
  }

}