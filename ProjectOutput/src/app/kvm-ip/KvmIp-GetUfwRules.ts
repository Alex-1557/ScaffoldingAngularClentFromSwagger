import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmIpService } from "./KvmIp-service"
import { GetUfwRules_Post } from './KvmIp-input'

@Component({
  selector: 'app-KvmIpGetUfwRules',
  templateUrl: 'KvmIp-GetUfwRules-form.html',
  styleUrls: ['./kvm-ip.component.css']
})

export class KvmIpGetUfwRulesComponent
  extends BaseFormComponent implements OnInit {

  KvmIpGetUfwRulesResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmIpService: KvmIpService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetUfwRules_serverI: new FormControl(),
      GetUfwRules_serverDecryptPass: new FormControl(),

    });
  }

  GetUfwRules_Submit() {
    var GetUfwRules_Request = <GetUfwRules_Post>{};
    GetUfwRules_Request.serverI = this.form.controls['GetUfwRules_serverI'].value;
    GetUfwRules_Request.serverDecryptPass = this.form.controls['GetUfwRules_serverDecryptPass'].value;


    this.KvmIpService.GetUfwRules(GetUfwRules_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmIpGetUfwRulesResult = result;
      }, error => {
        console.log(error);
      });
  }
}