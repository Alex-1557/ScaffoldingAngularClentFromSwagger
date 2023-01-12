import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DockerService } from "./Docker-service"
import { DeleteDockerHubFromDb_Post } from './Docker-input'

@Component({
  selector: 'app-DockerDeleteDockerHubFromDb',
  templateUrl: 'Docker-DeleteDockerHubFromDb-form.html',
  styleUrls: ['./docker.component.css']
})

export class DockerDeleteDockerHubFromDbComponent
  extends BaseFormComponent implements OnInit {

  DockerDeleteDockerHubFromDbResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private DockerService: DockerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      DeleteDockerHubFromDb_dockerHubI: new FormControl(),
      DeleteDockerHubFromDb_vmConnectionAdminDecryptPass: new FormControl(),

    });
  }

  DeleteDockerHubFromDb_Submit() {
    var DeleteDockerHubFromDb_Request = <DeleteDockerHubFromDb_Post>{};
    DeleteDockerHubFromDb_Request.dockerHubI = this.form.controls['DeleteDockerHubFromDb_dockerHubI'].value;
    DeleteDockerHubFromDb_Request.vmConnectionAdminDecryptPass = this.form.controls['DeleteDockerHubFromDb_vmConnectionAdminDecryptPass'].value;


    this.DockerService.DeleteDockerHubFromDb(DeleteDockerHubFromDb_Request)
      .subscribe(result => {
        console.log(result);
        this.DockerDeleteDockerHubFromDbResult = result;
      }, error => {
        console.log(error);
      });
  }
}