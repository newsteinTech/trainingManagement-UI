import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { adminDetail } from '../models/adminDetails';
import { userDetail } from '../models/userDetails';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {

  private headers: HttpHeaders;
  private admin_host: string;
  private trainer_host: string;
  private student_host: string;
  private user_host: string;
  public data: any;
  public userdetail: userDetail;

  constructor(private httpclient:HttpClient) {
    let token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYXNoYW5rX2NoaW5rc0B5YWhvby5jb20iLCJ1c2VySWQiOiI1ZDc3ZjE5Y2ZhMmZkODJmNTQ0OWUzMDYiLCJyb2xlIjoic3VwZXItYWRtaW4iLCJpYXQiOjE1NjkwNzA2NTcsImV4cCI6MTYwMDYwNjY1N30.TL5zcwuxweQPP7dI7obDw4sc14ywQuTszGjETuploZU";
    // this.headers = new HttpHeaders({"content-Type" : "application/json","Authorization":"Bearer "+token});
    this.admin_host = "http://localhost:4000/admin/";
    this.trainer_host = "http://localhost:4000/trainer/";
    this.student_host = "http://localhost:4000/student/";
    this.user_host = "http://localhost:4000/user";
  }

  public postDataCreateAdmin(request:userDetail):Observable<any>{
    let url:string = this.admin_host+"createAdmin";
    return this.httpclient.post<any>(url,request,{headers:this.headers});
  }

  public postDataCreateTrainer(request:userDetail):Observable<any>{
    let url:string = this.trainer_host+"createTrainer";
    return this.httpclient.post<any>(url,request,{headers:this.headers});
  }

  public postDataCreateStudent(request:userDetail):Observable<any>{
    let url:string = this.student_host+"createStudent";
    return this.httpclient.post<any>(url,request,{headers:this.headers});
  }

  public getAllUserList():Observable<any>{
    let url:string = this.user_host+"/";
    return this.httpclient.get(url);
  }

  public editUser(id:string):Observable<any>{
    let url:string = this.user_host+"/getUserById/"+id;
    return this.httpclient.get(url);
  }
}


