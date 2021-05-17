import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean {

    if (username === 'victor' && password === 'victor77') {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('username');
    return user !== null;
  }

  logout(): void {
    sessionStorage.removeItem('username');
  }
}
