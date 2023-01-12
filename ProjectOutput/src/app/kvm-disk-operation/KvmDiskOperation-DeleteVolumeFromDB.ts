import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDiskOperationService } from "./KvmDiskOperation-service"
import { DeleteVolumeFromDB_Post } from './KvmDiskOperation-input'

@Component({
  selector: 'app-KvmDiskOperationDeleteVolumeFromDB',
  templateUrl: 'KvmDiskOperation-DeleteVolumeFromDB-form.html',
  styleUrls: ['./kvm-disk-operation.component.css']
})

export class KvmDiskOperationDeleteVolumeFromDBComponent
  extends BaseFormComponent implements OnInit {

  KvmDiskOperationDeleteVolumeFromDBResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDiskOperationService: KvmDiskOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      DeleteVolumeFromDB_path: new FormControl(),
      DeleteVolumeFromDB_withKvmDevicePartition: new FormControl(),

    });
  }

  DeleteVolumeFromDB_Submit() {
    var DeleteVolumeFromDB_Request = <DeleteVolumeFromDB_Post>{};
    DeleteVolumeFromDB_Request.path = this.form.controls['DeleteVolumeFromDB_path'].value;
    DeleteVolumeFromDB_Request.withKvmDevicePartition = this.form.controls['DeleteVolumeFromDB_withKvmDevicePartition'].value;


    this.KvmDiskOperationService.DeleteVolumeFromDB(DeleteVolumeFromDB_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDiskOperationDeleteVolumeFromDBResult = result;
      }, error => {
        console.log(error);
      });
  }
}