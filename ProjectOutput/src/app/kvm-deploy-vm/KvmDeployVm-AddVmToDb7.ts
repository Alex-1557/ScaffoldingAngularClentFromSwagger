import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDeployVmService } from "./KvmDeployVm-service"
import { AddVmToDb7_Post } from './KvmDeployVm-input'

@Component({
  selector: 'app-KvmDeployVmAddVmToDb7',
  templateUrl: 'KvmDeployVm-AddVmToDb7-form.html',
  styleUrls: ['./kvm-deploy-vm.component.css']
})

export class KvmDeployVmAddVmToDb7Component
  extends BaseFormComponent implements OnInit {

  KvmDeployVmAddVmToDb7Result?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDeployVmService: KvmDeployVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      AddVmToDb7_serverI: new FormControl(),
      AddVmToDb7_serverDecryptPass: new FormControl(),
      AddVmToDb7_toUser: new FormControl(),
      AddVmToDb7_vmName: new FormControl(),

    });
  }

  AddVmToDb7_Submit() {
    var AddVmToDb7_Request = <AddVmToDb7_Post>{};
    AddVmToDb7_Request.serverI = this.form.controls['AddVmToDb7_serverI'].value;
    AddVmToDb7_Request.serverDecryptPass = this.form.controls['AddVmToDb7_serverDecryptPass'].value;
    AddVmToDb7_Request.toUser = this.form.controls['AddVmToDb7_toUser'].value;
    AddVmToDb7_Request.vmName = this.form.controls['AddVmToDb7_vmName'].value;


    this.KvmDeployVmService.AddVmToDb7(AddVmToDb7_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDeployVmAddVmToDb7Result = result;
      }, error => {
        console.log(error);
      });
  }
}