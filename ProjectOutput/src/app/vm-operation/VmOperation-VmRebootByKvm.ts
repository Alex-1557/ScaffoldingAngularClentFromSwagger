import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VmOperationService } from "./VmOperation-service"
import { VmRebootByKvm_Post } from './VmOperation-input'

@Component({
  selector: 'app-VmOperationVmRebootByKvm',
  templateUrl: 'VmOperation-VmRebootByKvm-form.html',
  styleUrls: ['./vm-operation.component.css']
})

export class VmOperationVmRebootByKvmComponent
  extends BaseFormComponent implements OnInit {

  VmOperationVmRebootByKvmResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private VmOperationService: VmOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      VmRebootByKvm_serverI: new FormControl(),
      VmRebootByKvm_serverDecryptPass: new FormControl(),
      VmRebootByKvm_vmName: new FormControl(),

    });
  }

  VmRebootByKvm_Submit() {
    var VmRebootByKvm_Request = <VmRebootByKvm_Post>{};
    VmRebootByKvm_Request.serverI = this.form.controls['VmRebootByKvm_serverI'].value;
    VmRebootByKvm_Request.serverDecryptPass = this.form.controls['VmRebootByKvm_serverDecryptPass'].value;
    VmRebootByKvm_Request.vmName = this.form.controls['VmRebootByKvm_vmName'].value;


    this.VmOperationService.VmRebootByKvm(VmRebootByKvm_Request)
      .subscribe(result => {
        console.log(result);
        this.VmOperationVmRebootByKvmResult = result;
      }, error => {
        console.log(error);
      });
  }
}