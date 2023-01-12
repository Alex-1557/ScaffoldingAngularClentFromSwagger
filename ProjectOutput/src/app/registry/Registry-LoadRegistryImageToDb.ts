import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistryService } from "./Registry-service"
import { LoadRegistryImageToDb_Post } from './Registry-input'

@Component({
  selector: 'app-RegistryLoadRegistryImageToDb',
  templateUrl: 'Registry-LoadRegistryImageToDb-form.html',
  styleUrls: ['./registry.component.css']
})

export class RegistryLoadRegistryImageToDbComponent
  extends BaseFormComponent implements OnInit {

  RegistryLoadRegistryImageToDbResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private RegistryService: RegistryService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      LoadRegistryImageToDb_LoadRegistryImageToDbRequest: new FormControl(),

    });
  }

  LoadRegistryImageToDb_Submit() {
    var LoadRegistryImageToDb_Request = <LoadRegistryImageToDb_Post>{};
    LoadRegistryImageToDb_Request.LoadRegistryImageToDbRequest = this.form.controls['LoadRegistryImageToDb_LoadRegistryImageToDbRequest'].value;


    this.RegistryService.LoadRegistryImageToDb(LoadRegistryImageToDb_Request)
      .subscribe(result => {
        console.log(result);
        this.RegistryLoadRegistryImageToDbResult = result;
      }, error => {
        console.log(error);
      });
  }
}