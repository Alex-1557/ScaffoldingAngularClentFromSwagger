import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmVmService } from "./KvmVm-service"
import { GetVmListRuntime_Get } from './KvmVm-input'

@Component({
  selector: 'app-KvmVmGetVmListRuntime',
  templateUrl: 'KvmVm-GetVmListRuntime-form.html',
  styleUrls: ['./kvm-vm.component.css']
})

export class KvmVmGetVmListRuntimeComponent
  extends BaseFormComponent implements OnInit {

  KvmVmGetVmListRuntimeResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmVmService: KvmVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetVmListRuntime_ServerI: new FormControl(),
      GetVmListRuntime_ServerDecryptPass: new FormControl(),

    });
  }

  GetVmListRuntime_Submit() {
    var GetVmListRuntime_Request = <GetVmListRuntime_Get>{};
    GetVmListRuntime_Request.ServerI = this.form.controls['GetVmListRuntime_ServerI'].value;
    GetVmListRuntime_Request.ServerDecryptPass = this.form.controls['GetVmListRuntime_ServerDecryptPass'].value;


    this.KvmVmService.GetVmListRuntime(GetVmListRuntime_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmVmGetVmListRuntimeResult = result;
      }, error => {
        console.log(error);
      });
  }
}