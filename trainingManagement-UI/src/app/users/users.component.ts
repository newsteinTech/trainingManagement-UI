import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users=[]
  constructor(private _user: UserService, private _route: Router) { }

  ngOnInit() {
    this._user.User()
    .subscribe(
      res => this.users= res,
      err => {
        if(err instanceof HttpErrorResponse){
          this._route.navigate(['/logIn'])
        }
      })
  }

}
