import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmInfoService } from "./KvmInfo-service"
import { GetKvmVolume_Get } from './KvmInfo-input'

@Component({
  selector: 'app-KvmInfoGetKvmVolume',
  templateUrl: 'KvmInfo-GetKvmVolume-form.html',
  styleUrls: ['./kvm-info.component.css']
})

export class KvmInfoGetKvmVolumeComponent
  extends BaseFormComponent implements OnInit {

  KvmInfoGetKvmVolumeResult?: any;

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

  GetKvmVolume_Submit() {
    var GetKvmVolume_Request = <GetKvmVolume_Get>{};


    this.KvmInfoService.GetKvmVolume(GetKvmVolume_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmInfoGetKvmVolumeResult = result;
      }, error => {
        console.log(error);
      });
  }
}