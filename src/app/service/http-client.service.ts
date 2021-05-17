import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  userData = {
    username: 'victor',
    password: 'victor77'
  };

  constructor(private httpClient: HttpClient) { }

  getEmployee(): Observable<Employee[]> {
    const headers: HttpHeaders = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.userData.username + ':' + this.userData.password) });
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees', { headers });
  }

  public deleteEmployee(employee: Employee): Observable<Employee> {
    const headers: HttpHeaders = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.userData.username + ':' + this.userData.password) });
    return this.httpClient.delete<Employee>(`http://localhost:8080/employees/${employee.id}`, { headers });
  }

  public createEmployee(employee: Employee): Observable<Employee> {
    const headers: HttpHeaders = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.userData.username + ':' + this.userData.password) });
    return this.httpClient.post<Employee>('http://localhost:8080/employees', employee, { headers });
  }
}
