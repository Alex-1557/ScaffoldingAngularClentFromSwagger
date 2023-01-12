import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainerService } from "./Container-service"
import { ListVolumesByDocker_Post } from './Container-input'

@Component({
  selector: 'app-ContainerListVolumesByDocker',
  templateUrl: 'Container-ListVolumesByDocker-form.html',
  styleUrls: ['./container.component.css']
})

export class ContainerListVolumesByDockerComponent
  extends BaseFormComponent implements OnInit {

  ContainerListVolumesByDockerResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ContainerService: ContainerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      ListVolumesByDocker_dockerHubI: new FormControl(),
      ListVolumesByDocker_dockerHubDecryptPass: new FormControl(),

    });
  }

  ListVolumesByDocker_Submit() {
    var ListVolumesByDocker_Request = <ListVolumesByDocker_Post>{};
    ListVolumesByDocker_Request.dockerHubI = this.form.controls['ListVolumesByDocker_dockerHubI'].value;
    ListVolumesByDocker_Request.dockerHubDecryptPass = this.form.controls['ListVolumesByDocker_dockerHubDecryptPass'].value;


    this.ContainerService.ListVolumesByDocker(ListVolumesByDocker_Request)
      .subscribe(result => {
        console.log(result);
        this.ContainerListVolumesByDockerResult = result;
      }, error => {
        console.log(error);
      });
  }
}