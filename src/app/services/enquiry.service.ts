import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { enquiryDetail } from '../models/enquiryDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

    private headers: HttpHeaders;
    private host: string;
    public data: any;
    public enquirydetail: enquiryDetail;
  
    constructor(private httpclient:HttpClient) {
      this.headers = new HttpHeaders({"content-Type" : "application/json"});
      this.host = "http://localhost:4000/";
    }
  
    public postDataEnquiry(request:enquiryDetail):Observable<any>{
      let url:string = this.host+"enquiry";
      return this.httpclient.post<any>(url,request,{headers:this.headers});
    }

    public getAllCourse():Observable<any>{
      let url:string = this.host+"courses";
      return this.httpclient.get(url);
    }
  
  }
