import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmInfoService } from "./KvmInfo-service"
import { GetKvmNetworkInterface_Get } from './KvmInfo-input'

@Component({
  selector: 'app-KvmInfoGetKvmNetworkInterface',
  templateUrl: 'KvmInfo-GetKvmNetworkInterface-form.html',
  styleUrls: ['./kvm-info.component.css']
})

export class KvmInfoGetKvmNetworkInterfaceComponent
  extends BaseFormComponent implements OnInit {

  KvmInfoGetKvmNetworkInterfaceResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmInfoService: KvmInfoService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetKvmNetworkInterface_ServerI: new FormControl(),

    });
  }

  GetKvmNetworkInterface_Submit() {
    var GetKvmNetworkInterface_Request = <GetKvmNetworkInterface_Get>{};
    GetKvmNetworkInterface_Request.ServerI = this.form.controls['GetKvmNetworkInterface_ServerI'].value;


    this.KvmInfoService.GetKvmNetworkInterface(GetKvmNetworkInterface_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmInfoGetKvmNetworkInterfaceResult = result;
      }, error => {
        console.log(error);
      });
  }
}