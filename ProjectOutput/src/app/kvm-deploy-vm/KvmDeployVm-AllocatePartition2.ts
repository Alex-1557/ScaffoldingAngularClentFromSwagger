import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDeployVmService } from "./KvmDeployVm-service"
import { AllocatePartition2_Post } from './KvmDeployVm-input'

@Component({
  selector: 'app-KvmDeployVmAllocatePartition2',
  templateUrl: 'KvmDeployVm-AllocatePartition2-form.html',
  styleUrls: ['./kvm-deploy-vm.component.css']
})

export class KvmDeployVmAllocatePartition2Component
  extends BaseFormComponent implements OnInit {

  KvmDeployVmAllocatePartition2Result?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDeployVmService: KvmDeployVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      AllocatePartition2_freePart: new FormControl(),
      AllocatePartition2_serverI: new FormControl(),
      AllocatePartition2_serverDecryptPass: new FormControl(),
      AllocatePartition2_toCoin: new FormControl(),

    });
  }

  AllocatePartition2_Submit() {
    var AllocatePartition2_Request = <AllocatePartition2_Post>{};
    AllocatePartition2_Request.freePart = this.form.controls['AllocatePartition2_freePart'].value;
    AllocatePartition2_Request.serverI = this.form.controls['AllocatePartition2_serverI'].value;
    AllocatePartition2_Request.serverDecryptPass = this.form.controls['AllocatePartition2_serverDecryptPass'].value;
    AllocatePartition2_Request.toCoin = this.form.controls['AllocatePartition2_toCoin'].value;


    this.KvmDeployVmService.AllocatePartition2(AllocatePartition2_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDeployVmAllocatePartition2Result = result;
      }, error => {
        console.log(error);
      });
  }
}