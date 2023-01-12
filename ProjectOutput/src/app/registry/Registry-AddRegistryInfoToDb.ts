import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistryService } from "./Registry-service"
import { AddRegistryInfoToDb_Post } from './Registry-input'

@Component({
  selector: 'app-RegistryAddRegistryInfoToDb',
  templateUrl: 'Registry-AddRegistryInfoToDb-form.html',
  styleUrls: ['./registry.component.css']
})

export class RegistryAddRegistryInfoToDbComponent
  extends BaseFormComponent implements OnInit {

  RegistryAddRegistryInfoToDbResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private RegistryService: RegistryService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      AddRegistryInfoToDb_toDockerRegistry: new FormControl(),
      AddRegistryInfoToDb_toCoin: new FormControl(),
      AddRegistryInfoToDb_registryImageName: new FormControl(),
      AddRegistryInfoToDb_tag: new FormControl(),
      AddRegistryInfoToDb_digest: new FormControl(),
      AddRegistryInfoToDb_manifestContent: new FormControl(),

    });
  }

  AddRegistryInfoToDb_Submit() {
    var AddRegistryInfoToDb_Request = <AddRegistryInfoToDb_Post>{};
    AddRegistryInfoToDb_Request.toDockerRegistry = this.form.controls['AddRegistryInfoToDb_toDockerRegistry'].value;
    AddRegistryInfoToDb_Request.toCoin = this.form.controls['AddRegistryInfoToDb_toCoin'].value;
    AddRegistryInfoToDb_Request.registryImageName = this.form.controls['AddRegistryInfoToDb_registryImageName'].value;
    AddRegistryInfoToDb_Request.tag = this.form.controls['AddRegistryInfoToDb_tag'].value;
    AddRegistryInfoToDb_Request.digest = this.form.controls['AddRegistryInfoToDb_digest'].value;
    AddRegistryInfoToDb_Request.manifestContent = this.form.controls['AddRegistryInfoToDb_manifestContent'].value;


    this.RegistryService.AddRegistryInfoToDb(AddRegistryInfoToDb_Request)
      .subscribe(result => {
        console.log(result);
        this.RegistryAddRegistryInfoToDbResult = result;
      }, error => {
        console.log(error);
      });
  }
}