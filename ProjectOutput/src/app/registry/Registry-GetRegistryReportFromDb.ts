import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistryService } from "./Registry-service"
import { GetRegistryReportFromDb_Get } from './Registry-input'

@Component({
  selector: 'app-RegistryGetRegistryReportFromDb',
  templateUrl: 'Registry-GetRegistryReportFromDb-form.html',
  styleUrls: ['./registry.component.css']
})

export class RegistryGetRegistryReportFromDbComponent
  extends BaseFormComponent implements OnInit {

  RegistryGetRegistryReportFromDbResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private RegistryService: RegistryService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({

    });
  }

  GetRegistryReportFromDb_Submit() {
    var GetRegistryReportFromDb_Request = <GetRegistryReportFromDb_Get>{};


    this.RegistryService.GetRegistryReportFromDb(GetRegistryReportFromDb_Request)
      .subscribe(result => {
        console.log(result);
        this.RegistryGetRegistryReportFromDbResult = result;
      }, error => {
        console.log(error);
      });
  }
}