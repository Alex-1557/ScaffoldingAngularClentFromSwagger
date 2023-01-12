import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmInfoService } from "./KvmInfo-service"
import { GetServerStorageDevice_Get } from './KvmInfo-input'

@Component({
  selector: 'app-KvmInfoGetServerStorageDevice',
  templateUrl: 'KvmInfo-GetServerStorageDevice-form.html',
  styleUrls: ['./kvm-info.component.css']
})

export class KvmInfoGetServerStorageDeviceComponent
  extends BaseFormComponent implements OnInit {

  KvmInfoGetServerStorageDeviceResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmInfoService: KvmInfoService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetServerStorageDevice_ServerI: new FormControl(),

    });
  }

  GetServerStorageDevice_Submit() {
    var GetServerStorageDevice_Request = <GetServerStorageDevice_Get>{};
    GetServerStorageDevice_Request.ServerI = this.form.controls['GetServerStorageDevice_ServerI'].value;


    this.KvmInfoService.GetServerStorageDevice(GetServerStorageDevice_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmInfoGetServerStorageDeviceResult = result;
      }, error => {
        console.log(error);
      });
  }
}