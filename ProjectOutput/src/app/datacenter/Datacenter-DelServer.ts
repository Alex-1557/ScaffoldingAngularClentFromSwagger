import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatacenterService } from "./Datacenter-service"
import { DelServer_Post } from './Datacenter-input'

@Component({
  selector: 'app-DatacenterDelServer',
  templateUrl: 'Datacenter-DelServer-form.html',
  styleUrls: ['./datacenter.component.css']
})

export class DatacenterDelServerComponent
  extends BaseFormComponent implements OnInit {

  DatacenterDelServerResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private DatacenterService: DatacenterService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      DelServer_serverI: new FormControl(),
      DelServer_serverDecryptPass: new FormControl(),
      DelServer_bashCmd: new FormControl(),

    });
  }

  DelServer_Submit() {
    var DelServer_Request = <DelServer_Post>{};
    DelServer_Request.serverI = this.form.controls['DelServer_serverI'].value;
    DelServer_Request.serverDecryptPass = this.form.controls['DelServer_serverDecryptPass'].value;
    DelServer_Request.bashCmd = this.form.controls['DelServer_bashCmd'].value;


    this.DatacenterService.DelServer(DelServer_Request)
      .subscribe(result => {
        console.log(result);
        this.DatacenterDelServerResult = result;
      }, error => {
        console.log(error);
      });
  }
}