import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainerService } from "./Container-service"
import { RemoveContainerByDocker_Post } from './Container-input'

@Component({
  selector: 'app-ContainerRemoveContainerByDocker',
  templateUrl: 'Container-RemoveContainerByDocker-form.html',
  styleUrls: ['./container.component.css']
})

export class ContainerRemoveContainerByDockerComponent
  extends BaseFormComponent implements OnInit {

  ContainerRemoveContainerByDockerResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ContainerService: ContainerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      RemoveContainerByDocker_vmConnectionAdminDecryptPass: new FormControl(),
      RemoveContainerByDocker_dockerHubDecryptPass: new FormControl(),
      RemoveContainerByDocker_toDockerHub: new FormControl(),
      RemoveContainerByDocker_toDockerRegistry: new FormControl(),
      RemoveContainerByDocker_toCoin: new FormControl(),
      RemoveContainerByDocker_toUser: new FormControl(),
      RemoveContainerByDocker_containerID: new FormControl(),

    });
  }

  RemoveContainerByDocker_Submit() {
    var RemoveContainerByDocker_Request = <RemoveContainerByDocker_Post>{};
    RemoveContainerByDocker_Request.vmConnectionAdminDecryptPass = this.form.controls['RemoveContainerByDocker_vmConnectionAdminDecryptPass'].value;
    RemoveContainerByDocker_Request.dockerHubDecryptPass = this.form.controls['RemoveContainerByDocker_dockerHubDecryptPass'].value;
    RemoveContainerByDocker_Request.toDockerHub = this.form.controls['RemoveContainerByDocker_toDockerHub'].value;
    RemoveContainerByDocker_Request.toDockerRegistry = this.form.controls['RemoveContainerByDocker_toDockerRegistry'].value;
    RemoveContainerByDocker_Request.toCoin = this.form.controls['RemoveContainerByDocker_toCoin'].value;
    RemoveContainerByDocker_Request.toUser = this.form.controls['RemoveContainerByDocker_toUser'].value;
    RemoveContainerByDocker_Request.containerID = this.form.controls['RemoveContainerByDocker_containerID'].value;


    this.ContainerService.RemoveContainerByDocker(RemoveContainerByDocker_Request)
      .subscribe(result => {
        console.log(result);
        this.ContainerRemoveContainerByDockerResult = result;
      }, error => {
        console.log(error);
      });
  }
}