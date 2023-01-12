import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DockerService } from "./Docker-service"
import { GetDockerEvents_Post } from './Docker-input'

@Component({
  selector: 'app-DockerGetDockerEvents',
  templateUrl: 'Docker-GetDockerEvents-form.html',
  styleUrls: ['./docker.component.css']
})

export class DockerGetDockerEventsComponent
  extends BaseFormComponent implements OnInit {

  DockerGetDockerEventsResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private DockerService: DockerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetDockerEvents_dockerHubI: new FormControl(),
      GetDockerEvents_dockerHubDecryptPass: new FormControl(),

    });
  }

  GetDockerEvents_Submit() {
    var GetDockerEvents_Request = <GetDockerEvents_Post>{};
    GetDockerEvents_Request.dockerHubI = this.form.controls['GetDockerEvents_dockerHubI'].value;
    GetDockerEvents_Request.dockerHubDecryptPass = this.form.controls['GetDockerEvents_dockerHubDecryptPass'].value;


    this.DockerService.GetDockerEvents(GetDockerEvents_Request)
      .subscribe(result => {
        console.log(result);
        this.DockerGetDockerEventsResult = result;
      }, error => {
        console.log(error);
      });
  }
}