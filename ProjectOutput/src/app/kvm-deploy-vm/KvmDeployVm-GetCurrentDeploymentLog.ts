import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDeployVmService } from "./KvmDeployVm-service"
import { GetCurrentDeploymentLog_Get } from './KvmDeployVm-input'

@Component({
  selector: 'app-KvmDeployVmGetCurrentDeploymentLog',
  templateUrl: 'KvmDeployVm-GetCurrentDeploymentLog-form.html',
  styleUrls: ['./kvm-deploy-vm.component.css']
})

export class KvmDeployVmGetCurrentDeploymentLogComponent
  extends BaseFormComponent implements OnInit {

  KvmDeployVmGetCurrentDeploymentLogResult?: any;

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

GetCurrentDeploymentLog_Submit() {
  var GetCurrentDeploymentLog_Request = <GetCurrentDeploymentLog_Get>{};
 

  this.KvmDeployVmService.GetCurrentDeploymentLog(GetCurrentDeploymentLog_Request)
    .subscribe(result => {
      console.log(result);
      this.KvmDeployVmGetCurrentDeploymentLogResult = result;
    }, error => {
      console.log(error);
    });
}
}