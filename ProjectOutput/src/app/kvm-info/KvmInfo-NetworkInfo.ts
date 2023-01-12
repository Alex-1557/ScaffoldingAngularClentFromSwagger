import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmInfoService } from "./KvmInfo-service"
import { NetworkInfo_Get } from './KvmInfo-input'

@Component({
  selector: 'app-KvmInfoNetworkInfo',
  templateUrl: 'KvmInfo-NetworkInfo-form.html',
  styleUrls: ['./kvm-info.component.css']
})

export class KvmInfoNetworkInfoComponent
  extends BaseFormComponent implements OnInit {

  KvmInfoNetworkInfoResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmInfoService: KvmInfoService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      NetworkInfo_ServerI: new FormControl(),

    });
  }

  NetworkInfo_Submit() {
    var NetworkInfo_Request = <NetworkInfo_Get>{};
    NetworkInfo_Request.ServerI = this.form.controls['NetworkInfo_ServerI'].value;


    this.KvmInfoService.NetworkInfo(NetworkInfo_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmInfoNetworkInfoResult = result;
      }, error => {
        console.log(error);
      });
  }
}