import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { RegisterUser } from './register-user';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  _url = 'http://localhost:3000/register';

  constructor( private _http: HttpClient) { }

  signUp(register : RegisterUser){
    return this._http.post<any>(this._url, register);
  }
}
