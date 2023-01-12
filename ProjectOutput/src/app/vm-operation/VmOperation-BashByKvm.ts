import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VmOperationService } from "./VmOperation-service"
import { BashByKvm_Post } from './VmOperation-input'

@Component({
  selector: 'app-VmOperationBashByKvm',
  templateUrl: 'VmOperation-BashByKvm-form.html',
  styleUrls: ['./vm-operation.component.css']
})

export class VmOperationBashByKvmComponent
  extends BaseFormComponent implements OnInit {

  VmOperationBashByKvmResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private VmOperationService: VmOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      BashByKvm_vmName: new FormControl(),
      BashByKvm_vmConnectionAdminDecryptPass: new FormControl(),
      BashByKvm_bashCmd: new FormControl(),
      BashByKvm_addSudo: new FormControl(),
      BashByKvm_useAdminLogin: new FormControl(),

    });
  }

  BashByKvm_Submit() {
    var BashByKvm_Request = <BashByKvm_Post>{};
    BashByKvm_Request.vmName = this.form.controls['BashByKvm_vmName'].value;
    BashByKvm_Request.vmConnectionAdminDecryptPass = this.form.controls['BashByKvm_vmConnectionAdminDecryptPass'].value;
    BashByKvm_Request.bashCmd = this.form.controls['BashByKvm_bashCmd'].value;
    BashByKvm_Request.addSudo = this.form.controls['BashByKvm_addSudo'].value;
    BashByKvm_Request.useAdminLogin = this.form.controls['BashByKvm_useAdminLogin'].value;


    this.VmOperationService.BashByKvm(BashByKvm_Request)
      .subscribe(result => {
        console.log(result);
        this.VmOperationBashByKvmResult = result;
      }, error => {
        console.log(error);
      });
  }
}