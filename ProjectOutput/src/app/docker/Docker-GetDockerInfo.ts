import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DockerService } from "./Docker-service"
import { GetDockerInfo_Post } from './Docker-input'

@Component({
  selector: 'app-DockerGetDockerInfo',
  templateUrl: 'Docker-GetDockerInfo-form.html',
  styleUrls: ['./docker.component.css']
})

export class DockerGetDockerInfoComponent
  extends BaseFormComponent implements OnInit {

  DockerGetDockerInfoResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private DockerService: DockerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetDockerInfo_dockerHubI: new FormControl(),
      GetDockerInfo_dockerHubDecryptPass: new FormControl(),

    });
  }

  GetDockerInfo_Submit() {
    var GetDockerInfo_Request = <GetDockerInfo_Post>{};
    GetDockerInfo_Request.dockerHubI = this.form.controls['GetDockerInfo_dockerHubI'].value;
    GetDockerInfo_Request.dockerHubDecryptPass = this.form.controls['GetDockerInfo_dockerHubDecryptPass'].value;


    this.DockerService.GetDockerInfo(GetDockerInfo_Request)
      .subscribe(result => {
        console.log(result);
        this.DockerGetDockerInfoResult = result;
      }, error => {
        console.log(error);
      });
  }
}