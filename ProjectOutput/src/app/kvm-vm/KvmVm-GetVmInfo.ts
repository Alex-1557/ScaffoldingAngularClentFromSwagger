import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmVmService } from "./KvmVm-service"
import { GetVmInfo_Get } from './KvmVm-input'

@Component({
  selector: 'app-KvmVmGetVmInfo',
  templateUrl: 'KvmVm-GetVmInfo-form.html',
  styleUrls: ['./kvm-vm.component.css']
})

export class KvmVmGetVmInfoComponent
  extends BaseFormComponent implements OnInit {

  KvmVmGetVmInfoResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmVmService: KvmVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetVmInfo_VmI: new FormControl(),

    });
  }

  GetVmInfo_Submit() {
    var GetVmInfo_Request = <GetVmInfo_Get>{};
    GetVmInfo_Request.VmI = this.form.controls['GetVmInfo_VmI'].value;


    this.KvmVmService.GetVmInfo(GetVmInfo_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmVmGetVmInfoResult = result;
      }, error => {
        console.log(error);
      });
  }
}