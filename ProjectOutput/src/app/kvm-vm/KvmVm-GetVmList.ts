import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmVmService } from "./KvmVm-service"
import { GetVmList_Get } from './KvmVm-input'

@Component({
  selector: 'app-KvmVmGetVmList',
  templateUrl: 'KvmVm-GetVmList-form.html',
  styleUrls: ['./kvm-vm.component.css']
})

export class KvmVmGetVmListComponent
  extends BaseFormComponent implements OnInit {

  KvmVmGetVmListResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmVmService: KvmVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetVmList_ServerI: new FormControl(),

    });
  }

  GetVmList_Submit() {
    var GetVmList_Request = <GetVmList_Get>{};
    GetVmList_Request.ServerI = this.form.controls['GetVmList_ServerI'].value;


    this.KvmVmService.GetVmList(GetVmList_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmVmGetVmListResult = result;
      }, error => {
        console.log(error);
      });
  }
}