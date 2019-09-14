import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { userDetail } from '../models/userDetails';
import { Observable } from 'rxjs';
import { userLogin } from '../models/userLogin';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private headers: HttpHeaders;
  private host: string;
  public data: any;
  public userdetail: userDetail;
  public userlogin: userLogin;

  constructor(private httpclient:HttpClient) {
    this.headers = new HttpHeaders({"content-Type" : "application/json"});
    this.host = "http://localhost:4000/";
  }

  public postDataLogin(request:userLogin):Observable<any>{
    let url:string = this.host+"login";
    return this.httpclient.post<any>(url,request,{headers:this.headers});
  }

  public postDataRegister(request:userDetail):Observable<any>{
    let url:string = this.host+"register";
    return this.httpclient.post<any>(url,request,{headers:this.headers});
  }
}
