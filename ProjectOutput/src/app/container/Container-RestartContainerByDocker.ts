import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainerService } from "./Container-service"
import { RestartContainerByDocker_Post } from './Container-input'

@Component({
  selector: 'app-ContainerRestartContainerByDocker',
  templateUrl: 'Container-RestartContainerByDocker-form.html',
  styleUrls: ['./container.component.css']
})

export class ContainerRestartContainerByDockerComponent
  extends BaseFormComponent implements OnInit {

  ContainerRestartContainerByDockerResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ContainerService: ContainerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      RestartContainerByDocker_vmConnectionAdminDecryptPass: new FormControl(),
      RestartContainerByDocker_dockerHubDecryptPass: new FormControl(),
      RestartContainerByDocker_toDockerHub: new FormControl(),
      RestartContainerByDocker_toDockerRegistry: new FormControl(),
      RestartContainerByDocker_toCoin: new FormControl(),
      RestartContainerByDocker_toUser: new FormControl(),
      RestartContainerByDocker_containerID: new FormControl(),

    });
  }

  RestartContainerByDocker_Submit() {
    var RestartContainerByDocker_Request = <RestartContainerByDocker_Post>{};
    RestartContainerByDocker_Request.vmConnectionAdminDecryptPass = this.form.controls['RestartContainerByDocker_vmConnectionAdminDecryptPass'].value;
    RestartContainerByDocker_Request.dockerHubDecryptPass = this.form.controls['RestartContainerByDocker_dockerHubDecryptPass'].value;
    RestartContainerByDocker_Request.toDockerHub = this.form.controls['RestartContainerByDocker_toDockerHub'].value;
    RestartContainerByDocker_Request.toDockerRegistry = this.form.controls['RestartContainerByDocker_toDockerRegistry'].value;
    RestartContainerByDocker_Request.toCoin = this.form.controls['RestartContainerByDocker_toCoin'].value;
    RestartContainerByDocker_Request.toUser = this.form.controls['RestartContainerByDocker_toUser'].value;
    RestartContainerByDocker_Request.containerID = this.form.controls['RestartContainerByDocker_containerID'].value;


    this.ContainerService.RestartContainerByDocker(RestartContainerByDocker_Request)
      .subscribe(result => {
        console.log(result);
        this.ContainerRestartContainerByDockerResult = result;
      }, error => {
        console.log(error);
      });
  }
}