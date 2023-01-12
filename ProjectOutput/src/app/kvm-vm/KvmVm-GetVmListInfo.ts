import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmVmService } from "./KvmVm-service"
import { GetVmListInfo_Get } from './KvmVm-input'

@Component({
  selector: 'app-KvmVmGetVmListInfo',
  templateUrl: 'KvmVm-GetVmListInfo-form.html',
  styleUrls: ['./kvm-vm.component.css']
})

export class KvmVmGetVmListInfoComponent
  extends BaseFormComponent implements OnInit {

  KvmVmGetVmListInfoResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmVmService: KvmVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetVmListInfo_ServerI: new FormControl(),

    });
  }

  GetVmListInfo_Submit() {
    var GetVmListInfo_Request = <GetVmListInfo_Get>{};
    GetVmListInfo_Request.ServerI = this.form.controls['GetVmListInfo_ServerI'].value;


    this.KvmVmService.GetVmListInfo(GetVmListInfo_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmVmGetVmListInfoResult = result;
      }, error => {
        console.log(error);
      });
  }
}