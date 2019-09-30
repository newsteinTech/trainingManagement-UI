import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
// import { tokenNotExpired } from 'angular2-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public getToken(): string {
    return sessionStorage.getItem('token');
  }
  // public isAuthenticated(): boolean {
  //   // get the token
  //   const token = this.getToken();
  //   // return a boolean reflecting 
  //   // whether or not the token is expired
  //   return tokenNotExpired(null, token);
  // }
}
