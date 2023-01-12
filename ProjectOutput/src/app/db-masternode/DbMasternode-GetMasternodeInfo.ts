import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbMasternodeService } from "./DbMasternode-service"
import { GetMasternodeInfo_Get } from './DbMasternode-input'

@Component({
  selector: 'app-DbMasternodeGetMasternodeInfo',
  templateUrl: 'DbMasternode-GetMasternodeInfo-form.html',
  styleUrls: ['./db-masternode.component.css']
})

export class DbMasternodeGetMasternodeInfoComponent
  extends BaseFormComponent implements OnInit {

  DbMasternodeGetMasternodeInfoResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private DbMasternodeService: DbMasternodeService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({

    });
}

GetMasternodeInfo_Submit() {
  var GetMasternodeInfo_Request = <GetMasternodeInfo_Get>{};

  this.DbMasternodeService.GetMasternodeInfo(GetMasternodeInfo_Request)
    .subscribe(result => {
      console.log(result);
      this.DbMasternodeGetMasternodeInfoResult = result;
    }, error => {
      console.log(error);
    });
}
}