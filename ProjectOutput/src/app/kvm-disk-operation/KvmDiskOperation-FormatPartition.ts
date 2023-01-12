import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDiskOperationService } from "./KvmDiskOperation-service"
import { FormatPartition_Post } from './KvmDiskOperation-input'

@Component({
  selector: 'app-KvmDiskOperationFormatPartition',
  templateUrl: 'KvmDiskOperation-FormatPartition-form.html',
  styleUrls: ['./kvm-disk-operation.component.css']
})

export class KvmDiskOperationFormatPartitionComponent
  extends BaseFormComponent implements OnInit {

  KvmDiskOperationFormatPartitionResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDiskOperationService: KvmDiskOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      FormatPartition_serverI: new FormControl(),
      FormatPartition_serverDecryptPass: new FormControl(),
      FormatPartition_serverDevice: new FormControl(),

    });
  }

  FormatPartition_Submit() {
    var FormatPartition_Request = <FormatPartition_Post>{};
    FormatPartition_Request.serverI = this.form.controls['FormatPartition_serverI'].value;
    FormatPartition_Request.serverDecryptPass = this.form.controls['FormatPartition_serverDecryptPass'].value;
    FormatPartition_Request.serverDevice = this.form.controls['FormatPartition_serverDevice'].value;


    this.KvmDiskOperationService.FormatPartition(FormatPartition_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDiskOperationFormatPartitionResult = result;
      }, error => {
        console.log(error);
      });
  }
}