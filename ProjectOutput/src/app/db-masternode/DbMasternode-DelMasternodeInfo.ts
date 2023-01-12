import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbMasternodeService } from "./DbMasternode-service"
import { DelMasternodeInfo_Get } from './DbMasternode-input'

@Component({
  selector: 'app-DbMasternodeDelMasternodeInfo',
  templateUrl: 'DbMasternode-DelMasternodeInfo-form.html',
  styleUrls: ['./db-masternode.component.css']
})

export class DbMasternodeDelMasternodeInfoComponent
  extends BaseFormComponent implements OnInit {

  DbMasternodeDelMasternodeInfoResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private DbMasternodeService: DbMasternodeService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      DelMasternodeInfo_MasternodeI: new FormControl()

    });
  }

  DelMasternodeInfo_Submit() {
    var DelMasternodeInfo_Request = <DelMasternodeInfo_Get>{};
    DelMasternodeInfo_Request.MasternodeI = this.form.controls['DelMasternodeInfo_MasternodeI'].value;


    this.DbMasternodeService.DelMasternodeInfo(DelMasternodeInfo_Request)
      .subscribe(result => {
        console.log(result);
        this.DbMasternodeDelMasternodeInfoResult = result;
      }, error => {
        console.log(error);
      });
  }
}