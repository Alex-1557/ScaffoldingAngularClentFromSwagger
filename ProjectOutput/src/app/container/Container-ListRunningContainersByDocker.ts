import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainerService } from "./Container-service"
import { ListRunningContainersByDocker_Post } from './Container-input'

@Component({
  selector: 'app-ContainerListRunningContainersByDocker',
  templateUrl: 'Container-ListRunningContainersByDocker-form.html',
  styleUrls: ['./container.component.css']
})

export class ContainerListRunningContainersByDockerComponent
  extends BaseFormComponent implements OnInit {

  ContainerListRunningContainersByDockerResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ContainerService: ContainerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      ListRunningContainersByDocker_dockerHubI: new FormControl(),
      ListRunningContainersByDocker_dockerHubDecryptPass: new FormControl(),

    });
  }

  ListRunningContainersByDocker_Submit() {
    var ListRunningContainersByDocker_Request = <ListRunningContainersByDocker_Post>{};
    ListRunningContainersByDocker_Request.dockerHubI = this.form.controls['ListRunningContainersByDocker_dockerHubI'].value;
    ListRunningContainersByDocker_Request.dockerHubDecryptPass = this.form.controls['ListRunningContainersByDocker_dockerHubDecryptPass'].value;


    this.ContainerService.ListRunningContainersByDocker(ListRunningContainersByDocker_Request)
      .subscribe(result => {
        console.log(result);
        this.ContainerListRunningContainersByDockerResult = result;
      }, error => {
        console.log(error);
      });
  }
}