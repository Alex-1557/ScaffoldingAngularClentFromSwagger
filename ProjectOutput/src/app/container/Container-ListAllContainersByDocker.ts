import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainerService } from "./Container-service"
import { ListAllContainersByDocker_Post } from './Container-input'

@Component({
  selector: 'app-ContainerListAllContainersByDocker',
  templateUrl: 'Container-ListAllContainersByDocker-form.html',
  styleUrls: ['./container.component.css']
})

export class ContainerListAllContainersByDockerComponent
  extends BaseFormComponent implements OnInit {

  ContainerListAllContainersByDockerResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ContainerService: ContainerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      ListAllContainersByDocker_dockerHubI: new FormControl(),
      ListAllContainersByDocker_dockerHubDecryptPass: new FormControl(),

    });
  }

  ListAllContainersByDocker_Submit() {
    var ListAllContainersByDocker_Request = <ListAllContainersByDocker_Post>{};
    ListAllContainersByDocker_Request.dockerHubI = this.form.controls['ListAllContainersByDocker_dockerHubI'].value;
    ListAllContainersByDocker_Request.dockerHubDecryptPass = this.form.controls['ListAllContainersByDocker_dockerHubDecryptPass'].value;


    this.ContainerService.ListAllContainersByDocker(ListAllContainersByDocker_Request)
      .subscribe(result => {
        console.log(result);
        this.ContainerListAllContainersByDockerResult = result;
      }, error => {
        console.log(error);
      });
  }
}