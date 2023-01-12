import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AesService } from "./Aes-service"
import { GetRandomName_Get } from './Aes-input'

@Component({
  selector: 'app-AesGetRandomName',
  templateUrl: 'Aes-GetRandomName-form.html',
  styleUrls: ['./aes.component.css']
})

export class AesGetRandomNameComponent
  extends BaseFormComponent implements OnInit {

  AesGetRandomNameResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private AesService: AesService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetRandomName_Len: new FormControl(),

    });
  }

  GetRandomName_Submit() {
    var GetRandomName_Request = <GetRandomName_Get>{};
    GetRandomName_Request.Len = this.form.controls['GetRandomName_Len'].value;


    this.AesService.GetRandomName(GetRandomName_Request)
      .subscribe(result => {
        console.log(result);
        this.AesGetRandomNameResult = result;
      }, error => {
        console.log(error);
      });
  }
}