import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainerService } from "./Container-service"
import { AttachToContainerByDocker_Post } from './Container-input'

@Component({
  selector: 'app-ContainerAttachToContainerByDocker',
  templateUrl: 'Container-AttachToContainerByDocker-form.html',
  styleUrls: ['./container.component.css']
})

export class ContainerAttachToContainerByDockerComponent
  extends BaseFormComponent implements OnInit {

  ContainerAttachToContainerByDockerResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ContainerService: ContainerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      AttachToContainerByDocker_dockerHubI: new FormControl(),
      AttachToContainerByDocker_dockerHubDecryptPass: new FormControl(),
      AttachToContainerByDocker_containerID: new FormControl(),
      AttachToContainerByDocker_cmd: new FormControl(),

    });
  }

  AttachToContainerByDocker_Submit() {
    var AttachToContainerByDocker_Request = <AttachToContainerByDocker_Post>{};
    AttachToContainerByDocker_Request.dockerHubI = this.form.controls['AttachToContainerByDocker_dockerHubI'].value;
    AttachToContainerByDocker_Request.dockerHubDecryptPass = this.form.controls['AttachToContainerByDocker_dockerHubDecryptPass'].value;
    AttachToContainerByDocker_Request.containerID = this.form.controls['AttachToContainerByDocker_containerID'].value;
    AttachToContainerByDocker_Request.cmd = this.form.controls['AttachToContainerByDocker_cmd'].value;


    this.ContainerService.AttachToContainerByDocker(AttachToContainerByDocker_Request)
      .subscribe(result => {
        console.log(result);
        this.ContainerAttachToContainerByDockerResult = result;
      }, error => {
        console.log(error);
      });
  }
}