import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatacenterService } from "./Datacenter-service"
import { AddServer_Post } from './Datacenter-input'

@Component({
  selector: 'app-DatacenterAddServer',
  templateUrl: 'Datacenter-AddServer-form.html',
  styleUrls: ['./datacenter.component.css']
})

export class DatacenterAddServerComponent
  extends BaseFormComponent implements OnInit {

  DatacenterAddServerResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private DatacenterService: DatacenterService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      AddServer_serverI: new FormControl(),
      AddServer_serverDecryptPass: new FormControl(),
      AddServer_bashCmd: new FormControl(),

    });
  }

  AddServer_Submit() {
    var AddServer_Request = <AddServer_Post>{};
    AddServer_Request.serverI = this.form.controls['AddServer_serverI'].value;
    AddServer_Request.serverDecryptPass = this.form.controls['AddServer_serverDecryptPass'].value;
    AddServer_Request.bashCmd = this.form.controls['AddServer_bashCmd'].value;


    this.DatacenterService.AddServer(AddServer_Request)
      .subscribe(result => {
        console.log(result);
        this.DatacenterAddServerResult = result;
      }, error => {
        console.log(error);
      });
  }
}