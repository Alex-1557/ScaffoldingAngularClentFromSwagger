import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmInfoService } from "./KvmInfo-service"
import { GetFreeKvmVolume_Get } from './KvmInfo-input'

@Component({
  selector: 'app-KvmInfoGetFreeKvmVolume',
  templateUrl: 'KvmInfo-GetFreeKvmVolume-form.html',
  styleUrls: ['./kvm-info.component.css']
})

export class KvmInfoGetFreeKvmVolumeComponent
  extends BaseFormComponent implements OnInit {

  KvmInfoGetFreeKvmVolumeResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmInfoService: KvmInfoService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({

    });
  }

  GetFreeKvmVolume_Submit() {
    var GetFreeKvmVolume_Request = <GetFreeKvmVolume_Get>{};

    this.KvmInfoService.GetFreeKvmVolume(GetFreeKvmVolume_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmInfoGetFreeKvmVolumeResult = result;
      }, error => {
        console.log(error);
      });
  }
}