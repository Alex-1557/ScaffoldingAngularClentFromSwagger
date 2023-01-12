import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DockerService } from "./Docker-service"
import { UpdateDockerHubInfo_Post } from './Docker-input'

@Component({
  selector: 'app-DockerUpdateDockerHubInfo',
  templateUrl: 'Docker-UpdateDockerHubInfo-form.html',
  styleUrls: ['./docker.component.css']
})

export class DockerUpdateDockerHubInfoComponent
  extends BaseFormComponent implements OnInit {

  DockerUpdateDockerHubInfoResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private DockerService: DockerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      UpdateDockerHubInfo_dockerHubI: new FormControl(),
      UpdateDockerHubInfo_vmConnectionAdminDecryptPass: new FormControl(),
      UpdateDockerHubInfo_dockerHubDecryptPass: new FormControl(),

    });
  }

  UpdateDockerHubInfo_Submit() {
    var UpdateDockerHubInfo_Request = <UpdateDockerHubInfo_Post>{};
    UpdateDockerHubInfo_Request.dockerHubI = this.form.controls['UpdateDockerHubInfo_dockerHubI'].value;
    UpdateDockerHubInfo_Request.vmConnectionAdminDecryptPass = this.form.controls['UpdateDockerHubInfo_vmConnectionAdminDecryptPass'].value;
    UpdateDockerHubInfo_Request.dockerHubDecryptPass = this.form.controls['UpdateDockerHubInfo_dockerHubDecryptPass'].value;


    this.DockerService.UpdateDockerHubInfo(UpdateDockerHubInfo_Request)
      .subscribe(result => {
        console.log(result);
        this.DockerUpdateDockerHubInfoResult = result;
      }, error => {
        console.log(error);
      });
  }
}