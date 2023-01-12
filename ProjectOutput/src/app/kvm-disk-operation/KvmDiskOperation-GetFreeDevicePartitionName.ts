import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDiskOperationService } from "./KvmDiskOperation-service"
import { GetFreeDevicePartitionName_Post } from './KvmDiskOperation-input'

@Component({
  selector: 'app-KvmDiskOperationGetFreeDevicePartitionName',
  templateUrl: 'KvmDiskOperation-GetFreeDevicePartitionName-form.html',
  styleUrls: ['./kvm-disk-operation.component.css']
})

export class KvmDiskOperationGetFreeDevicePartitionNameComponent
  extends BaseFormComponent implements OnInit {

  KvmDiskOperationGetFreeDevicePartitionNameResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDiskOperationService: KvmDiskOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetFreeDevicePartitionName_serverI: new FormControl(),
      GetFreeDevicePartitionName_serverDecryptPass: new FormControl(),
      GetFreeDevicePartitionName_serverDevice: new FormControl(),

    });
  }

  GetFreeDevicePartitionName_Submit() {
    var GetFreeDevicePartitionName_Request = <GetFreeDevicePartitionName_Post>{};
    GetFreeDevicePartitionName_Request.serverI = this.form.controls['GetFreeDevicePartitionName_serverI'].value;
    GetFreeDevicePartitionName_Request.serverDecryptPass = this.form.controls['GetFreeDevicePartitionName_serverDecryptPass'].value;
    GetFreeDevicePartitionName_Request.serverDevice = this.form.controls['GetFreeDevicePartitionName_serverDevice'].value;


    this.KvmDiskOperationService.GetFreeDevicePartitionName(GetFreeDevicePartitionName_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDiskOperationGetFreeDevicePartitionNameResult = result;
      }, error => {
        console.log(error);
      });
  }
}