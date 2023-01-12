import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDiskOperationService } from "./KvmDiskOperation-service"
import { DeletePartitionFromServer_Post } from './KvmDiskOperation-input'

@Component({
  selector: 'app-KvmDiskOperationDeletePartitionFromServer',
  templateUrl: 'KvmDiskOperation-DeletePartitionFromServer-form.html',
  styleUrls: ['./kvm-disk-operation.component.css']
})

export class KvmDiskOperationDeletePartitionFromServerComponent
  extends BaseFormComponent implements OnInit {

  KvmDiskOperationDeletePartitionFromServerResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDiskOperationService: KvmDiskOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      DeletePartitionFromServer_serverI: new FormControl(),
      DeletePartitionFromServer_serverDecryptPass: new FormControl(),
      DeletePartitionFromServer_serverDevice: new FormControl(),
      DeletePartitionFromServer_partitionNumber: new FormControl(),

    });
  }

  DeletePartitionFromServer_Submit() {
    var DeletePartitionFromServer_Request = <DeletePartitionFromServer_Post>{};
    DeletePartitionFromServer_Request.serverI = this.form.controls['DeletePartitionFromServer_serverI'].value;
    DeletePartitionFromServer_Request.serverDecryptPass = this.form.controls['DeletePartitionFromServer_serverDecryptPass'].value;
    DeletePartitionFromServer_Request.serverDevice = this.form.controls['DeletePartitionFromServer_serverDevice'].value;
    DeletePartitionFromServer_Request.partitionNumber = this.form.controls['DeletePartitionFromServer_partitionNumber'].value;


    this.KvmDiskOperationService.DeletePartitionFromServer(DeletePartitionFromServer_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDiskOperationDeletePartitionFromServerResult = result;
      }, error => {
        console.log(error);
      });
  }
}