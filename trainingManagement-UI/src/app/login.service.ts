import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _url= "http://localhost:3000/userLogin"
  constructor(private _http: HttpClient) { }

  loginUser(userData){
    return this._http.post<any>(this._url, userData)
  }

  loggedIn(){
    return !!localStorage.getItem("Token")
  }

  getToken(){
    return localStorage.getItem("Token")
  }
}

