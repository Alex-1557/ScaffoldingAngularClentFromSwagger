import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainerService } from "./Container-service"
import { StartContainerByDocker_Post } from './Container-input'

@Component({
  selector: 'app-ContainerStartContainerByDocker',
  templateUrl: 'Container-StartContainerByDocker-form.html',
  styleUrls: ['./container.component.css']
})

export class ContainerStartContainerByDockerComponent
  extends BaseFormComponent implements OnInit {

  ContainerStartContainerByDockerResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ContainerService: ContainerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      StartContainerByDocker_vmConnectionAdminDecryptPass: new FormControl(),
      StartContainerByDocker_dockerHubDecryptPass: new FormControl(),
      StartContainerByDocker_toDockerHub: new FormControl(),
      StartContainerByDocker_toDockerRegistry: new FormControl(),
      StartContainerByDocker_toCoin: new FormControl(),
      StartContainerByDocker_toUser: new FormControl(),
      StartContainerByDocker_containerID: new FormControl(),

    });
  }

  StartContainerByDocker_Submit() {
    var StartContainerByDocker_Request = <StartContainerByDocker_Post>{};
    StartContainerByDocker_Request.vmConnectionAdminDecryptPass = this.form.controls['StartContainerByDocker_vmConnectionAdminDecryptPass'].value;
    StartContainerByDocker_Request.dockerHubDecryptPass = this.form.controls['StartContainerByDocker_dockerHubDecryptPass'].value;
    StartContainerByDocker_Request.toDockerHub = this.form.controls['StartContainerByDocker_toDockerHub'].value;
    StartContainerByDocker_Request.toDockerRegistry = this.form.controls['StartContainerByDocker_toDockerRegistry'].value;
    StartContainerByDocker_Request.toCoin = this.form.controls['StartContainerByDocker_toCoin'].value;
    StartContainerByDocker_Request.toUser = this.form.controls['StartContainerByDocker_toUser'].value;
    StartContainerByDocker_Request.containerID = this.form.controls['StartContainerByDocker_containerID'].value;


    this.ContainerService.StartContainerByDocker(StartContainerByDocker_Request)
      .subscribe(result => {
        console.log(result);
        this.ContainerStartContainerByDockerResult = result;
      }, error => {
        console.log(error);
      });
  }
}