import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContainerService } from "./Container-service"
import { StartMasterNodeContainerByBash_Post } from './Container-input'

@Component({
  selector: 'app-ContainerStartMasterNodeContainerByBash',
  templateUrl: 'Container-StartMasterNodeContainerByBash-form.html',
  styleUrls: ['./container.component.css']
})

export class ContainerStartMasterNodeContainerByBashComponent
  extends BaseFormComponent implements OnInit {

  ContainerStartMasterNodeContainerByBashResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ContainerService: ContainerService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      StartMasterNodeContainerByBash_vmConnectionAdminDecryptPass: new FormControl(),
      StartMasterNodeContainerByBash_toDockerHub: new FormControl(),
      StartMasterNodeContainerByBash_toDockerRegistry: new FormControl(),
      StartMasterNodeContainerByBash_toCoin: new FormControl(),
      StartMasterNodeContainerByBash_toUser: new FormControl(),
      StartMasterNodeContainerByBash_name: new FormControl(),
      StartMasterNodeContainerByBash_externalIP: new FormControl(),
      StartMasterNodeContainerByBash_port: new FormControl(),
      StartMasterNodeContainerByBash_exposePort: new FormControl(),
      StartMasterNodeContainerByBash_privKey: new FormControl(),
      StartMasterNodeContainerByBash_txIndex: new FormControl(),
      StartMasterNodeContainerByBash_seedNode: new FormControl(),

    });
  }

  StartMasterNodeContainerByBash_Submit() {
    var StartMasterNodeContainerByBash_Request = <StartMasterNodeContainerByBash_Post>{};
    StartMasterNodeContainerByBash_Request.vmConnectionAdminDecryptPass = this.form.controls['StartMasterNodeContainerByBash_vmConnectionAdminDecryptPass'].value;
    StartMasterNodeContainerByBash_Request.toDockerHub = this.form.controls['StartMasterNodeContainerByBash_toDockerHub'].value;
    StartMasterNodeContainerByBash_Request.toDockerRegistry = this.form.controls['StartMasterNodeContainerByBash_toDockerRegistry'].value;
    StartMasterNodeContainerByBash_Request.toCoin = this.form.controls['StartMasterNodeContainerByBash_toCoin'].value;
    StartMasterNodeContainerByBash_Request.toUser = this.form.controls['StartMasterNodeContainerByBash_toUser'].value;
    StartMasterNodeContainerByBash_Request.name = this.form.controls['StartMasterNodeContainerByBash_name'].value;
    StartMasterNodeContainerByBash_Request.externalIP = this.form.controls['StartMasterNodeContainerByBash_externalIP'].value;
    StartMasterNodeContainerByBash_Request.port = this.form.controls['StartMasterNodeContainerByBash_port'].value;
    StartMasterNodeContainerByBash_Request.exposePort = this.form.controls['StartMasterNodeContainerByBash_exposePort'].value;
    StartMasterNodeContainerByBash_Request.privKey = this.form.controls['StartMasterNodeContainerByBash_privKey'].value;
    StartMasterNodeContainerByBash_Request.txIndex = this.form.controls['StartMasterNodeContainerByBash_txIndex'].value;
    StartMasterNodeContainerByBash_Request.seedNode = this.form.controls['StartMasterNodeContainerByBash_seedNode'].value;


    this.ContainerService.StartMasterNodeContainerByBash(StartMasterNodeContainerByBash_Request)
      .subscribe(result => {
        console.log(result);
        this.ContainerStartMasterNodeContainerByBashResult = result;
      }, error => {
        console.log(error);
      });
  }
}