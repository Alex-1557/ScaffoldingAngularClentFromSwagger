import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDiskOperationService } from "./KvmDiskOperation-service"
import { ListLvmDevice_Post } from './KvmDiskOperation-input'

@Component({
  selector: 'app-KvmDiskOperationListLvmDevice',
  templateUrl: 'KvmDiskOperation-ListLvmDevice-form.html',
  styleUrls: ['./kvm-disk-operation.component.css']
})

export class KvmDiskOperationListLvmDeviceComponent
  extends BaseFormComponent implements OnInit {

  KvmDiskOperationListLvmDeviceResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDiskOperationService: KvmDiskOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      ListLvmDevice_serverI: new FormControl(),
      ListLvmDevice_serverDecryptPass: new FormControl(),

    });
  }

  ListLvmDevice_Submit() {
    var ListLvmDevice_Request = <ListLvmDevice_Post>{};
    ListLvmDevice_Request.serverI = this.form.controls['ListLvmDevice_serverI'].value;
    ListLvmDevice_Request.serverDecryptPass = this.form.controls['ListLvmDevice_serverDecryptPass'].value;


    this.KvmDiskOperationService.ListLvmDevice(ListLvmDevice_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDiskOperationListLvmDeviceResult = result;
      }, error => {
        console.log(error);
      });
  }
}