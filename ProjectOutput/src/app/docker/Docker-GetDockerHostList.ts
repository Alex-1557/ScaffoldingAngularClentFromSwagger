import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DockerService } from "./Docker-service"
import { GetDockerHostList_Get } from './Docker-input'

@Component({
  selector: 'app-DockerGetDockerHostList',
  templateUrl: 'Docker-GetDockerHostList-form.html',
  styleUrls: ['./docker.component.css']
})

export class DockerGetDockerHostListComponent
  extends BaseFormComponent implements OnInit {

  DockerGetDockerHostListResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private DockerService: DockerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({

    });
  }

  GetDockerHostList_Submit() {
    var GetDockerHostList_Request = <GetDockerHostList_Get>{};


    this.DockerService.GetDockerHostList(GetDockerHostList_Request)
      .subscribe(result => {
        console.log(result);
        this.DockerGetDockerHostListResult = result;
      }, error => {
        console.log(error);
      });
  }
}