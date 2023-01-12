import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDeployVmService } from "./KvmDeployVm-service"
import { AddMasterNodeToDb8_Post } from './KvmDeployVm-input'

@Component({
  selector: 'app-KvmDeployVmAddMasterNodeToDb8',
  templateUrl: 'KvmDeployVm-AddMasterNodeToDb8-form.html',
  styleUrls: ['./kvm-deploy-vm.component.css']
})

export class KvmDeployVmAddMasterNodeToDb8Component
  extends BaseFormComponent implements OnInit {

  KvmDeployVmAddMasterNodeToDb8Result?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDeployVmService: KvmDeployVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      AddMasterNodeToDb8_toVm: new FormControl(),
      AddMasterNodeToDb8_toVmUser: new FormControl(),
      AddMasterNodeToDb8_toUser: new FormControl(),
      AddMasterNodeToDb8_toCoin: new FormControl(),
      AddMasterNodeToDb8_configPath: new FormControl(),
      AddMasterNodeToDb8_statusCommand: new FormControl(),
      AddMasterNodeToDb8_config: new FormControl(),
      AddMasterNodeToDb8_comment: new FormControl(),

    });
  }

  AddMasterNodeToDb8_Submit() {
    var AddMasterNodeToDb8_Request = <AddMasterNodeToDb8_Post>{};
    AddMasterNodeToDb8_Request.toVm = this.form.controls['AddMasterNodeToDb8_toVm'].value;
    AddMasterNodeToDb8_Request.toVmUser = this.form.controls['AddMasterNodeToDb8_toVmUser'].value;
    AddMasterNodeToDb8_Request.toUser = this.form.controls['AddMasterNodeToDb8_toUser'].value;
    AddMasterNodeToDb8_Request.toCoin = this.form.controls['AddMasterNodeToDb8_toCoin'].value;
    AddMasterNodeToDb8_Request.configPath = this.form.controls['AddMasterNodeToDb8_configPath'].value;
    AddMasterNodeToDb8_Request.statusCommand = this.form.controls['AddMasterNodeToDb8_statusCommand'].value;
    AddMasterNodeToDb8_Request.config = this.form.controls['AddMasterNodeToDb8_config'].value;
    AddMasterNodeToDb8_Request.comment = this.form.controls['AddMasterNodeToDb8_comment'].value;


    this.KvmDeployVmService.AddMasterNodeToDb8(AddMasterNodeToDb8_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDeployVmAddMasterNodeToDb8Result = result;
      }, error => {
        console.log(error);
      });
  }
}