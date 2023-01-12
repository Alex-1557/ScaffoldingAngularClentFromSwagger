import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmIpService } from "./KvmIp-service"
import { GetRuntimeBridgePorts_Post } from './KvmIp-input'

@Component({
  selector: 'app-KvmIpGetRuntimeBridgePorts',
  templateUrl: 'KvmIp-GetRuntimeBridgePorts-form.html',
  styleUrls: ['./kvm-ip.component.css']
})

export class KvmIpGetRuntimeBridgePortsComponent
  extends BaseFormComponent implements OnInit {

  KvmIpGetRuntimeBridgePortsResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmIpService: KvmIpService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetRuntimeBridgePorts_serverI: new FormControl(),
      GetRuntimeBridgePorts_serverDecryptPass: new FormControl(),
      GetRuntimeBridgePorts_bridgeName: new FormControl(),

    });
  }

  GetRuntimeBridgePorts_Submit() {
    var GetRuntimeBridgePorts_Request = <GetRuntimeBridgePorts_Post>{};
    GetRuntimeBridgePorts_Request.serverI = this.form.controls['GetRuntimeBridgePorts_serverI'].value;
    GetRuntimeBridgePorts_Request.serverDecryptPass = this.form.controls['GetRuntimeBridgePorts_serverDecryptPass'].value;
    GetRuntimeBridgePorts_Request.bridgeName = this.form.controls['GetRuntimeBridgePorts_bridgeName'].value;


    this.KvmIpService.GetRuntimeBridgePorts(GetRuntimeBridgePorts_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmIpGetRuntimeBridgePortsResult = result;
      }, error => {
        console.log(error);
      });
  }
}