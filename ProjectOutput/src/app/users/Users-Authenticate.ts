import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from "./Users-service"
import { Authenticate_Post } from './Users-input'

@Component({
  selector: 'app-UsersAuthenticate',
  templateUrl: 'Users-Authenticate-form.html',
  styleUrls: ['./users.component.css']
})

export class UsersAuthenticateComponent
  extends BaseFormComponent implements OnInit {

  UsersAuthenticateResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private UsersService: UsersService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      Authenticate_username: new FormControl(),
      Authenticate_password: new FormControl(),

    });
  }

  Authenticate_Submit() {
    var Authenticate_Request = <Authenticate_Post>{};
    Authenticate_Request.username = this.form.controls['Authenticate_username'].value;
    Authenticate_Request.password = this.form.controls['Authenticate_password'].value;


    this.UsersService.Authenticate(Authenticate_Request)
      .subscribe(result => {
        console.log(result);
        this.UsersAuthenticateResult = result;
      }, error => {
        console.log(error);
      });
  }
}