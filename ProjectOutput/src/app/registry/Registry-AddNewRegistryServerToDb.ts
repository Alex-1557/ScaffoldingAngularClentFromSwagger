import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistryService } from "./Registry-service"
import { AddNewRegistryServerToDb_Post } from './Registry-input'

@Component({
  selector: 'app-RegistryAddNewRegistryServerToDb',
  templateUrl: 'Registry-AddNewRegistryServerToDb-form.html',
  styleUrls: ['./registry.component.css']
})

export class RegistryAddNewRegistryServerToDbComponent
  extends BaseFormComponent implements OnInit {

  RegistryAddNewRegistryServerToDbResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private RegistryService: RegistryService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      AddNewRegistryServerToDb_AddNewRegistryServerToDbRequest: new FormControl(),

    });
  }

  AddNewRegistryServerToDb_Submit() {
    var AddNewRegistryServerToDb_Request = <AddNewRegistryServerToDb_Post>{};
    AddNewRegistryServerToDb_Request.AddNewRegistryServerToDbRequest = this.form.controls['AddNewRegistryServerToDb_AddNewRegistryServerToDbRequest'].value;


    this.RegistryService.AddNewRegistryServerToDb(AddNewRegistryServerToDb_Request)
      .subscribe(result => {
        console.log(result);
        this.RegistryAddNewRegistryServerToDbResult = result;
      }, error => {
        console.log(error);
      });
  }
}