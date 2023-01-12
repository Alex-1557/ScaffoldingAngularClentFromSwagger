import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DockerService } from "./Docker-service"
import { GetDockerHubDbInfo_Get } from './Docker-input'

@Component({
  selector: 'app-DockerGetDockerHubDbInfo',
  templateUrl: 'Docker-GetDockerHubDbInfo-form.html',
  styleUrls: ['./docker.component.css']
})

export class DockerGetDockerHubDbInfoComponent
  extends BaseFormComponent implements OnInit {

  DockerGetDockerHubDbInfoResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private DockerService: DockerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetDockerHubDbInfo_I: new FormControl(),

    });
  }

  GetDockerHubDbInfo_Submit() {
    var GetDockerHubDbInfo_Request = <GetDockerHubDbInfo_Get>{};
    GetDockerHubDbInfo_Request.I = this.form.controls['GetDockerHubDbInfo_I'].value;


    this.DockerService.GetDockerHubDbInfo(GetDockerHubDbInfo_Request)
      .subscribe(result => {
        console.log(result);
        this.DockerGetDockerHubDbInfoResult = result;
      }, error => {
        console.log(error);
      });
  }
}