import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VmOperationService } from "./VmOperation-service"
import { VmStopByKvm_Post } from './VmOperation-input'

@Component({
  selector: 'app-VmOperationVmStopByKvm',
  templateUrl: 'VmOperation-VmStopByKvm-form.html',
  styleUrls: ['./vm-operation.component.css']
})

export class VmOperationVmStopByKvmComponent
  extends BaseFormComponent implements OnInit {

  VmOperationVmStopByKvmResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private VmOperationService: VmOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      VmStopByKvm_serverI: new FormControl(),
      VmStopByKvm_serverDecryptPass: new FormControl(),
      VmStopByKvm_vmName: new FormControl(),

    });
  }

  VmStopByKvm_Submit() {
    var VmStopByKvm_Request = <VmStopByKvm_Post>{};
    VmStopByKvm_Request.serverI = this.form.controls['VmStopByKvm_serverI'].value;
    VmStopByKvm_Request.serverDecryptPass = this.form.controls['VmStopByKvm_serverDecryptPass'].value;
    VmStopByKvm_Request.vmName = this.form.controls['VmStopByKvm_vmName'].value;


    this.VmOperationService.VmStopByKvm(VmStopByKvm_Request)
      .subscribe(result => {
        console.log(result);
        this.VmOperationVmStopByKvmResult = result;
      }, error => {
        console.log(error);
      });
  }
}