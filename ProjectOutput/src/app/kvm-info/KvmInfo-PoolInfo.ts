import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmInfoService } from "./KvmInfo-service"
import { PoolInfo_Get } from './KvmInfo-input'

@Component({
  selector: 'app-KvmInfoPoolInfo',
  templateUrl: 'KvmInfo-PoolInfo-form.html',
  styleUrls: ['./kvm-info.component.css']
})

export class KvmInfoPoolInfoComponent
  extends BaseFormComponent implements OnInit {

  KvmInfoPoolInfoResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmInfoService: KvmInfoService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      PoolInfo_ServerI: new FormControl(),

    });
  }

  PoolInfo_Submit() {
    var PoolInfo_Request = <PoolInfo_Get>{};
    PoolInfo_Request.ServerI = this.form.controls['PoolInfo_ServerI'].value;


    this.KvmInfoService.PoolInfo(PoolInfo_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmInfoPoolInfoResult = result;
      }, error => {
        console.log(error);
      });
  }
}