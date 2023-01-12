import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistryService } from "./Registry-service"
import { GetRegistryRuntimeCatalog_Post } from './Registry-input'

@Component({
  selector: 'app-RegistryGetRegistryRuntimeCatalog',
  templateUrl: 'Registry-GetRegistryRuntimeCatalog-form.html',
  styleUrls: ['./registry.component.css']
})

export class RegistryGetRegistryRuntimeCatalogComponent
  extends BaseFormComponent implements OnInit {

  RegistryGetRegistryRuntimeCatalogResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private RegistryService: RegistryService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetRegistryRuntimeCatalog_dockerRegistryVmI: new FormControl(),
      GetRegistryRuntimeCatalog_dockerRegistryDecryptPass: new FormControl(),

    });
  }

  GetRegistryRuntimeCatalog_Submit() {
    var GetRegistryRuntimeCatalog_Request = <GetRegistryRuntimeCatalog_Post>{};
    GetRegistryRuntimeCatalog_Request.dockerRegistryVmI = this.form.controls['GetRegistryRuntimeCatalog_dockerRegistryVmI'].value;
    GetRegistryRuntimeCatalog_Request.dockerRegistryDecryptPass = this.form.controls['GetRegistryRuntimeCatalog_dockerRegistryDecryptPass'].value;


    this.RegistryService.GetRegistryRuntimeCatalog(GetRegistryRuntimeCatalog_Request)
      .subscribe(result => {
        console.log(result);
        this.RegistryGetRegistryRuntimeCatalogResult = result;
      }, error => {
        console.log(error);
      });
  }
}