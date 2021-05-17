import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getEmployee(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees');
  }

  public deleteEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.delete<Employee>(`http://localhost:8080/employees/${employee.id}`);
  }

  public createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>('http://localhost:8080/employees', employee);
  }
}
