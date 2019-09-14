import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { userDetail } from '../models/userDetails';
import { Observable } from 'rxjs';
import { userLogin } from '../models/userLogin';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {

  private headers: HttpHeaders;
  private host: string;
  public data: any;
  public userdetail: userDetail;

  constructor(private httpclient:HttpClient) {
    this.headers = new HttpHeaders({"content-Type" : "application/json"});
    this.host = "http://localhost:4000/admin";
  }

  public postDataCreateAdmin(request:userDetail):Observable<any>{
    let url:string = this.host+"createAdmin";
    return this.httpclient.post<any>(url,request,{headers:this.headers});
  }
}


