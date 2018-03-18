import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean;

  constructor(
    private router: Router,
    private service: AuthService
  ) { }

  signIn(credentials) {
    this.service.login(credentials)
    .subscribe( result => {
      if (result) {
        this.router.navigate(['/']);
      } else {
        this.invalidLogin = true;
      }
    });
  }

  ngOnInit() {
  }

}
