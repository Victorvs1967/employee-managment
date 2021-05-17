import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'victor';
  password = '';
  invalideLogin = false;

  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  checkLogin(): void {
    if (this.auth.authenticate(this.username, this.password)) {
      this.router.navigate(['']);
      this.invalideLogin = false;
    } else {
      this.invalideLogin = true;
    }
  }
}
