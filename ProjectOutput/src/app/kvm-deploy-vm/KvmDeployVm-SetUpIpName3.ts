import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDeployVmService } from "./KvmDeployVm-service"
import { SetUpIpName3_Post } from './KvmDeployVm-input'

@Component({
  selector: 'app-KvmDeployVmSetUpIpName3',
  templateUrl: 'KvmDeployVm-SetUpIpName3-form.html',
  styleUrls: ['./kvm-deploy-vm.component.css']
})

export class KvmDeployVmSetUpIpName3Component
  extends BaseFormComponent implements OnInit {

  KvmDeployVmSetUpIpName3Result?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDeployVmService: KvmDeployVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      SetUpIpName3_serverI: new FormControl(),
      SetUpIpName3_serverDecryptPass: new FormControl(),
      SetUpIpName3_kvmDevice: new FormControl(),
      SetUpIpName3_userName: new FormControl(),
      SetUpIpName3_password: new FormControl(),
      SetUpIpName3_ipConfigJsonParameters: new FormControl(),

    });
  }

  SetUpIpName3_Submit() {
    var SetUpIpName3_Request = <SetUpIpName3_Post>{};
    SetUpIpName3_Request.serverI = this.form.controls['SetUpIpName3_serverI'].value;
    SetUpIpName3_Request.serverDecryptPass = this.form.controls['SetUpIpName3_serverDecryptPass'].value;
    SetUpIpName3_Request.kvmDevice = this.form.controls['SetUpIpName3_kvmDevice'].value;
    SetUpIpName3_Request.userName = this.form.controls['SetUpIpName3_userName'].value;
    SetUpIpName3_Request.password = this.form.controls['SetUpIpName3_password'].value;
    SetUpIpName3_Request.ipConfigJsonParameters = this.form.controls['SetUpIpName3_ipConfigJsonParameters'].value;


    this.KvmDeployVmService.SetUpIpName3(SetUpIpName3_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDeployVmSetUpIpName3Result = result;
      }, error => {
        console.log(error);
      });
  }
}