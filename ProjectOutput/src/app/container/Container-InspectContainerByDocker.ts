import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainerService } from "./Container-service"
import { InspectContainerByDocker_Post } from './Container-input'

@Component({
  selector: 'app-ContainerInspectContainerByDocker',
  templateUrl: 'Container-InspectContainerByDocker-form.html',
  styleUrls: ['./container.component.css']
})

export class ContainerInspectContainerByDockerComponent
  extends BaseFormComponent implements OnInit {

  ContainerInspectContainerByDockerResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ContainerService: ContainerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      InspectContainerByDocker_dockerHubI: new FormControl(),
      InspectContainerByDocker_dockerHubDecryptPass: new FormControl(),
      InspectContainerByDocker_containerID: new FormControl(),

    });
  }

  InspectContainerByDocker_Submit() {
    var InspectContainerByDocker_Request = <InspectContainerByDocker_Post>{};
    InspectContainerByDocker_Request.dockerHubI = this.form.controls['InspectContainerByDocker_dockerHubI'].value;
    InspectContainerByDocker_Request.dockerHubDecryptPass = this.form.controls['InspectContainerByDocker_dockerHubDecryptPass'].value;
    InspectContainerByDocker_Request.containerID = this.form.controls['InspectContainerByDocker_containerID'].value;


    this.ContainerService.InspectContainerByDocker(InspectContainerByDocker_Request)
      .subscribe(result => {
        console.log(result);
        this.ContainerInspectContainerByDockerResult = result;
      }, error => {
        console.log(error);
      });
  }
}