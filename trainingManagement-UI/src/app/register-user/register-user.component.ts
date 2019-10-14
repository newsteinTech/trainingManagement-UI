import { Component, OnInit } from '@angular/core';
import { RegisterUser } from '../register-user';
import { SignUpService } from '../sign-up.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private _signUpService : SignUpService) { }

  ngOnInit() {
  }

  userModel = new RegisterUser('Robert Brownie', 'password', 1234567890, 'abc@TestBed.com', '1234 main st', 
  'appartment, studio or floor', 'Bangalore', 'Karnataka', 560043, true, "12/08/1996", "5/09/2011", "admin" )

  onSubmit(){
    this._signUpService.signUp(this.userModel)
      .subscribe(
        data => console.log("success!!", data),
        error => console.log("Error!", error)
      )
  } 
}
