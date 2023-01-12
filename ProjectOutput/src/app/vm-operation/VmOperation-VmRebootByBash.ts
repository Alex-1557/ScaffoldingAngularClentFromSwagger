import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VmOperationService } from "./VmOperation-service"
import { VmRebootByBash_Post } from './VmOperation-input'

@Component({
  selector: 'app-VmOperationVmRebootByBash',
  templateUrl: 'VmOperation-VmRebootByBash-form.html',
  styleUrls: ['./vm-operation.component.css']
})

export class VmOperationVmRebootByBashComponent
  extends BaseFormComponent implements OnInit {

  VmOperationVmRebootByBashResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private VmOperationService: VmOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      VmRebootByBash_vmConnectionAdminDecryptPass: new FormControl(),
      VmRebootByBash_vmName: new FormControl(),

    });
  }

  VmRebootByBash_Submit() {
    var VmRebootByBash_Request = <VmRebootByBash_Post>{};
    VmRebootByBash_Request.vmConnectionAdminDecryptPass = this.form.controls['VmRebootByBash_vmConnectionAdminDecryptPass'].value;
    VmRebootByBash_Request.vmName = this.form.controls['VmRebootByBash_vmName'].value;


    this.VmOperationService.VmRebootByBash(VmRebootByBash_Request)
      .subscribe(result => {
        console.log(result);
        this.VmOperationVmRebootByBashResult = result;
      }, error => {
        console.log(error);
      });
  }
}