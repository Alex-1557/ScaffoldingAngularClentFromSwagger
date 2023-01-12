import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDeployVmService } from "./KvmDeployVm-service"
import { DeployVM_Post } from './KvmDeployVm-input'

@Component({
  selector: 'app-KvmDeployVmDeployVM',
  templateUrl: 'KvmDeployVm-DeployVM-form.html',
  styleUrls: ['./kvm-deploy-vm.component.css']
})

export class KvmDeployVmDeployVMComponent
  extends BaseFormComponent implements OnInit {

  KvmDeployVmDeployVMResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDeployVmService: KvmDeployVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      DeployVM_toCoin: new FormControl(),
      DeployVM_serverI: new FormControl(),
      DeployVM_serverDecryptPass: new FormControl(),

    });
  }

  DeployVM_Submit() {
    var DeployVM_Request = <DeployVM_Post>{};
    DeployVM_Request.toCoin = this.form.controls['DeployVM_toCoin'].value;
    DeployVM_Request.serverI = this.form.controls['DeployVM_serverI'].value;
    DeployVM_Request.serverDecryptPass = this.form.controls['DeployVM_serverDecryptPass'].value;


    this.KvmDeployVmService.DeployVM(DeployVM_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDeployVmDeployVMResult = result;
      }, error => {
        console.log(error);
      });
  }
}