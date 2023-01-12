import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmIpService } from "./KvmIp-service"
import { GetIpConfig_Post } from './KvmIp-input'

@Component({
  selector: 'app-KvmIpGetIpConfig',
  templateUrl: 'KvmIp-GetIpConfig-form.html',
  styleUrls: ['./kvm-ip.component.css']
})

export class KvmIpGetIpConfigComponent
  extends BaseFormComponent implements OnInit {

  KvmIpGetIpConfigResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmIpService: KvmIpService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetIpConfig_serverI: new FormControl(),
      GetIpConfig_serverDecryptPass: new FormControl(),
      GetIpConfig_configName: new FormControl(),

    });
  }

  GetIpConfig_Submit() {
    var GetIpConfig_Request = <GetIpConfig_Post>{};
    GetIpConfig_Request.serverI = this.form.controls['GetIpConfig_serverI'].value;
    GetIpConfig_Request.serverDecryptPass = this.form.controls['GetIpConfig_serverDecryptPass'].value;
    GetIpConfig_Request.configName = this.form.controls['GetIpConfig_configName'].value;


    this.KvmIpService.GetIpConfig(GetIpConfig_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmIpGetIpConfigResult = result;
      }, error => {
        console.log(error);
      });
  }
}