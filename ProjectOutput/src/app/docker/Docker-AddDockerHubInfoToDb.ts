import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DockerService } from "./Docker-service"
import { AddDockerHubInfoToDb_Post } from './Docker-input'

@Component({
  selector: 'app-DockerAddDockerHubInfoToDb',
  templateUrl: 'Docker-AddDockerHubInfoToDb-form.html',
  styleUrls: ['./docker.component.css']
})

export class DockerAddDockerHubInfoToDbComponent
  extends BaseFormComponent implements OnInit {

  DockerAddDockerHubInfoToDbResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private DockerService: DockerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      AddDockerHubInfoToDb_newDockerJsonInfo: new FormControl(),

    });
  }

  AddDockerHubInfoToDb_Submit() {
    var AddDockerHubInfoToDb_Request = <AddDockerHubInfoToDb_Post>{};
    AddDockerHubInfoToDb_Request.newDockerJsonInfo = this.form.controls['AddDockerHubInfoToDb_newDockerJsonInfo'].value;


    this.DockerService.AddDockerHubInfoToDb(AddDockerHubInfoToDb_Request)
      .subscribe(result => {
        console.log(result);
        this.DockerAddDockerHubInfoToDbResult = result;
      }, error => {
        console.log(error);
      });
  }
}