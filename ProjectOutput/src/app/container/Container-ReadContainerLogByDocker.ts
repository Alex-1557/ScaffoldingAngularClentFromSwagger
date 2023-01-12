import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainerService } from "./Container-service"
import { ReadContainerLogByDocker_Post } from './Container-input'

@Component({
  selector: 'app-ContainerReadContainerLogByDocker',
  templateUrl: 'Container-ReadContainerLogByDocker-form.html',
  styleUrls: ['./container.component.css']
})

export class ContainerReadContainerLogByDockerComponent
  extends BaseFormComponent implements OnInit {

  ContainerReadContainerLogByDockerResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ContainerService: ContainerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      ReadContainerLogByDocker_dockerHubI: new FormControl(),
      ReadContainerLogByDocker_dockerHubDecryptPass: new FormControl(),
      ReadContainerLogByDocker_containerID: new FormControl(),

    });
  }

  ReadContainerLogByDocker_Submit() {
    var ReadContainerLogByDocker_Request = <ReadContainerLogByDocker_Post>{};
    ReadContainerLogByDocker_Request.dockerHubI = this.form.controls['ReadContainerLogByDocker_dockerHubI'].value;
    ReadContainerLogByDocker_Request.dockerHubDecryptPass = this.form.controls['ReadContainerLogByDocker_dockerHubDecryptPass'].value;
    ReadContainerLogByDocker_Request.containerID = this.form.controls['ReadContainerLogByDocker_containerID'].value;


    this.ContainerService.ReadContainerLogByDocker(ReadContainerLogByDocker_Request)
      .subscribe(result => {
        console.log(result);
        this.ContainerReadContainerLogByDockerResult = result;
      }, error => {
        console.log(error);
      });
  }
}