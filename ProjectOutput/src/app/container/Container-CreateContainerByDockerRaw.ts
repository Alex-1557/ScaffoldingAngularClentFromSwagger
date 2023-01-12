import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainerService } from "./Container-service"
import { CreateContainerByDockerRaw_Post } from './Container-input'

@Component({
  selector: 'app-ContainerCreateContainerByDockerRaw',
  templateUrl: 'Container-CreateContainerByDockerRaw-form.html',
  styleUrls: ['./container.component.css']
})

export class ContainerCreateContainerByDockerRawComponent
  extends BaseFormComponent implements OnInit {

  ContainerCreateContainerByDockerRawResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ContainerService: ContainerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      CreateContainerByDockerRaw_vmConnectionAdminDecryptPass: new FormControl(),
      CreateContainerByDockerRaw_dockerHubDecryptPass: new FormControl(),
      CreateContainerByDockerRaw_toDockerHub: new FormControl(),
      CreateContainerByDockerRaw_toDockerRegistry: new FormControl(),
      CreateContainerByDockerRaw_toCoin: new FormControl(),
      CreateContainerByDockerRaw_toUser: new FormControl(),
      CreateContainerByDockerRaw_jsonParameters: new FormControl(),

    });
  }

  CreateContainerByDockerRaw_Submit() {
    var CreateContainerByDockerRaw_Request = <CreateContainerByDockerRaw_Post>{};
    CreateContainerByDockerRaw_Request.vmConnectionAdminDecryptPass = this.form.controls['CreateContainerByDockerRaw_vmConnectionAdminDecryptPass'].value;
    CreateContainerByDockerRaw_Request.dockerHubDecryptPass = this.form.controls['CreateContainerByDockerRaw_dockerHubDecryptPass'].value;
    CreateContainerByDockerRaw_Request.toDockerHub = this.form.controls['CreateContainerByDockerRaw_toDockerHub'].value;
    CreateContainerByDockerRaw_Request.toDockerRegistry = this.form.controls['CreateContainerByDockerRaw_toDockerRegistry'].value;
    CreateContainerByDockerRaw_Request.toCoin = this.form.controls['CreateContainerByDockerRaw_toCoin'].value;
    CreateContainerByDockerRaw_Request.toUser = this.form.controls['CreateContainerByDockerRaw_toUser'].value;
    CreateContainerByDockerRaw_Request.jsonParameters = this.form.controls['CreateContainerByDockerRaw_jsonParameters'].value;


    this.ContainerService.CreateContainerByDockerRaw(CreateContainerByDockerRaw_Request)
      .subscribe(result => {
        console.log(result);
        this.ContainerCreateContainerByDockerRawResult = result;
      }, error => {
        console.log(error);
      });
  }
}