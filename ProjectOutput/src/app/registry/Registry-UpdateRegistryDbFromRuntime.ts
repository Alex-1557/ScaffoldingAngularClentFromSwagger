import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistryService } from "./Registry-service"
import { UpdateRegistryDbFromRuntime_Post } from './Registry-input'

@Component({
  selector: 'app-RegistryUpdateRegistryDbFromRuntime',
  templateUrl: 'Registry-UpdateRegistryDbFromRuntime-form.html',
  styleUrls: ['./registry.component.css']
})

export class RegistryUpdateRegistryDbFromRuntimeComponent
  extends BaseFormComponent implements OnInit {

  RegistryUpdateRegistryDbFromRuntimeResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private RegistryService: RegistryService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      UpdateRegistryDbFromRuntime_dockerRegistryVmI: new FormControl(),
      UpdateRegistryDbFromRuntime_dockerRegistryDecryptPass: new FormControl(),

    });
  }

  UpdateRegistryDbFromRuntime_Submit() {
    var UpdateRegistryDbFromRuntime_Request = <UpdateRegistryDbFromRuntime_Post>{};
    UpdateRegistryDbFromRuntime_Request.dockerRegistryVmI = this.form.controls['UpdateRegistryDbFromRuntime_dockerRegistryVmI'].value;
    UpdateRegistryDbFromRuntime_Request.dockerRegistryDecryptPass = this.form.controls['UpdateRegistryDbFromRuntime_dockerRegistryDecryptPass'].value;


    this.RegistryService.UpdateRegistryDbFromRuntime(UpdateRegistryDbFromRuntime_Request)
      .subscribe(result => {
        console.log(result);
        this.RegistryUpdateRegistryDbFromRuntimeResult = result;
      }, error => {
        console.log(error);
      });
  }
}