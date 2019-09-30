import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuperAdminService } from '../services/super-admin.service';
import { userDetail } from '../models/userDetails';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrls: ['./super-admin-dashboard.component.css']
})
export class SuperAdminDashboardComponent implements OnInit {
  public userList:userDetail[];
  public userdetail:userDetail;
  public editdetail:userDetail;
  constructor(private router:Router, private _superAdminService:SuperAdminService, private spinnerService: Ng4LoadingSpinnerService ) { 
    this.userdetail = new userDetail();
  }

  ngOnInit() { 
    this.spinnerService.show();
    this._superAdminService.getAllUserList().subscribe((res)=>{
      console.log(res);
      this.userList = res;
      this.spinnerService.hide();
    })
  }

  public submit_detail(){
    this.spinnerService.show();
    if(this.userdetail.role == 'admin'){
      this._superAdminService.postDataCreateAdmin(this.userdetail).subscribe((res)=>{
        console.log(res);
        this.spinnerService.hide();
      });
    }else if(this.userdetail.role == 'trainer'){
      this._superAdminService.postDataCreateTrainer(this.userdetail).subscribe((res)=>{
        console.log(res);
        this.spinnerService.hide();
      });
    }else if(this.userdetail.role == 'student'){
      this._superAdminService.postDataCreateStudent(this.userdetail).subscribe((res)=>{
        console.log(res);
        this.spinnerService.hide();
      });
    }   
  }

  public edit_detail(user_id){
    this.spinnerService.show();
    this._superAdminService.editUser(user_id).subscribe((res)=>{
      console.log(res);
      this.editdetail = res;
      this.spinnerService.hide();
    })
  }
}
