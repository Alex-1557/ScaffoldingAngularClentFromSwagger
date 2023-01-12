import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDiskOperationService } from "./KvmDiskOperation-service"
import { AddKvmVolumeToServer_Post } from './KvmDiskOperation-input'

@Component({
  selector: 'app-KvmDiskOperationAddKvmVolumeToServer',
  templateUrl: 'KvmDiskOperation-AddKvmVolumeToServer-form.html',
  styleUrls: ['./kvm-disk-operation.component.css']
})

export class KvmDiskOperationAddKvmVolumeToServerComponent
  extends BaseFormComponent implements OnInit {

  KvmDiskOperationAddKvmVolumeToServerResult?: any;

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

  AddKvmVolumeToServer_Submit() {
    var AddKvmVolumeToServer_Request = <AddKvmVolumeToServer_Post>{};


    this.KvmDiskOperationService.AddKvmVolumeToServer(AddKvmVolumeToServer_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDiskOperationAddKvmVolumeToServerResult = result;
      }, error => {
        console.log(error);
      });
  }
}