import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainerService } from "./Container-service"
import { StartContainerRaw_Post } from './Container-input'

@Component({
  selector: 'app-ContainerStartContainerRaw',
  templateUrl: 'Container-StartContainerRaw-form.html',
  styleUrls: ['./container.component.css']
})

export class ContainerStartContainerRawComponent
  extends BaseFormComponent implements OnInit {

  ContainerStartContainerRawResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ContainerService: ContainerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      StartContainerRaw_dockerHubI: new FormControl(),
      StartContainerRaw_dockerHubDecryptPass: new FormControl(),
      StartContainerRaw_vmConnectionAdminDecryptPass: new FormControl(),
      StartContainerRaw_bashCmd: new FormControl(),
      StartContainerRaw_addSudoPass: new FormControl(),

    });
  }

  StartContainerRaw_Submit() {
    var StartContainerRaw_Request = <StartContainerRaw_Post>{};
    StartContainerRaw_Request.dockerHubI = this.form.controls['StartContainerRaw_dockerHubI'].value;
    StartContainerRaw_Request.dockerHubDecryptPass = this.form.controls['StartContainerRaw_dockerHubDecryptPass'].value;
    StartContainerRaw_Request.vmConnectionAdminDecryptPass = this.form.controls['StartContainerRaw_vmConnectionAdminDecryptPass'].value;
    StartContainerRaw_Request.bashCmd = this.form.controls['StartContainerRaw_bashCmd'].value;
    StartContainerRaw_Request.addSudoPass = this.form.controls['StartContainerRaw_addSudoPass'].value;


    this.ContainerService.StartContainerRaw(StartContainerRaw_Request)
      .subscribe(result => {
        console.log(result);
        this.ContainerStartContainerRawResult = result;
      }, error => {
        console.log(error);
      });
  }
}