import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData ={}
  constructor(private _loginService: LoginService, private _route: Router) { }

  ngOnInit() {
  }
  login(){
    this._loginService.loginUser(this.loginUserData)
    .subscribe(res => {localStorage.setItem("Token", res.token); this._route.navigate(['/getUsers'])},
      err => console.log(err)
    )
  }
}
