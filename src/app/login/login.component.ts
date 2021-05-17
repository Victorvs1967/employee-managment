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
    this.auth.authenticate(this.username, this.password).subscribe(data => {
      this.router.navigate(['']);
      this.invalideLogin = false;
    }, error => this.invalideLogin = true);
  }
}
