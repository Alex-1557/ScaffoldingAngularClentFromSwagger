import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmInfoService } from "./KvmInfo-service"
import { AccessInfo_Get } from './KvmInfo-input'

@Component({
  selector: 'app-KvmInfoAccessInfo',
  templateUrl: 'KvmInfo-AccessInfo-form.html',
  styleUrls: ['./kvm-info.component.css']
})

export class KvmInfoAccessInfoComponent
  extends BaseFormComponent implements OnInit {

  KvmInfoAccessInfoResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmInfoService: KvmInfoService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      AccessInfo_ServerI: new FormControl(),

    });
  }

  AccessInfo_Submit() {
    var AccessInfo_Request = <AccessInfo_Get>{};
    AccessInfo_Request.ServerI = this.form.controls['AccessInfo_ServerI'].value;


    this.KvmInfoService.AccessInfo(AccessInfo_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmInfoAccessInfoResult = result;
      }, error => {
        console.log(error);
      });
  }
}