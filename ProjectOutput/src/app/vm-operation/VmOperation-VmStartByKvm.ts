import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VmOperationService } from "./VmOperation-service"
import { VmStartByKvm_Post } from './VmOperation-input'

@Component({
  selector: 'app-VmOperationVmStartByKvm',
  templateUrl: 'VmOperation-VmStartByKvm-form.html',
  styleUrls: ['./vm-operation.component.css']
})

export class VmOperationVmStartByKvmComponent
  extends BaseFormComponent implements OnInit {

  VmOperationVmStartByKvmResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private VmOperationService: VmOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      VmStartByKvm_serverI: new FormControl(),
      VmStartByKvm_serverDecryptPass: new FormControl(),
      VmStartByKvm_vmName: new FormControl(),

    });
  }

  VmStartByKvm_Submit() {
    var VmStartByKvm_Request = <VmStartByKvm_Post>{};
    VmStartByKvm_Request.serverI = this.form.controls['VmStartByKvm_serverI'].value;
    VmStartByKvm_Request.serverDecryptPass = this.form.controls['VmStartByKvm_serverDecryptPass'].value;
    VmStartByKvm_Request.vmName = this.form.controls['VmStartByKvm_vmName'].value;


    this.VmOperationService.VmStartByKvm(VmStartByKvm_Request)
      .subscribe(result => {
        console.log(result);
        this.VmOperationVmStartByKvmResult = result;
      }, error => {
        console.log(error);
      });
  }
}