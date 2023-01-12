import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatacenterService } from "./Datacenter-service"
import { UpdServer_Post } from './Datacenter-input'

@Component({
  selector: 'app-DatacenterUpdServer',
  templateUrl: 'Datacenter-UpdServer-form.html',
  styleUrls: ['./datacenter.component.css']
})

export class DatacenterUpdServerComponent
  extends BaseFormComponent implements OnInit {

  DatacenterUpdServerResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private DatacenterService: DatacenterService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      UpdServer_serverI: new FormControl(),
      UpdServer_serverDecryptPass: new FormControl(),
      UpdServer_bashCmd: new FormControl(),

    });
  }

  UpdServer_Submit() {
    var UpdServer_Request = <UpdServer_Post>{};
    UpdServer_Request.serverI = this.form.controls['UpdServer_serverI'].value;
    UpdServer_Request.serverDecryptPass = this.form.controls['UpdServer_serverDecryptPass'].value;
    UpdServer_Request.bashCmd = this.form.controls['UpdServer_bashCmd'].value;


    this.DatacenterService.UpdServer(UpdServer_Request)
      .subscribe(result => {
        console.log(result);
        this.DatacenterUpdServerResult = result;
      }, error => {
        console.log(error);
      });
  }
}