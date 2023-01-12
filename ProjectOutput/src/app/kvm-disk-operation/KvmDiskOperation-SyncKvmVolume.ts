import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDiskOperationService } from "./KvmDiskOperation-service"
import { SyncKvmVolume_Post } from './KvmDiskOperation-input'

@Component({
  selector: 'app-KvmDiskOperationSyncKvmVolume',
  templateUrl: 'KvmDiskOperation-SyncKvmVolume-form.html',
  styleUrls: ['./kvm-disk-operation.component.css']
})

export class KvmDiskOperationSyncKvmVolumeComponent
  extends BaseFormComponent implements OnInit {

  KvmDiskOperationSyncKvmVolumeResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDiskOperationService: KvmDiskOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({

    });
  }

  SyncKvmVolume_Submit() {
    var SyncKvmVolume_Request = <SyncKvmVolume_Post>{};


    this.KvmDiskOperationService.SyncKvmVolume(SyncKvmVolume_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDiskOperationSyncKvmVolumeResult = result;
      }, error => {
        console.log(error);
      });
  }
}