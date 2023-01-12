import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmInfoService } from "./KvmInfo-service"
import { ServerInfo_Get } from './KvmInfo-input'

@Component({
  selector: 'app-KvmInfoServerInfo',
  templateUrl: 'KvmInfo-ServerInfo-form.html',
  styleUrls: ['./kvm-info.component.css']
})

export class KvmInfoServerInfoComponent
  extends BaseFormComponent implements OnInit {

  KvmInfoServerInfoResult?: any;

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

  ServerInfo_Submit() {
    var ServerInfo_Request = <ServerInfo_Get>{};


    this.KvmInfoService.ServerInfo(ServerInfo_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmInfoServerInfoResult = result;
      }, error => {
        console.log(error);
      });
  }
}