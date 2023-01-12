import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDeployVmService } from "./KvmDeployVm-service"
import { SetUpMasternode4_Post } from './KvmDeployVm-input'

@Component({
  selector: 'app-KvmDeployVmSetUpMasternode4',
  templateUrl: 'KvmDeployVm-SetUpMasternode4-form.html',
  styleUrls: ['./kvm-deploy-vm.component.css']
})

export class KvmDeployVmSetUpMasternode4Component
  extends BaseFormComponent implements OnInit {

  KvmDeployVmSetUpMasternode4Result?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDeployVmService: KvmDeployVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      SetUpMasternode4_serverI: new FormControl(),
      SetUpMasternode4_serverDecryptPass: new FormControl(),
      SetUpMasternode4_kvmDevice: new FormControl(),
      SetUpMasternode4_coinName: new FormControl(),
      SetUpMasternode4_configPath: new FormControl(),
      SetUpMasternode4_statusCommand: new FormControl(),
      SetUpMasternode4_config: new FormControl(),

    });
  }

  SetUpMasternode4_Submit() {
    var SetUpMasternode4_Request = <SetUpMasternode4_Post>{};
    SetUpMasternode4_Request.serverI = this.form.controls['SetUpMasternode4_serverI'].value;
    SetUpMasternode4_Request.serverDecryptPass = this.form.controls['SetUpMasternode4_serverDecryptPass'].value;
    SetUpMasternode4_Request.kvmDevice = this.form.controls['SetUpMasternode4_kvmDevice'].value;
    SetUpMasternode4_Request.coinName = this.form.controls['SetUpMasternode4_coinName'].value;
    SetUpMasternode4_Request.configPath = this.form.controls['SetUpMasternode4_configPath'].value;
    SetUpMasternode4_Request.statusCommand = this.form.controls['SetUpMasternode4_statusCommand'].value;
    SetUpMasternode4_Request.config = this.form.controls['SetUpMasternode4_config'].value;


    this.KvmDeployVmService.SetUpMasternode4(SetUpMasternode4_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDeployVmSetUpMasternode4Result = result;
      }, error => {
        console.log(error);
      });
  }
}