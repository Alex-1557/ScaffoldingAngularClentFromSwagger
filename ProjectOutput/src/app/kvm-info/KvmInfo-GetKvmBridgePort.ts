import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmInfoService } from "./KvmInfo-service"
import { GetKvmBridgePort_Get } from './KvmInfo-input'

@Component({
  selector: 'app-KvmInfoGetKvmBridgePort',
  templateUrl: 'KvmInfo-GetKvmBridgePort-form.html',
  styleUrls: ['./kvm-info.component.css']
})

export class KvmInfoGetKvmBridgePortComponent
  extends BaseFormComponent implements OnInit {

  KvmInfoGetKvmBridgePortResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmInfoService: KvmInfoService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetKvmBridgePort_ServerI: new FormControl(),

    });
  }

  GetKvmBridgePort_Submit() {
    var GetKvmBridgePort_Request = <GetKvmBridgePort_Get>{};
    GetKvmBridgePort_Request.ServerI = this.form.controls['GetKvmBridgePort_ServerI'].value;


    this.KvmInfoService.GetKvmBridgePort(GetKvmBridgePort_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmInfoGetKvmBridgePortResult = result;
      }, error => {
        console.log(error);
      });
  }
}