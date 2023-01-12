import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainerService } from "./Container-service"
import { StopContainerByDocker_Post } from './Container-input'

@Component({
  selector: 'app-ContainerStopContainerByDocker',
  templateUrl: 'Container-StopContainerByDocker-form.html',
  styleUrls: ['./container.component.css']
})

export class ContainerStopContainerByDockerComponent
  extends BaseFormComponent implements OnInit {

  ContainerStopContainerByDockerResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ContainerService: ContainerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      StopContainerByDocker_vmConnectionAdminDecryptPass: new FormControl(),
      StopContainerByDocker_dockerHubDecryptPass: new FormControl(),
      StopContainerByDocker_toDockerHub: new FormControl(),
      StopContainerByDocker_toDockerRegistry: new FormControl(),
      StopContainerByDocker_toCoin: new FormControl(),
      StopContainerByDocker_toUser: new FormControl(),
      StopContainerByDocker_containerID: new FormControl(),

    });
  }

  StopContainerByDocker_Submit() {
    var StopContainerByDocker_Request = <StopContainerByDocker_Post>{};
    StopContainerByDocker_Request.vmConnectionAdminDecryptPass = this.form.controls['StopContainerByDocker_vmConnectionAdminDecryptPass'].value;
    StopContainerByDocker_Request.dockerHubDecryptPass = this.form.controls['StopContainerByDocker_dockerHubDecryptPass'].value;
    StopContainerByDocker_Request.toDockerHub = this.form.controls['StopContainerByDocker_toDockerHub'].value;
    StopContainerByDocker_Request.toDockerRegistry = this.form.controls['StopContainerByDocker_toDockerRegistry'].value;
    StopContainerByDocker_Request.toCoin = this.form.controls['StopContainerByDocker_toCoin'].value;
    StopContainerByDocker_Request.toUser = this.form.controls['StopContainerByDocker_toUser'].value;
    StopContainerByDocker_Request.containerID = this.form.controls['StopContainerByDocker_containerID'].value;


    this.ContainerService.StopContainerByDocker(StopContainerByDocker_Request)
      .subscribe(result => {
        console.log(result);
        this.ContainerStopContainerByDockerResult = result;
      }, error => {
        console.log(error);
      });
  }
}