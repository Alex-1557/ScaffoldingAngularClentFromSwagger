import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDeployVmService } from "./KvmDeployVm-service"
import { GetCurrentDeploymentState_Get } from './KvmDeployVm-input'

@Component({
  selector: 'app-KvmDeployVmGetCurrentDeploymentState',
  templateUrl: 'KvmDeployVm-GetCurrentDeploymentState-form.html',
  styleUrls: ['./kvm-deploy-vm.component.css']
})

export class KvmDeployVmGetCurrentDeploymentStateComponent
  extends BaseFormComponent implements OnInit {

  KvmDeployVmGetCurrentDeploymentStateResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDeployVmService: KvmDeployVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({

    });
  }

  GetCurrentDeploymentState_Submit() {
    var GetCurrentDeploymentState_Request = <GetCurrentDeploymentState_Get>{};
    

    this.KvmDeployVmService.GetCurrentDeploymentState(GetCurrentDeploymentState_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDeployVmGetCurrentDeploymentStateResult = result;
      }, error => {
        console.log(error);
      });
  }
}