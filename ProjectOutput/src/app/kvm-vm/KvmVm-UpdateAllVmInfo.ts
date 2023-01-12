import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmVmService } from "./KvmVm-service"
import { UpdateAllVmInfo_Post } from './KvmVm-input'

@Component({
  selector: 'app-KvmVmUpdateAllVmInfo',
  templateUrl: 'KvmVm-UpdateAllVmInfo-form.html',
  styleUrls: ['./kvm-vm.component.css']
})

export class KvmVmUpdateAllVmInfoComponent
  extends BaseFormComponent implements OnInit {

  KvmVmUpdateAllVmInfoResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmVmService: KvmVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      UpdateAllVmInfo_serverI: new FormControl(),
      UpdateAllVmInfo_serverDecryptPass: new FormControl(),
      UpdateAllVmInfo_vmConnectionAdminDecryptPass: new FormControl(),

    });
  }

  UpdateAllVmInfo_Submit() {
    var UpdateAllVmInfo_Request = <UpdateAllVmInfo_Post>{};
    UpdateAllVmInfo_Request.serverI = this.form.controls['UpdateAllVmInfo_serverI'].value;
    UpdateAllVmInfo_Request.serverDecryptPass = this.form.controls['UpdateAllVmInfo_serverDecryptPass'].value;
    UpdateAllVmInfo_Request.vmConnectionAdminDecryptPass = this.form.controls['UpdateAllVmInfo_vmConnectionAdminDecryptPass'].value;


    this.KvmVmService.UpdateAllVmInfo(UpdateAllVmInfo_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmVmUpdateAllVmInfoResult = result;
      }, error => {
        console.log(error);
      });
  }
}