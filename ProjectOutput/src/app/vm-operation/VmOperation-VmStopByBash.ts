import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VmOperationService } from "./VmOperation-service"
import { VmStopByBash_Post } from './VmOperation-input'

@Component({
  selector: 'app-VmOperationVmStopByBash',
  templateUrl: 'VmOperation-VmStopByBash-form.html',
  styleUrls: ['./vm-operation.component.css']
})

export class VmOperationVmStopByBashComponent
  extends BaseFormComponent implements OnInit {

  VmOperationVmStopByBashResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private VmOperationService: VmOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      VmStopByBash_vmConnectionAdminDecryptPass: new FormControl(),
      VmStopByBash_vmName: new FormControl(),

    });
  }

  VmStopByBash_Submit() {
    var VmStopByBash_Request = <VmStopByBash_Post>{};
    VmStopByBash_Request.vmConnectionAdminDecryptPass = this.form.controls['VmStopByBash_vmConnectionAdminDecryptPass'].value;
    VmStopByBash_Request.vmName = this.form.controls['VmStopByBash_vmName'].value;


    this.VmOperationService.VmStopByBash(VmStopByBash_Request)
      .subscribe(result => {
        console.log(result);
        this.VmOperationVmStopByBashResult = result;
      }, error => {
        console.log(error);
      });
  }
}