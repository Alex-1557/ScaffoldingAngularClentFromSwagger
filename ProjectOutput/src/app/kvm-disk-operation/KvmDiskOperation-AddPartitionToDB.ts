import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDiskOperationService } from "./KvmDiskOperation-service"
import { AddPartitionToDB_Post } from './KvmDiskOperation-input'

@Component({
  selector: 'app-KvmDiskOperationAddPartitionToDB',
  templateUrl: 'KvmDiskOperation-AddPartitionToDB-form.html',
  styleUrls: ['./kvm-disk-operation.component.css']
})

export class KvmDiskOperationAddPartitionToDBComponent
  extends BaseFormComponent implements OnInit {

  KvmDiskOperationAddPartitionToDBResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDiskOperationService: KvmDiskOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      AddPartitionToDB_toKvmStorageDevice: new FormControl(),
      AddPartitionToDB_toKvmLvmDevice: new FormControl(),
      AddPartitionToDB_name: new FormControl(),
      AddPartitionToDB_type: new FormControl(),
      AddPartitionToDB_uuid: new FormControl(),
      AddPartitionToDB_partUUID: new FormControl(),
      AddPartitionToDB_ptType: new FormControl(),
      AddPartitionToDB_partLabel: new FormControl(),
      AddPartitionToDB_blockSize: new FormControl(),
      AddPartitionToDB_size: new FormControl(),
      AddPartitionToDB_start: new FormControl(),
      AddPartitionToDB_end: new FormControl(),
      AddPartitionToDB_sectors: new FormControl(),
      AddPartitionToDB_isKvmInternal: new FormControl(),
      AddPartitionToDB_toVmSpecial: new FormControl(),
      AddPartitionToDB_toVm: new FormControl(),
      AddPartitionToDB_isBootable: new FormControl(),
      AddPartitionToDB_currentState: new FormControl(),

    });
  }

  AddPartitionToDB_Submit() {
    var AddPartitionToDB_Request = <AddPartitionToDB_Post>{};
    AddPartitionToDB_Request.toKvmStorageDevice = this.form.controls['AddPartitionToDB_toKvmStorageDevice'].value;
    AddPartitionToDB_Request.toKvmLvmDevice = this.form.controls['AddPartitionToDB_toKvmLvmDevice'].value;
    AddPartitionToDB_Request.name = this.form.controls['AddPartitionToDB_name'].value;
    AddPartitionToDB_Request.type = this.form.controls['AddPartitionToDB_type'].value;
    AddPartitionToDB_Request.uuid = this.form.controls['AddPartitionToDB_uuid'].value;
    AddPartitionToDB_Request.partUUID = this.form.controls['AddPartitionToDB_partUUID'].value;
    AddPartitionToDB_Request.ptType = this.form.controls['AddPartitionToDB_ptType'].value;
    AddPartitionToDB_Request.partLabel = this.form.controls['AddPartitionToDB_partLabel'].value;
    AddPartitionToDB_Request.blockSize = this.form.controls['AddPartitionToDB_blockSize'].value;
    AddPartitionToDB_Request.size = this.form.controls['AddPartitionToDB_size'].value;
    AddPartitionToDB_Request.start = this.form.controls['AddPartitionToDB_start'].value;
    AddPartitionToDB_Request.end = this.form.controls['AddPartitionToDB_end'].value;
    AddPartitionToDB_Request.sectors = this.form.controls['AddPartitionToDB_sectors'].value;
    AddPartitionToDB_Request.isKvmInternal = this.form.controls['AddPartitionToDB_isKvmInternal'].value;
    AddPartitionToDB_Request.toVmSpecial = this.form.controls['AddPartitionToDB_toVmSpecial'].value;
    AddPartitionToDB_Request.toVm = this.form.controls['AddPartitionToDB_toVm'].value;
    AddPartitionToDB_Request.isBootable = this.form.controls['AddPartitionToDB_isBootable'].value;
    AddPartitionToDB_Request.currentState = this.form.controls['AddPartitionToDB_currentState'].value;


    this.KvmDiskOperationService.AddPartitionToDB(AddPartitionToDB_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDiskOperationAddPartitionToDBResult = result;
      }, error => {
        console.log(error);
      });
  }
}