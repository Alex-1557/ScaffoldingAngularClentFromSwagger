import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDeployVmService } from "./KvmDeployVm-service"
import { SelectPartitionToDeploy1_Post } from './KvmDeployVm-input'

@Component({
  selector: 'app-KvmDeployVmSelectPartitionToDeploy1',
  templateUrl: 'KvmDeployVm-SelectPartitionToDeploy1-form.html',
  styleUrls: ['./kvm-deploy-vm.component.css']
})

export class KvmDeployVmSelectPartitionToDeploy1Component
  extends BaseFormComponent implements OnInit {

  KvmDeployVmSelectPartitionToDeploy1Result?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDeployVmService: KvmDeployVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      SelectPartitionToDeploy1_serverI: new FormControl(),
      SelectPartitionToDeploy1_serverDecryptPass: new FormControl(),
      SelectPartitionToDeploy1_toCoin: new FormControl(),

    });
  }

  SelectPartitionToDeploy1_Submit() {
    var SelectPartitionToDeploy1_Request = <SelectPartitionToDeploy1_Post>{};
    SelectPartitionToDeploy1_Request.serverI = this.form.controls['SelectPartitionToDeploy1_serverI'].value;
    SelectPartitionToDeploy1_Request.serverDecryptPass = this.form.controls['SelectPartitionToDeploy1_serverDecryptPass'].value;
    SelectPartitionToDeploy1_Request.toCoin = this.form.controls['SelectPartitionToDeploy1_toCoin'].value;


    this.KvmDeployVmService.SelectPartitionToDeploy1(SelectPartitionToDeploy1_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDeployVmSelectPartitionToDeploy1Result = result;
      }, error => {
        console.log(error);
      });
  }
}