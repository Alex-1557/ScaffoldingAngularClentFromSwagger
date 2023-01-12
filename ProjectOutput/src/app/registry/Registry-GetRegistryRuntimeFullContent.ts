import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistryService } from "./Registry-service"
import { GetRegistryRuntimeFullContent_Post } from './Registry-input'

@Component({
  selector: 'app-RegistryGetRegistryRuntimeFullContent',
  templateUrl: 'Registry-GetRegistryRuntimeFullContent-form.html',
  styleUrls: ['./registry.component.css']
})

export class RegistryGetRegistryRuntimeFullContentComponent
  extends BaseFormComponent implements OnInit {

  RegistryGetRegistryRuntimeFullContentResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private RegistryService: RegistryService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetRegistryRuntimeFullContent_dockerRegistryVmI: new FormControl(),
      GetRegistryRuntimeFullContent_dockerRegistryDecryptPass: new FormControl(),

    });
  }

  GetRegistryRuntimeFullContent_Submit() {
    var GetRegistryRuntimeFullContent_Request = <GetRegistryRuntimeFullContent_Post>{};
    GetRegistryRuntimeFullContent_Request.dockerRegistryVmI = this.form.controls['GetRegistryRuntimeFullContent_dockerRegistryVmI'].value;
    GetRegistryRuntimeFullContent_Request.dockerRegistryDecryptPass = this.form.controls['GetRegistryRuntimeFullContent_dockerRegistryDecryptPass'].value;


    this.RegistryService.GetRegistryRuntimeFullContent(GetRegistryRuntimeFullContent_Request)
      .subscribe(result => {
        console.log(result);
        this.RegistryGetRegistryRuntimeFullContentResult = result;
      }, error => {
        console.log(error);
      });
  }
}