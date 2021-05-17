import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getEmployee() {
    console.log('test call');
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees');
  }
}
