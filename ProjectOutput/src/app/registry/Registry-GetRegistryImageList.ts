import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistryService } from "./Registry-service"
import { GetRegistryImageList_Get } from './Registry-input'

@Component({
  selector: 'app-RegistryGetRegistryImageList',
  templateUrl: 'Registry-GetRegistryImageList-form.html',
  styleUrls: ['./registry.component.css']
})

export class RegistryGetRegistryImageListComponent
  extends BaseFormComponent implements OnInit {

  RegistryGetRegistryImageListResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private RegistryService: RegistryService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetRegistryImageList_toDockerRegistry: new FormControl(),

    });
  }

  GetRegistryImageList_Submit() {
    var GetRegistryImageList_Request = <GetRegistryImageList_Get>{};
    GetRegistryImageList_Request.toDockerRegistry = this.form.controls['GetRegistryImageList_toDockerRegistry'].value;


    this.RegistryService.GetRegistryImageList(GetRegistryImageList_Request)
      .subscribe(result => {
        console.log(result);
        this.RegistryGetRegistryImageListResult = result;
      }, error => {
        console.log(error);
      });
  }
}