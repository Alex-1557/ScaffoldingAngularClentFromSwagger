import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmVmService } from "./KvmVm-service"
import { ChangeSshVmIpDb_Post } from './KvmVm-input'

@Component({
  selector: 'app-KvmVmChangeSshVmIpDb',
  templateUrl: 'KvmVm-ChangeSshVmIpDb-form.html',
  styleUrls: ['./kvm-vm.component.css']
})

export class KvmVmChangeSshVmIpDbComponent
  extends BaseFormComponent implements OnInit {

  KvmVmChangeSshVmIpDbResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmVmService: KvmVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      ChangeSshVmIpDb_vmName: new FormControl(),
      ChangeSshVmIpDb_mainIp: new FormControl(),
      ChangeSshVmIpDb_kvmBridgeName: new FormControl(),

    });
  }

  ChangeSshVmIpDb_Submit() {
    var ChangeSshVmIpDb_Request = <ChangeSshVmIpDb_Post>{};
    ChangeSshVmIpDb_Request.vmName = this.form.controls['ChangeSshVmIpDb_vmName'].value;
    ChangeSshVmIpDb_Request.mainIp = this.form.controls['ChangeSshVmIpDb_mainIp'].value;
    ChangeSshVmIpDb_Request.kvmBridgeName = this.form.controls['ChangeSshVmIpDb_kvmBridgeName'].value;


    this.KvmVmService.ChangeSshVmIpDb(ChangeSshVmIpDb_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmVmChangeSshVmIpDbResult = result;
      }, error => {
        console.log(error);
      });
  }
}