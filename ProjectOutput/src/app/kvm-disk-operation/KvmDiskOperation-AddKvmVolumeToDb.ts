import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDiskOperationService } from "./KvmDiskOperation-service"
import { AddKvmVolumeToDb_Post } from './KvmDiskOperation-input'

@Component({
  selector: 'app-KvmDiskOperationAddKvmVolumeToDb',
  templateUrl: 'KvmDiskOperation-AddKvmVolumeToDb-form.html',
  styleUrls: ['./kvm-disk-operation.component.css']
})

export class KvmDiskOperationAddKvmVolumeToDbComponent
  extends BaseFormComponent implements OnInit {

  KvmDiskOperationAddKvmVolumeToDbResult?: any;

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

  AddKvmVolumeToDb_Submit() {
    var AddKvmVolumeToDb_Request = <AddKvmVolumeToDb_Post>{};


    this.KvmDiskOperationService.AddKvmVolumeToDb(AddKvmVolumeToDb_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDiskOperationAddKvmVolumeToDbResult = result;
      }, error => {
        console.log(error);
      });
  }
}