import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmIpService } from "./KvmIp-service"
import { GetRuntimeRoute_Post } from './KvmIp-input'

@Component({
  selector: 'app-KvmIpGetRuntimeRoute',
  templateUrl: 'KvmIp-GetRuntimeRoute-form.html',
  styleUrls: ['./kvm-ip.component.css']
})

export class KvmIpGetRuntimeRouteComponent
  extends BaseFormComponent implements OnInit {

  KvmIpGetRuntimeRouteResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmIpService: KvmIpService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetRuntimeRoute_serverI: new FormControl(),
      GetRuntimeRoute_serverDecryptPass: new FormControl(),

    });
  }

  GetRuntimeRoute_Submit() {
    var GetRuntimeRoute_Request = <GetRuntimeRoute_Post>{};
    GetRuntimeRoute_Request.serverI = this.form.controls['GetRuntimeRoute_serverI'].value;
    GetRuntimeRoute_Request.serverDecryptPass = this.form.controls['GetRuntimeRoute_serverDecryptPass'].value;


    this.KvmIpService.GetRuntimeRoute(GetRuntimeRoute_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmIpGetRuntimeRouteResult = result;
      }, error => {
        console.log(error);
      });
  }
}