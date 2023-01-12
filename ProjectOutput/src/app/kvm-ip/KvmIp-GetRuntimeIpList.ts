import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmIpService } from "./KvmIp-service"
import { GetRuntimeIpList_Post } from './KvmIp-input'

@Component({
  selector: 'app-KvmIpGetRuntimeIpList',
  templateUrl: 'KvmIp-GetRuntimeIpList-form.html',
  styleUrls: ['./kvm-ip.component.css']
})

export class KvmIpGetRuntimeIpListComponent
  extends BaseFormComponent implements OnInit {

  KvmIpGetRuntimeIpListResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmIpService: KvmIpService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetRuntimeIpList_serverI: new FormControl(),
      GetRuntimeIpList_serverDecryptPass: new FormControl(),

    });
  }

  GetRuntimeIpList_Submit() {
    var GetRuntimeIpList_Request = <GetRuntimeIpList_Post>{};
    GetRuntimeIpList_Request.serverI = this.form.controls['GetRuntimeIpList_serverI'].value;
    GetRuntimeIpList_Request.serverDecryptPass = this.form.controls['GetRuntimeIpList_serverDecryptPass'].value;


    this.KvmIpService.GetRuntimeIpList(GetRuntimeIpList_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmIpGetRuntimeIpListResult = result;
      }, error => {
        console.log(error);
      });
  }
}