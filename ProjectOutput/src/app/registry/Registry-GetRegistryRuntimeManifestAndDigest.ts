import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistryService } from "./Registry-service"
import { GetRegistryRuntimeManifestAndDigest_Post } from './Registry-input'

@Component({
  selector: 'app-RegistryGetRegistryRuntimeManifestAndDigest',
  templateUrl: 'Registry-GetRegistryRuntimeManifestAndDigest-form.html',
  styleUrls: ['./registry.component.css']
})

export class RegistryGetRegistryRuntimeManifestAndDigestComponent
  extends BaseFormComponent implements OnInit {

  RegistryGetRegistryRuntimeManifestAndDigestResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private RegistryService: RegistryService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetRegistryRuntimeManifestAndDigest_dockerRegistryVmI: new FormControl(),
      GetRegistryRuntimeManifestAndDigest_dockerRegistryDecryptPass: new FormControl(),
      GetRegistryRuntimeManifestAndDigest_repository: new FormControl(),
      GetRegistryRuntimeManifestAndDigest_tag: new FormControl(),

    });
  }

  GetRegistryRuntimeManifestAndDigest_Submit() {
    var GetRegistryRuntimeManifestAndDigest_Request = <GetRegistryRuntimeManifestAndDigest_Post>{};
    GetRegistryRuntimeManifestAndDigest_Request.dockerRegistryVmI = this.form.controls['GetRegistryRuntimeManifestAndDigest_dockerRegistryVmI'].value;
    GetRegistryRuntimeManifestAndDigest_Request.dockerRegistryDecryptPass = this.form.controls['GetRegistryRuntimeManifestAndDigest_dockerRegistryDecryptPass'].value;
    GetRegistryRuntimeManifestAndDigest_Request.repository = this.form.controls['GetRegistryRuntimeManifestAndDigest_repository'].value;
    GetRegistryRuntimeManifestAndDigest_Request.tag = this.form.controls['GetRegistryRuntimeManifestAndDigest_tag'].value;


    this.RegistryService.GetRegistryRuntimeManifestAndDigest(GetRegistryRuntimeManifestAndDigest_Request)
      .subscribe(result => {
        console.log(result);
        this.RegistryGetRegistryRuntimeManifestAndDigestResult = result;
      }, error => {
        console.log(error);
      });
  }
}