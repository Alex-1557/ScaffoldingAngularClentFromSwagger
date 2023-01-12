import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmInfoService } from "./KvmInfo-service"
import { GetFreeIP_Get } from './KvmInfo-input'

@Component({
  selector: 'app-KvmInfoGetFreeIP',
  templateUrl: 'KvmInfo-GetFreeIP-form.html',
  styleUrls: ['./kvm-info.component.css']
})

export class KvmInfoGetFreeIPComponent
  extends BaseFormComponent implements OnInit {

  KvmInfoGetFreeIPResult?: any;

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

  GetFreeIP_Submit() {
    var GetFreeIP_Request = <GetFreeIP_Get>{};

    this.KvmInfoService.GetFreeIP(GetFreeIP_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmInfoGetFreeIPResult = result;
      }, error => {
        console.log(error);
      });
  }
}