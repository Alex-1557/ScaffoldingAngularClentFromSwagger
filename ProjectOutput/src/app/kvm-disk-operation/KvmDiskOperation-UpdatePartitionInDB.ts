import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDiskOperationService } from "./KvmDiskOperation-service"
import { UpdatePartitionInDB_Post } from './KvmDiskOperation-input'

@Component({
  selector: 'app-KvmDiskOperationUpdatePartitionInDB',
  templateUrl: 'KvmDiskOperation-UpdatePartitionInDB-form.html',
  styleUrls: ['./kvm-disk-operation.component.css']
})

export class KvmDiskOperationUpdatePartitionInDBComponent
  extends BaseFormComponent implements OnInit {

  KvmDiskOperationUpdatePartitionInDBResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDiskOperationService: KvmDiskOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      UpdatePartitionInDB_serverI: new FormControl(),
      UpdatePartitionInDB_serverDecryptPass: new FormControl(),

    });
  }

  UpdatePartitionInDB_Submit() {
    var UpdatePartitionInDB_Request = <UpdatePartitionInDB_Post>{};
    UpdatePartitionInDB_Request.serverI = this.form.controls['UpdatePartitionInDB_serverI'].value;
    UpdatePartitionInDB_Request.serverDecryptPass = this.form.controls['UpdatePartitionInDB_serverDecryptPass'].value;


    this.KvmDiskOperationService.UpdatePartitionInDB(UpdatePartitionInDB_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDiskOperationUpdatePartitionInDBResult = result;
      }, error => {
        console.log(error);
      });
  }
}