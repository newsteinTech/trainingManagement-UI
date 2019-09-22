import { Component, OnInit } from '@angular/core';
import { userDetail } from '../models/userDetails';
import { LoginService } from './../services/login.service';
import { userLogin } from '../models/userLogin';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public showSignUp:boolean = false;
  public showSignIn:boolean = true;
  public showResetPassword:boolean = false;
  public userdetail:userDetail;
  public userlogin:userLogin;
  constructor(private loginService:LoginService, private router:Router, private spinnerService: Ng4LoadingSpinnerService) { 
    this.userdetail = new userDetail();
    this.userlogin = new userLogin();
  }

  ngOnInit() {
    this.showSignIn = true;
    this.showSignUp = false;
    this.showResetPassword = false;
  }

  public toggleSignUp(){
    this.showSignIn = false;
    this.showSignUp = true;
    this.showResetPassword = false;
  }

  public cancelSignup(){
    this.showSignUp = false;
    this.showSignIn = true;
    this.showResetPassword = false;
  }

  public forgotPswd(){
    this.showSignUp = false;
    this.showSignIn = false;
    this.showResetPassword = true;
  }

  public cancelReset(){
    this.showResetPassword = false;
    this.showSignIn = true;
    this.showSignUp = false;
  }

  public submitDetails():void{
    this.spinnerService.show();
    this.loginService.postDataLogin(this.userlogin).subscribe(res => {
      console.log(res);
      let user = JSON.parse(atob(res.split('.')[1]));
     
      if(user.role == 'super-admin'){
        this.spinnerService.hide();
        this.router.navigate(['/superAdminDashboard']);
      }else if(user.role == 'admin'){
        this.spinnerService.hide();
        this.router.navigate(['/adminDashboard']);
      }else if(user.role == 'trainer'){
        this.spinnerService.hide();
        this.router.navigate(['/trainerDashboard']);
      }else if(user.role == 'student'){
        this.spinnerService.hide();
        this.router.navigate(['/studentDashboard']);
      }
    });
  }

  public submitUserInfo():void{
    this.spinnerService.show();
    this.loginService.postDataRegister(this.userdetail).subscribe(res => {
      console.log(res);
      this.spinnerService.hide();
      this.router.navigate(['/instruction']);
    })
  }

  public enquiry(){
    this.router.navigate(['/enquiry']);
  }

}
