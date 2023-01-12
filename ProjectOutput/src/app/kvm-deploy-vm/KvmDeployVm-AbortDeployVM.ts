import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDeployVmService } from "./KvmDeployVm-service"
import { AbortDeployVM_Get } from './KvmDeployVm-input'

@Component({
  selector: 'app-KvmDeployVmAbortDeployVM',
  templateUrl: 'KvmDeployVm-AbortDeployVM-form.html',
  styleUrls: ['./kvm-deploy-vm.component.css']
})

export class KvmDeployVmAbortDeployVMComponent
  extends BaseFormComponent implements OnInit {

  KvmDeployVmAbortDeployVMResult?: any;

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

  AbortDeployVM_Submit() {
    var AbortDeployVM_Request = <AbortDeployVM_Get>{};


    this.KvmDeployVmService.AbortDeployVM(AbortDeployVM_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDeployVmAbortDeployVMResult = result;
      }, error => {
        console.log(error);
      });
  }
}