import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmInfoService } from "./KvmInfo-service"
import { GetKvmVlan_Get } from './KvmInfo-input'

@Component({
  selector: 'app-KvmInfoGetKvmVlan',
  templateUrl: 'KvmInfo-GetKvmVlan-form.html',
  styleUrls: ['./kvm-info.component.css']
})

export class KvmInfoGetKvmVlanComponent
  extends BaseFormComponent implements OnInit {

  KvmInfoGetKvmVlanResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmInfoService: KvmInfoService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetKvmVlan_ServerI: new FormControl(),

    });
  }

  GetKvmVlan_Submit() {
    var GetKvmVlan_Request = <GetKvmVlan_Get>{};
    GetKvmVlan_Request.ServerI = this.form.controls['GetKvmVlan_ServerI'].value;


    this.KvmInfoService.GetKvmVlan(GetKvmVlan_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmInfoGetKvmVlanResult = result;
      }, error => {
        console.log(error);
      });
  }
}