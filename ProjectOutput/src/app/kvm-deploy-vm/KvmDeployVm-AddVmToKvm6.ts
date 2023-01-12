import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDeployVmService } from "./KvmDeployVm-service"
import { AddVmToKvm6_Post } from './KvmDeployVm-input'

@Component({
  selector: 'app-KvmDeployVmAddVmToKvm6',
  templateUrl: 'KvmDeployVm-AddVmToKvm6-form.html',
  styleUrls: ['./kvm-deploy-vm.component.css']
})

export class KvmDeployVmAddVmToKvm6Component
  extends BaseFormComponent implements OnInit {

  KvmDeployVmAddVmToKvm6Result?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDeployVmService: KvmDeployVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      AddVmToKvm6_serverI: new FormControl(),
      AddVmToKvm6_serverDecryptPass: new FormControl(),
      AddVmToKvm6_xmlVmConfig: new FormControl(),

    });
  }

  AddVmToKvm6_Submit() {
    var AddVmToKvm6_Request = <AddVmToKvm6_Post>{};
    AddVmToKvm6_Request.serverI = this.form.controls['AddVmToKvm6_serverI'].value;
    AddVmToKvm6_Request.serverDecryptPass = this.form.controls['AddVmToKvm6_serverDecryptPass'].value;
    AddVmToKvm6_Request.xmlVmConfig = this.form.controls['AddVmToKvm6_xmlVmConfig'].value;


    this.KvmDeployVmService.AddVmToKvm6(AddVmToKvm6_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDeployVmAddVmToKvm6Result = result;
      }, error => {
        console.log(error);
      });
  }
}