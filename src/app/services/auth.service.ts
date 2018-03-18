import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor( private http: HttpClient) { }

  login(credentials) {
    return this.http.get('/api/authenticate', credentials)
    .map ( response => {
      console.log(response);
    });
  }

  logout() {

  }

  isLoggedIn() {
    return false;
  }




}
