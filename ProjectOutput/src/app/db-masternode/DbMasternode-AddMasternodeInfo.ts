import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbMasternodeService } from "./DbMasternode-service"
import { AddMasternodeInfo_Post } from './DbMasternode-input'

@Component({
  selector: 'app-DbMasternodeAddMasternodeInfo',
  templateUrl: 'DbMasternode-AddMasternodeInfo-form.html',
  styleUrls: ['./db-masternode.component.css']
})

export class DbMasternodeAddMasternodeInfoComponent
  extends BaseFormComponent implements OnInit {

  DbMasternodeAddMasternodeInfoResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private DbMasternodeService: DbMasternodeService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      AddMasternodeInfo_toVm: new FormControl(),
      AddMasternodeInfo_toVmUser: new FormControl(),
      AddMasternodeInfo_toUser: new FormControl(),
      AddMasternodeInfo_toCoin: new FormControl(),
      AddMasternodeInfo_configPath: new FormControl(),
      AddMasternodeInfo_statusCommand: new FormControl(),
      AddMasternodeInfo_config: new FormControl(),
      AddMasternodeInfo_comment: new FormControl(),

    });
  }

  AddMasternodeInfo_Submit() {
    var AddMasternodeInfo_Request = <AddMasternodeInfo_Post>{};
    AddMasternodeInfo_Request.toVm = this.form.controls['AddMasternodeInfo_toVm'].value;
    AddMasternodeInfo_Request.toVmUser = this.form.controls['AddMasternodeInfo_toVmUser'].value;
    AddMasternodeInfo_Request.toUser = this.form.controls['AddMasternodeInfo_toUser'].value;
    AddMasternodeInfo_Request.toCoin = this.form.controls['AddMasternodeInfo_toCoin'].value;
    AddMasternodeInfo_Request.configPath = this.form.controls['AddMasternodeInfo_configPath'].value;
    AddMasternodeInfo_Request.statusCommand = this.form.controls['AddMasternodeInfo_statusCommand'].value;
    AddMasternodeInfo_Request.config = this.form.controls['AddMasternodeInfo_config'].value;
    AddMasternodeInfo_Request.comment = this.form.controls['AddMasternodeInfo_comment'].value;


    this.DbMasternodeService.AddMasternodeInfo(AddMasternodeInfo_Request)
      .subscribe(result => {
        console.log(result);
        this.DbMasternodeAddMasternodeInfoResult = result;
      }, error => {
        console.log(error);
      });
  }
}