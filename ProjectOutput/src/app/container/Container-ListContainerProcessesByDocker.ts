import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainerService } from "./Container-service"
import { ListContainerProcessesByDocker_Post } from './Container-input'

@Component({
  selector: 'app-ContainerListContainerProcessesByDocker',
  templateUrl: 'Container-ListContainerProcessesByDocker-form.html',
  styleUrls: ['./container.component.css']
})

export class ContainerListContainerProcessesByDockerComponent
  extends BaseFormComponent implements OnInit {

  ContainerListContainerProcessesByDockerResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ContainerService: ContainerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      ListContainerProcessesByDocker_dockerHubI: new FormControl(),
      ListContainerProcessesByDocker_dockerHubDecryptPass: new FormControl(),
      ListContainerProcessesByDocker_containerID: new FormControl(),

    });
  }

  ListContainerProcessesByDocker_Submit() {
    var ListContainerProcessesByDocker_Request = <ListContainerProcessesByDocker_Post>{};
    ListContainerProcessesByDocker_Request.dockerHubI = this.form.controls['ListContainerProcessesByDocker_dockerHubI'].value;
    ListContainerProcessesByDocker_Request.dockerHubDecryptPass = this.form.controls['ListContainerProcessesByDocker_dockerHubDecryptPass'].value;
    ListContainerProcessesByDocker_Request.containerID = this.form.controls['ListContainerProcessesByDocker_containerID'].value;


    this.ContainerService.ListContainerProcessesByDocker(ListContainerProcessesByDocker_Request)
      .subscribe(result => {
        console.log(result);
        this.ContainerListContainerProcessesByDockerResult = result;
      }, error => {
        console.log(error);
      });
  }
}