import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuperAdminService } from '../services/super-admin.service';
import { adminDetail } from '../models/adminDetails';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrls: ['./super-admin-dashboard.component.css']
})
export class SuperAdminDashboardComponent implements OnInit {
  public adminList:adminDetail[];
  public adminDetail:adminDetail;
  constructor(private router:Router, private _superAdminService:SuperAdminService, private spinnerService: Ng4LoadingSpinnerService ) { 
    this.adminDetail = new adminDetail();
  }

  ngOnInit() { 
    this.spinnerService.show();
    this._superAdminService.getAdminList().subscribe((res)=>{
      console.log(res);
      this.adminList = res;
      this.spinnerService.hide();
    })
  }

  public submit(){
    this.spinnerService.show();
    this._superAdminService.postDataCreateAdmin(this.adminDetail).subscribe((res)=>{
      console.log(res);
      this.spinnerService.hide();
    });
  }

}
