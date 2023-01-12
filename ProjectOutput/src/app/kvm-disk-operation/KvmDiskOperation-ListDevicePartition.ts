import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDiskOperationService } from "./KvmDiskOperation-service"
import { ListDevicePartition_Post } from './KvmDiskOperation-input'

@Component({
  selector: 'app-KvmDiskOperationListDevicePartition',
  templateUrl: 'KvmDiskOperation-ListDevicePartition-form.html',
  styleUrls: ['./kvm-disk-operation.component.css']
})

export class KvmDiskOperationListDevicePartitionComponent
  extends BaseFormComponent implements OnInit {

  KvmDiskOperationListDevicePartitionResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDiskOperationService: KvmDiskOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      ListDevicePartition_serverI: new FormControl(),
      ListDevicePartition_serverDecryptPass: new FormControl(),
      ListDevicePartition_serverDevice: new FormControl(),

    });
  }

  ListDevicePartition_Submit() {
    var ListDevicePartition_Request = <ListDevicePartition_Post>{};
    ListDevicePartition_Request.serverI = this.form.controls['ListDevicePartition_serverI'].value;
    ListDevicePartition_Request.serverDecryptPass = this.form.controls['ListDevicePartition_serverDecryptPass'].value;
    ListDevicePartition_Request.serverDevice = this.form.controls['ListDevicePartition_serverDevice'].value;


    this.KvmDiskOperationService.ListDevicePartition(ListDevicePartition_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDiskOperationListDevicePartitionResult = result;
      }, error => {
        console.log(error);
      });
  }
}