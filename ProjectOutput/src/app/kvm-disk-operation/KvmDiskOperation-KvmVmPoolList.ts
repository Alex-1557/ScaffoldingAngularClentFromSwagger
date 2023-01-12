import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDiskOperationService } from "./KvmDiskOperation-service"
import { KvmVmPoolList_Post } from './KvmDiskOperation-input'

@Component({
  selector: 'app-KvmDiskOperationKvmVmPoolList',
  templateUrl: 'KvmDiskOperation-KvmVmPoolList-form.html',
  styleUrls: ['./kvm-disk-operation.component.css']
})

export class KvmDiskOperationKvmVmPoolListComponent
  extends BaseFormComponent implements OnInit {

  KvmDiskOperationKvmVmPoolListResult?: any;

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

  KvmVmPoolList_Submit() {
    var KvmVmPoolList_Request = <KvmVmPoolList_Post>{};


    this.KvmDiskOperationService.KvmVmPoolList(KvmVmPoolList_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDiskOperationKvmVmPoolListResult = result;
      }, error => {
        console.log(error);
      });
  }
}