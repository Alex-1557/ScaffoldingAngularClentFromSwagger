import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDiskOperationService } from "./KvmDiskOperation-service"
import { AddPartitionToServer_Post } from './KvmDiskOperation-input'

@Component({
  selector: 'app-KvmDiskOperationAddPartitionToServer',
  templateUrl: 'KvmDiskOperation-AddPartitionToServer-form.html',
  styleUrls: ['./kvm-disk-operation.component.css']
})

export class KvmDiskOperationAddPartitionToServerComponent
  extends BaseFormComponent implements OnInit {

  KvmDiskOperationAddPartitionToServerResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDiskOperationService: KvmDiskOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      AddPartitionToServer_serverI: new FormControl(),
      AddPartitionToServer_serverDecryptPass: new FormControl(),
      AddPartitionToServer_serverDevice: new FormControl(),
      AddPartitionToServer_startTrack: new FormControl(),
      AddPartitionToServer_endTrack: new FormControl(),

    });
  }

  AddPartitionToServer_Submit() {
    var AddPartitionToServer_Request = <AddPartitionToServer_Post>{};
    AddPartitionToServer_Request.serverI = this.form.controls['AddPartitionToServer_serverI'].value;
    AddPartitionToServer_Request.serverDecryptPass = this.form.controls['AddPartitionToServer_serverDecryptPass'].value;
    AddPartitionToServer_Request.serverDevice = this.form.controls['AddPartitionToServer_serverDevice'].value;
    AddPartitionToServer_Request.startTrack = this.form.controls['AddPartitionToServer_startTrack'].value;
    AddPartitionToServer_Request.endTrack = this.form.controls['AddPartitionToServer_endTrack'].value;


    this.KvmDiskOperationService.AddPartitionToServer(AddPartitionToServer_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDiskOperationAddPartitionToServerResult = result;
      }, error => {
        console.log(error);
      });
  }
}