import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DockerService } from "./Docker-service"
import { UpdateDockerHubDbConfigInfo_Post } from './Docker-input'

@Component({
  selector: 'app-DockerUpdateDockerHubDbConfigInfo',
  templateUrl: 'Docker-UpdateDockerHubDbConfigInfo-form.html',
  styleUrls: ['./docker.component.css']
})

export class DockerUpdateDockerHubDbConfigInfoComponent
  extends BaseFormComponent implements OnInit {

  DockerUpdateDockerHubDbConfigInfoResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private DockerService: DockerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      UpdateDockerHubDbConfigInfo_dockerHubI: new FormControl(),
      UpdateDockerHubDbConfigInfo_vmConnectionAdminDecryptPass: new FormControl(),
      UpdateDockerHubDbConfigInfo_dockerHubDecryptPass: new FormControl(),

    });
  }

  UpdateDockerHubDbConfigInfo_Submit() {
    var UpdateDockerHubDbConfigInfo_Request = <UpdateDockerHubDbConfigInfo_Post>{};
    UpdateDockerHubDbConfigInfo_Request.dockerHubI = this.form.controls['UpdateDockerHubDbConfigInfo_dockerHubI'].value;
    UpdateDockerHubDbConfigInfo_Request.vmConnectionAdminDecryptPass = this.form.controls['UpdateDockerHubDbConfigInfo_vmConnectionAdminDecryptPass'].value;
    UpdateDockerHubDbConfigInfo_Request.dockerHubDecryptPass = this.form.controls['UpdateDockerHubDbConfigInfo_dockerHubDecryptPass'].value;


    this.DockerService.UpdateDockerHubDbConfigInfo(UpdateDockerHubDbConfigInfo_Request)
      .subscribe(result => {
        console.log(result);
        this.DockerUpdateDockerHubDbConfigInfoResult = result;
      }, error => {
        console.log(error);
      });
  }
}