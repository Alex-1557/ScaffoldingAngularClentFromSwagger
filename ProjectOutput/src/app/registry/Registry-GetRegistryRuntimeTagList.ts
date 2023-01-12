import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistryService } from "./Registry-service"
import { GetRegistryRuntimeTagList_Post } from './Registry-input'

@Component({
  selector: 'app-RegistryGetRegistryRuntimeTagList',
  templateUrl: 'Registry-GetRegistryRuntimeTagList-form.html',
  styleUrls: ['./registry.component.css']
})

export class RegistryGetRegistryRuntimeTagListComponent
  extends BaseFormComponent implements OnInit {

  RegistryGetRegistryRuntimeTagListResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private RegistryService: RegistryService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetRegistryRuntimeTagList_dockerRegistryVmI: new FormControl(),
      GetRegistryRuntimeTagList_dockerRegistryDecryptPass: new FormControl(),
      GetRegistryRuntimeTagList_repository: new FormControl(),

    });
  }

  GetRegistryRuntimeTagList_Submit() {
    var GetRegistryRuntimeTagList_Request = <GetRegistryRuntimeTagList_Post>{};
    GetRegistryRuntimeTagList_Request.dockerRegistryVmI = this.form.controls['GetRegistryRuntimeTagList_dockerRegistryVmI'].value;
    GetRegistryRuntimeTagList_Request.dockerRegistryDecryptPass = this.form.controls['GetRegistryRuntimeTagList_dockerRegistryDecryptPass'].value;
    GetRegistryRuntimeTagList_Request.repository = this.form.controls['GetRegistryRuntimeTagList_repository'].value;


    this.RegistryService.GetRegistryRuntimeTagList(GetRegistryRuntimeTagList_Request)
      .subscribe(result => {
        console.log(result);
        this.RegistryGetRegistryRuntimeTagListResult = result;
      }, error => {
        console.log(error);
      });
  }
}