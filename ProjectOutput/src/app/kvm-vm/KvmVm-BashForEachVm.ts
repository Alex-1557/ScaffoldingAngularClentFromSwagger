import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmVmService } from "./KvmVm-service"
import { BashForEachVm_Post } from './KvmVm-input'

@Component({
  selector: 'app-KvmVmBashForEachVm',
  templateUrl: 'KvmVm-BashForEachVm-form.html',
  styleUrls: ['./kvm-vm.component.css']
})

export class KvmVmBashForEachVmComponent
  extends BaseFormComponent implements OnInit {

  KvmVmBashForEachVmResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmVmService: KvmVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      BashForEachVm_serverI: new FormControl(),
      BashForEachVm_serverDecryptPass: new FormControl(),
      BashForEachVm_vmConnectionAdminDecryptPass: new FormControl(),
      BashForEachVm_bashCmd: new FormControl(),
      BashForEachVm_useAdminLogin: new FormControl(),
      BashForEachVm_addSudo: new FormControl(),

    });
  }

  BashForEachVm_Submit() {
    var BashForEachVm_Request = <BashForEachVm_Post>{};
    BashForEachVm_Request.serverI = this.form.controls['BashForEachVm_serverI'].value;
    BashForEachVm_Request.serverDecryptPass = this.form.controls['BashForEachVm_serverDecryptPass'].value;
    BashForEachVm_Request.vmConnectionAdminDecryptPass = this.form.controls['BashForEachVm_vmConnectionAdminDecryptPass'].value;
    BashForEachVm_Request.bashCmd = this.form.controls['BashForEachVm_bashCmd'].value;
    BashForEachVm_Request.useAdminLogin = this.form.controls['BashForEachVm_useAdminLogin'].value;
    BashForEachVm_Request.addSudo = this.form.controls['BashForEachVm_addSudo'].value;


    this.KvmVmService.BashForEachVm(BashForEachVm_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmVmBashForEachVmResult = result;
      }, error => {
        console.log(error);
      });
  }
}