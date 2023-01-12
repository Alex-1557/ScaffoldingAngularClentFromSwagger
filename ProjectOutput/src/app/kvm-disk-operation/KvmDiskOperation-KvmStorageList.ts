import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDiskOperationService } from "./KvmDiskOperation-service"
import { KvmStorageList_Post } from './KvmDiskOperation-input'

@Component({
  selector: 'app-KvmDiskOperationKvmStorageList',
  templateUrl: 'KvmDiskOperation-KvmStorageList-form.html',
  styleUrls: ['./kvm-disk-operation.component.css']
})

export class KvmDiskOperationKvmStorageListComponent
  extends BaseFormComponent implements OnInit {

  KvmDiskOperationKvmStorageListResult?: any;

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

  KvmStorageList_Submit() {
    var KvmStorageList_Request = <KvmStorageList_Post>{};


    this.KvmDiskOperationService.KvmStorageList(KvmStorageList_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDiskOperationKvmStorageListResult = result;
      }, error => {
        console.log(error);
      });
  }
}