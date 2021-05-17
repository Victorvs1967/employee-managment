import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getEmployee(): Observable<Employee[]> {
    console.log('test call');
    let username = 'victor';
    let password = 'victor77';
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees', { headers });
  }

  public deleteEmployee(employee: Employee): Observable<Employee> {
    let username = 'victor';
    let password = 'victor77';
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.delete<Employee>(`http://localhost:8080/employees/${employee.id}`, { headers });
  }

  public createEmployee(employee: Employee): Observable<Employee> {
    let username = 'victor';
    let password = 'victor77';
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<Employee>('http://localhost:8080/employees', employee, { headers });
  }
}
