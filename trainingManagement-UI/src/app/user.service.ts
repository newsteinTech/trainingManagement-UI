import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _url= "http://localhost:3000/user/getAllUsers"
  constructor(private _http: HttpClient) { }

  User(){
    return this._http.get<any>(this._url)
  }
}
