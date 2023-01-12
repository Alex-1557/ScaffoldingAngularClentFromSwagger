import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmInfoService } from "./KvmInfo-service"
import { GetVlanSwitch_Get } from './KvmInfo-input'

@Component({
  selector: 'app-KvmInfoGetVlanSwitch',
  templateUrl: 'KvmInfo-GetVlanSwitch-form.html',
  styleUrls: ['./kvm-info.component.css']
})

export class KvmInfoGetVlanSwitchComponent
  extends BaseFormComponent implements OnInit {

  KvmInfoGetVlanSwitchResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmInfoService: KvmInfoService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetVlanSwitch_IP: new FormControl(),

    });
  }

  GetVlanSwitch_Submit() {
    var GetVlanSwitch_Request = <GetVlanSwitch_Get>{};
    GetVlanSwitch_Request.IP = this.form.controls['GetVlanSwitch_IP'].value;


    this.KvmInfoService.GetVlanSwitch(GetVlanSwitch_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmInfoGetVlanSwitchResult = result;
      }, error => {
        console.log(error);
      });
  }
}