import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmInfoService } from "./KvmInfo-service"
import { GetKvmBridge_Get } from './KvmInfo-input'

@Component({
  selector: 'app-KvmInfoGetKvmBridge',
  templateUrl: 'KvmInfo-GetKvmBridge-form.html',
  styleUrls: ['./kvm-info.component.css']
})

export class KvmInfoGetKvmBridgeComponent
  extends BaseFormComponent implements OnInit {

  KvmInfoGetKvmBridgeResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmInfoService: KvmInfoService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetKvmBridge_ServerI: new FormControl(),

    });
  }

  GetKvmBridge_Submit() {
    var GetKvmBridge_Request = <GetKvmBridge_Get>{};
    GetKvmBridge_Request.ServerI = this.form.controls['GetKvmBridge_ServerI'].value;


    this.KvmInfoService.GetKvmBridge(GetKvmBridge_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmInfoGetKvmBridgeResult = result;
      }, error => {
        console.log(error);
      });
  }
}