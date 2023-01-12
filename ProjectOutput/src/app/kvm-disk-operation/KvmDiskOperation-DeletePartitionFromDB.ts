import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDiskOperationService } from "./KvmDiskOperation-service"
import { DeletePartitionFromDB_Get } from './KvmDiskOperation-input'

@Component({
  selector: 'app-KvmDiskOperationDeletePartitionFromDB',
  templateUrl: 'KvmDiskOperation-DeletePartitionFromDB-form.html',
  styleUrls: ['./kvm-disk-operation.component.css']
})

export class KvmDiskOperationDeletePartitionFromDBComponent
  extends BaseFormComponent implements OnInit {

  KvmDiskOperationDeletePartitionFromDBResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDiskOperationService: KvmDiskOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      DeletePartitionFromDB_PartitionI: new FormControl(),

    });
  }

  DeletePartitionFromDB_Submit() {
    var DeletePartitionFromDB_Request = <DeletePartitionFromDB_Get>{};
    DeletePartitionFromDB_Request.PartitionI = this.form.controls['DeletePartitionFromDB_PartitionI'].value;


    this.KvmDiskOperationService.DeletePartitionFromDB(DeletePartitionFromDB_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDiskOperationDeletePartitionFromDBResult = result;
      }, error => {
        console.log(error);
      });
  }
}