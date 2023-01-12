import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DockerService } from "./Docker-service"
import { GetDockerHubRuntimeInfo_Post } from './Docker-input'

@Component({
  selector: 'app-DockerGetDockerHubRuntimeInfo',
  templateUrl: 'Docker-GetDockerHubRuntimeInfo-form.html',
  styleUrls: ['./docker.component.css']
})

export class DockerGetDockerHubRuntimeInfoComponent
  extends BaseFormComponent implements OnInit {

  DockerGetDockerHubRuntimeInfoResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private DockerService: DockerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetDockerHubRuntimeInfo_dockerHubI: new FormControl(),
      GetDockerHubRuntimeInfo_vmConnectionAdminDecryptPass: new FormControl(),
      GetDockerHubRuntimeInfo_dockerHubDecryptPass: new FormControl(),

    });
  }

  GetDockerHubRuntimeInfo_Submit() {
    var GetDockerHubRuntimeInfo_Request = <GetDockerHubRuntimeInfo_Post>{};
    GetDockerHubRuntimeInfo_Request.dockerHubI = this.form.controls['GetDockerHubRuntimeInfo_dockerHubI'].value;
    GetDockerHubRuntimeInfo_Request.vmConnectionAdminDecryptPass = this.form.controls['GetDockerHubRuntimeInfo_vmConnectionAdminDecryptPass'].value;
    GetDockerHubRuntimeInfo_Request.dockerHubDecryptPass = this.form.controls['GetDockerHubRuntimeInfo_dockerHubDecryptPass'].value;


    this.DockerService.GetDockerHubRuntimeInfo(GetDockerHubRuntimeInfo_Request)
      .subscribe(result => {
        console.log(result);
        this.DockerGetDockerHubRuntimeInfoResult = result;
      }, error => {
        console.log(error);
      });
  }
}