import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDeployVmService } from "./KvmDeployVm-service"
import { CopyTemplate2_Post } from './KvmDeployVm-input'

@Component({
  selector: 'app-KvmDeployVmCopyTemplate2',
  templateUrl: 'KvmDeployVm-CopyTemplate2-form.html',
  styleUrls: ['./kvm-deploy-vm.component.css']
})

export class KvmDeployVmCopyTemplate2Component
  extends BaseFormComponent implements OnInit {

  KvmDeployVmCopyTemplate2Result?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDeployVmService: KvmDeployVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      CopyTemplate2_serverI: new FormControl(),
      CopyTemplate2_serverDecryptPass: new FormControl(),
      CopyTemplate2_coinName: new FormControl(),
      CopyTemplate2_kvmDevice: new FormControl(),

    });
  }

  CopyTemplate2_Submit() {
    var CopyTemplate2_Request = <CopyTemplate2_Post>{};
    CopyTemplate2_Request.serverI = this.form.controls['CopyTemplate2_serverI'].value;
    CopyTemplate2_Request.serverDecryptPass = this.form.controls['CopyTemplate2_serverDecryptPass'].value;
    CopyTemplate2_Request.coinName = this.form.controls['CopyTemplate2_coinName'].value;
    CopyTemplate2_Request.kvmDevice = this.form.controls['CopyTemplate2_kvmDevice'].value;


    this.KvmDeployVmService.CopyTemplate2(CopyTemplate2_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDeployVmCopyTemplate2Result = result;
      }, error => {
        console.log(error);
      });
  }
}