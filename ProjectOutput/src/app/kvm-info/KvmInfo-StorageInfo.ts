import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmInfoService } from "./KvmInfo-service"
import { StorageInfo_Get } from './KvmInfo-input'

@Component({
  selector: 'app-KvmInfoStorageInfo',
  templateUrl: 'KvmInfo-StorageInfo-form.html',
  styleUrls: ['./kvm-info.component.css']
})

export class KvmInfoStorageInfoComponent
  extends BaseFormComponent implements OnInit {

  KvmInfoStorageInfoResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmInfoService: KvmInfoService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      StorageInfo_ServerI: new FormControl(),

    });
  }

  StorageInfo_Submit() {
    var StorageInfo_Request = <StorageInfo_Get>{};
    StorageInfo_Request.ServerI = this.form.controls['StorageInfo_ServerI'].value;


    this.KvmInfoService.StorageInfo(StorageInfo_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmInfoStorageInfoResult = result;
      }, error => {
        console.log(error);
      });
  }
}