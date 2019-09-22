import { Component, OnInit } from '@angular/core';
import { enquiryDetail } from '../models/enquiryDetails';
import { EnquiryService } from '../services/enquiry.service';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { courseDetail } from '../models/courseDetails';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
  public enquirydetail:enquiryDetail;
  public getAllCourse:courseDetail[];
  public placeholder: string = 'Enter the Country Name';
  public keyword = 'name';
  public historyHeading: string = 'Recently selected';
  constructor(private enquiryservice:EnquiryService, private router:Router, private spinnerService:Ng4LoadingSpinnerService) { 
    this.enquirydetail = new enquiryDetail();
  }

  

  ngOnInit() {
    this.spinnerService.show();
    this.enquiryservice.getAllCourse().subscribe((res)=>{
      console.log(res);
      this.getAllCourse = res;
      this.spinnerService.hide();
    })
  }

  public submitEnquiry():void {
    this.spinnerService.show();
    this.enquiryservice.postDataEnquiry(this.enquirydetail).subscribe((res)=>{
      console.log(res);
      this.spinnerService.hide();
      // this.router.navigate(['/']);
    })
  }

}
