import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { adminDetail } from '../models/adminDetails';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {

  private headers: HttpHeaders;
  private host: string;
  public data: any;
  public admindetail: adminDetail;
  public adminlist:adminDetail[];

  constructor(private httpclient:HttpClient) {
    let token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYXNoYW5rX2NoaW5rc0B5YWhvby5jb20iLCJ1c2VySWQiOiI1ZDc3ZjE5Y2ZhMmZkODJmNTQ0OWUzMDYiLCJyb2xlIjoic3VwZXItYWRtaW4iLCJpYXQiOjE1NjkwNzA2NTcsImV4cCI6MTYwMDYwNjY1N30.TL5zcwuxweQPP7dI7obDw4sc14ywQuTszGjETuploZU";
    this.headers = new HttpHeaders({"content-Type" : "application/json","Authorization":"Bearer "+token});
    this.host = "http://localhost:4000/admin";
  }

  public postDataCreateAdmin(request:adminDetail):Observable<any>{
    let url:string = this.host+"createAdmin";
    return this.httpclient.post<any>(url,request,{headers:this.headers});
  }

  public getAdminList():Observable<any>{
    let url:string = this.host+"/";
    return this.httpclient.get(url);
  }
}


