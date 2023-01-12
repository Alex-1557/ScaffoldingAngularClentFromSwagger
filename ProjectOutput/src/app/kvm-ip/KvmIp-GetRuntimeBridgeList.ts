import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmIpService } from "./KvmIp-service"
import { GetRuntimeBridgeList_Post } from './KvmIp-input'

@Component({
  selector: 'app-KvmIpGetRuntimeBridgeList',
  templateUrl: 'KvmIp-GetRuntimeBridgeList-form.html',
  styleUrls: ['./kvm-ip.component.css']
})

export class KvmIpGetRuntimeBridgeListComponent
  extends BaseFormComponent implements OnInit {

  KvmIpGetRuntimeBridgeListResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmIpService: KvmIpService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetRuntimeBridgeList_serverI: new FormControl(),
      GetRuntimeBridgeList_serverDecryptPass: new FormControl(),

    });
  }

  GetRuntimeBridgeList_Submit() {
    var GetRuntimeBridgeList_Request = <GetRuntimeBridgeList_Post>{};
    GetRuntimeBridgeList_Request.serverI = this.form.controls['GetRuntimeBridgeList_serverI'].value;
    GetRuntimeBridgeList_Request.serverDecryptPass = this.form.controls['GetRuntimeBridgeList_serverDecryptPass'].value;


    this.KvmIpService.GetRuntimeBridgeList(GetRuntimeBridgeList_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmIpGetRuntimeBridgeListResult = result;
      }, error => {
        console.log(error);
      });
  }
}