import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistryService } from "./Registry-service"
import { GetRegistryList_Get } from './Registry-input'

@Component({
  selector: 'app-RegistryGetRegistryList',
  templateUrl: 'Registry-GetRegistryList-form.html',
  styleUrls: ['./registry.component.css']
})

export class RegistryGetRegistryListComponent
  extends BaseFormComponent implements OnInit {

  RegistryGetRegistryListResult?: any;

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

  GetRegistryList_Submit() {
    var GetRegistryList_Request = <GetRegistryList_Get>{};


    this.RegistryService.GetRegistryList(GetRegistryList_Request)
      .subscribe(result => {
        console.log(result);
        this.RegistryGetRegistryListResult = result;
      }, error => {
        console.log(error);
      });
  }
}