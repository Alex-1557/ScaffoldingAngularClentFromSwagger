import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from "./Users-service"
import { GetAll_Get } from './Users-input'

@Component({
  selector: 'app-UsersGetAll',
  templateUrl: 'Users-GetAll-form.html',
  styleUrls: ['./users.component.css']
})

export class UsersGetAllComponent
  extends BaseFormComponent implements OnInit {

  UsersGetAllResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private UsersService: UsersService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({

    });
  }

  GetAll_Submit() {
    var GetAll_Request = <GetAll_Get>{};

    this.UsersService.GetAll(GetAll_Request)
      .subscribe(result => {
        console.log(result);
        this.UsersGetAllResult = result;
      }, error => {
        console.log(error);
      });
  }
}