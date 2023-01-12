import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainerService } from "./Container-service"
import { CreateContainerByDocker_Post } from './Container-input'

@Component({
  selector: 'app-ContainerCreateContainerByDocker',
  templateUrl: 'Container-CreateContainerByDocker-form.html',
  styleUrls: ['./container.component.css']
})

export class ContainerCreateContainerByDockerComponent
  extends BaseFormComponent implements OnInit {

  ContainerCreateContainerByDockerResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ContainerService: ContainerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      CreateContainerByDocker_vmConnectionAdminDecryptPass: new FormControl(),
      CreateContainerByDocker_dockerHubDecryptPass: new FormControl(),
      CreateContainerByDocker_toDockerHub: new FormControl(),
      CreateContainerByDocker_toDockerRegistry: new FormControl(),
      CreateContainerByDocker_toCoin: new FormControl(),
      CreateContainerByDocker_toUser: new FormControl(),
      CreateContainerByDocker_hostname: new FormControl(),
      CreateContainerByDocker_domainname: new FormControl(),
      CreateContainerByDocker_user: new FormControl(),
      CreateContainerByDocker_attachStdin: new FormControl(),
      CreateContainerByDocker_attachStdout: new FormControl(),
      CreateContainerByDocker_attachStderr: new FormControl(),
      CreateContainerByDocker_tty: new FormControl(),
      CreateContainerByDocker_stdinOnce: new FormControl(),
      CreateContainerByDocker_networkDisabled: new FormControl(),
      CreateContainerByDocker_env: new FormControl(),
      CreateContainerByDocker_cmd: new FormControl(),
      CreateContainerByDocker_entrypoint: new FormControl(),
      CreateContainerByDocker_image: new FormControl(),
      CreateContainerByDocker_labels: new FormControl(),
      CreateContainerByDocker_volumes: new FormControl(),
      CreateContainerByDocker_workingDir: new FormControl(),
      CreateContainerByDocker_macAddress: new FormControl(),
      CreateContainerByDocker_exposedPorts: new FormControl(),
      CreateContainerByDocker_hostConfig: new FormControl(),

    });
  }

  CreateContainerByDocker_Submit() {
    var CreateContainerByDocker_Request = <CreateContainerByDocker_Post>{};
    CreateContainerByDocker_Request.vmConnectionAdminDecryptPass = this.form.controls['CreateContainerByDocker_vmConnectionAdminDecryptPass'].value;
    CreateContainerByDocker_Request.dockerHubDecryptPass = this.form.controls['CreateContainerByDocker_dockerHubDecryptPass'].value;
    CreateContainerByDocker_Request.toDockerHub = this.form.controls['CreateContainerByDocker_toDockerHub'].value;
    CreateContainerByDocker_Request.toDockerRegistry = this.form.controls['CreateContainerByDocker_toDockerRegistry'].value;
    CreateContainerByDocker_Request.toCoin = this.form.controls['CreateContainerByDocker_toCoin'].value;
    CreateContainerByDocker_Request.toUser = this.form.controls['CreateContainerByDocker_toUser'].value;
    CreateContainerByDocker_Request.hostname = this.form.controls['CreateContainerByDocker_hostname'].value;
    CreateContainerByDocker_Request.domainname = this.form.controls['CreateContainerByDocker_domainname'].value;
    CreateContainerByDocker_Request.user = this.form.controls['CreateContainerByDocker_user'].value;
    CreateContainerByDocker_Request.attachStdin = this.form.controls['CreateContainerByDocker_attachStdin'].value;
    CreateContainerByDocker_Request.attachStdout = this.form.controls['CreateContainerByDocker_attachStdout'].value;
    CreateContainerByDocker_Request.attachStderr = this.form.controls['CreateContainerByDocker_attachStderr'].value;
    CreateContainerByDocker_Request.tty = this.form.controls['CreateContainerByDocker_tty'].value;
    CreateContainerByDocker_Request.stdinOnce = this.form.controls['CreateContainerByDocker_stdinOnce'].value;
    CreateContainerByDocker_Request.networkDisabled = this.form.controls['CreateContainerByDocker_networkDisabled'].value;
    CreateContainerByDocker_Request.env = this.form.controls['CreateContainerByDocker_env'].value;
    CreateContainerByDocker_Request.cmd = this.form.controls['CreateContainerByDocker_cmd'].value;
    CreateContainerByDocker_Request.entrypoint = this.form.controls['CreateContainerByDocker_entrypoint'].value;
    CreateContainerByDocker_Request.image = this.form.controls['CreateContainerByDocker_image'].value;
    CreateContainerByDocker_Request.labels = this.form.controls['CreateContainerByDocker_labels'].value;
    CreateContainerByDocker_Request.volumes = this.form.controls['CreateContainerByDocker_volumes'].value;
    CreateContainerByDocker_Request.workingDir = this.form.controls['CreateContainerByDocker_workingDir'].value;
    CreateContainerByDocker_Request.macAddress = this.form.controls['CreateContainerByDocker_macAddress'].value;
    CreateContainerByDocker_Request.exposedPorts = this.form.controls['CreateContainerByDocker_exposedPorts'].value;
    CreateContainerByDocker_Request.hostConfig = this.form.controls['CreateContainerByDocker_hostConfig'].value;


    this.ContainerService.CreateContainerByDocker(CreateContainerByDocker_Request)
      .subscribe(result => {
        console.log(result);
        this.ContainerCreateContainerByDockerResult = result;
      }, error => {
        console.log(error);
      });
  }
}