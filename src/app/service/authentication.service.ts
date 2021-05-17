import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(username: string, password: string) {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.httpClient.get<User>('http://localhost:8080/employees/validateLogin', {headers})
            .pipe(map(userData => {
                        sessionStorage.setItem('username', username);
                        return userData;
            }));
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('username');
    return user !== null;
  }

  logout(): void {
    sessionStorage.removeItem('username');
  }
}
