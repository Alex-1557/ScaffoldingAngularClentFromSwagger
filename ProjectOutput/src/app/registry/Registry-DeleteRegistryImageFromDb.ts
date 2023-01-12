import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistryService } from "./Registry-service"
import { DeleteRegistryImageFromDb_Get } from './Registry-input'

@Component({
  selector: 'app-RegistryDeleteRegistryImageFromDb',
  templateUrl: 'Registry-DeleteRegistryImageFromDb-form.html',
  styleUrls: ['./registry.component.css']
})

export class RegistryDeleteRegistryImageFromDbComponent
  extends BaseFormComponent implements OnInit {

  RegistryDeleteRegistryImageFromDbResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private RegistryService: RegistryService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      DeleteRegistryImageFromDb_toDockerRegistry: new FormControl(),
      DeleteRegistryImageFromDb_ImageName: new FormControl(),

    });
  }

  DeleteRegistryImageFromDb_Submit() {
    var DeleteRegistryImageFromDb_Request = <DeleteRegistryImageFromDb_Get>{};
    DeleteRegistryImageFromDb_Request.toDockerRegistry = this.form.controls['DeleteRegistryImageFromDb_toDockerRegistry'].value;
    DeleteRegistryImageFromDb_Request.ImageName = this.form.controls['DeleteRegistryImageFromDb_ImageName'].value;


    this.RegistryService.DeleteRegistryImageFromDb(DeleteRegistryImageFromDb_Request)
      .subscribe(result => {
        console.log(result);
        this.RegistryDeleteRegistryImageFromDbResult = result;
      }, error => {
        console.log(error);
      });
  }
}