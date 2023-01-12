import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDiskOperationService } from "./KvmDiskOperation-service"
import { GetFreeServerPartitions_Get } from './KvmDiskOperation-input'

@Component({
  selector: 'app-KvmDiskOperationGetFreeServerPartitions',
  templateUrl: 'KvmDiskOperation-GetFreeServerPartitions-form.html',
  styleUrls: ['./kvm-disk-operation.component.css']
})

export class KvmDiskOperationGetFreeServerPartitionsComponent
  extends BaseFormComponent implements OnInit {

  KvmDiskOperationGetFreeServerPartitionsResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDiskOperationService: KvmDiskOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetFreeServerPartitions_ServerI: new FormControl(),
      GetFreeServerPartitions_GapOnly: new FormControl(),
      GetFreeServerPartitions_OneDeviceOnly: new FormControl(),

    });
  }

  GetFreeServerPartitions_Submit() {
    var GetFreeServerPartitions_Request = <GetFreeServerPartitions_Get>{};
    GetFreeServerPartitions_Request.ServerI = this.form.controls['GetFreeServerPartitions_ServerI'].value;
    GetFreeServerPartitions_Request.GapOnly = this.form.controls['GetFreeServerPartitions_GapOnly'].value;
    GetFreeServerPartitions_Request.OneDeviceOnly = this.form.controls['GetFreeServerPartitions_OneDeviceOnly'].value;


    this.KvmDiskOperationService.GetFreeServerPartitions(GetFreeServerPartitions_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDiskOperationGetFreeServerPartitionsResult = result;
      }, error => {
        console.log(error);
      });
  }
}