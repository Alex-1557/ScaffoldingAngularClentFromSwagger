import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AesService } from "./Aes-service"
import { GetRandomPassword_Get } from './Aes-input'

@Component({
  selector: 'app-AesGetRandomPassword',
  templateUrl: 'Aes-GetRandomPassword-form.html',
  styleUrls: ['./aes.component.css']
})

export class AesGetRandomPasswordComponent
  extends BaseFormComponent implements OnInit {

  AesGetRandomPasswordResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private AesService: AesService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetRandomPassword_Len: new FormControl(),

    });
  }

  GetRandomPassword_Submit() {
    var GetRandomPassword_Request = <GetRandomPassword_Get>{};
    GetRandomPassword_Request.Len = this.form.controls['GetRandomPassword_Len'].value;


    this.AesService.GetRandomPassword(GetRandomPassword_Request)
      .subscribe(result => {
        console.log(result);
        this.AesGetRandomPasswordResult = result;
      }, error => {
        console.log(error);
      });
  }
}