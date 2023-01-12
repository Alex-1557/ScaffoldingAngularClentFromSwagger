import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainerService } from "./Container-service"
import { ListImagesByDocker_Post } from './Container-input'

@Component({
  selector: 'app-ContainerListImagesByDocker',
  templateUrl: 'Container-ListImagesByDocker-form.html',
  styleUrls: ['./container.component.css']
})

export class ContainerListImagesByDockerComponent
  extends BaseFormComponent implements OnInit {

  ContainerListImagesByDockerResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ContainerService: ContainerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      ListImagesByDocker_dockerHubI: new FormControl(),
      ListImagesByDocker_dockerHubDecryptPass: new FormControl(),

    });
  }

  ListImagesByDocker_Submit() {
    var ListImagesByDocker_Request = <ListImagesByDocker_Post>{};
    ListImagesByDocker_Request.dockerHubI = this.form.controls['ListImagesByDocker_dockerHubI'].value;
    ListImagesByDocker_Request.dockerHubDecryptPass = this.form.controls['ListImagesByDocker_dockerHubDecryptPass'].value;


    this.ContainerService.ListImagesByDocker(ListImagesByDocker_Request)
      .subscribe(result => {
        console.log(result);
        this.ContainerListImagesByDockerResult = result;
      }, error => {
        console.log(error);
      });
  }
}