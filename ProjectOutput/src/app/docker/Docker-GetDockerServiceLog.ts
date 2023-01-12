import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DockerService } from "./Docker-service"
import { GetDockerServiceLog_Post } from './Docker-input'

@Component({
  selector: 'app-DockerGetDockerServiceLog',
  templateUrl: 'Docker-GetDockerServiceLog-form.html',
  styleUrls: ['./docker.component.css']
})

export class DockerGetDockerServiceLogComponent
  extends BaseFormComponent implements OnInit {

  DockerGetDockerServiceLogResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private DockerService: DockerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetDockerServiceLog_dockerHubI: new FormControl(),
      GetDockerServiceLog_vmConnectionAdminDecryptPass: new FormControl(),
      GetDockerServiceLog_readRecords: new FormControl(),

    });
  }

  GetDockerServiceLog_Submit() {
    var GetDockerServiceLog_Request = <GetDockerServiceLog_Post>{};
    GetDockerServiceLog_Request.dockerHubI = this.form.controls['GetDockerServiceLog_dockerHubI'].value;
    GetDockerServiceLog_Request.vmConnectionAdminDecryptPass = this.form.controls['GetDockerServiceLog_vmConnectionAdminDecryptPass'].value;
    GetDockerServiceLog_Request.readRecords = this.form.controls['GetDockerServiceLog_readRecords'].value;


    this.DockerService.GetDockerServiceLog(GetDockerServiceLog_Request)
      .subscribe(result => {
        console.log(result);
        this.DockerGetDockerServiceLogResult = result;
      }, error => {
        console.log(error);
      });
  }
}