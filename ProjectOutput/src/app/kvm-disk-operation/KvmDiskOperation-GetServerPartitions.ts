import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDiskOperationService } from "./KvmDiskOperation-service"
import { GetServerPartitions_Get } from './KvmDiskOperation-input'

@Component({
  selector: 'app-KvmDiskOperationGetServerPartitions',
  templateUrl: 'KvmDiskOperation-GetServerPartitions-form.html',
  styleUrls: ['./kvm-disk-operation.component.css']
})

export class KvmDiskOperationGetServerPartitionsComponent
  extends BaseFormComponent implements OnInit {

  KvmDiskOperationGetServerPartitionsResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDiskOperationService: KvmDiskOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetServerPartitions_ServerI: new FormControl(),

    });
  }

  GetServerPartitions_Submit() {
    var GetServerPartitions_Request = <GetServerPartitions_Get>{};
    GetServerPartitions_Request.ServerI = this.form.controls['GetServerPartitions_ServerI'].value;


    this.KvmDiskOperationService.GetServerPartitions(GetServerPartitions_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDiskOperationGetServerPartitionsResult = result;
      }, error => {
        console.log(error);
      });
  }
}