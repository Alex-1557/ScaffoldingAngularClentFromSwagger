import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmVmService } from "./KvmVm-service"
import { UpdateVmInfo_Post } from './KvmVm-input'

@Component({
  selector: 'app-KvmVmUpdateVmInfo',
  templateUrl: 'KvmVm-UpdateVmInfo-form.html',
  styleUrls: ['./kvm-vm.component.css']
})

export class KvmVmUpdateVmInfoComponent
  extends BaseFormComponent implements OnInit {

  KvmVmUpdateVmInfoResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmVmService: KvmVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      UpdateVmInfo_serverI: new FormControl(),
      UpdateVmInfo_serverDecryptPass: new FormControl(),
      UpdateVmInfo_vmI: new FormControl(),
      UpdateVmInfo_vmConnectionAdminDecryptPass: new FormControl(),

    });
  }

  UpdateVmInfo_Submit() {
    var UpdateVmInfo_Request = <UpdateVmInfo_Post>{};
    UpdateVmInfo_Request.serverI = this.form.controls['UpdateVmInfo_serverI'].value;
    UpdateVmInfo_Request.serverDecryptPass = this.form.controls['UpdateVmInfo_serverDecryptPass'].value;
    UpdateVmInfo_Request.vmI = this.form.controls['UpdateVmInfo_vmI'].value;
    UpdateVmInfo_Request.vmConnectionAdminDecryptPass = this.form.controls['UpdateVmInfo_vmConnectionAdminDecryptPass'].value;


    this.KvmVmService.UpdateVmInfo(UpdateVmInfo_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmVmUpdateVmInfoResult = result;
      }, error => {
        console.log(error);
      });
  }
}