import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDiskOperationService } from "./KvmDiskOperation-service"
import { ListDiskDevice_Post } from './KvmDiskOperation-input'

@Component({
  selector: 'app-KvmDiskOperationListDiskDevice',
  templateUrl: 'KvmDiskOperation-ListDiskDevice-form.html',
  styleUrls: ['./kvm-disk-operation.component.css']
})

export class KvmDiskOperationListDiskDeviceComponent
  extends BaseFormComponent implements OnInit {

  KvmDiskOperationListDiskDeviceResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDiskOperationService: KvmDiskOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      ListDiskDevice_serverI: new FormControl(),
      ListDiskDevice_serverDecryptPass: new FormControl(),

    });
  }

  ListDiskDevice_Submit() {
    var ListDiskDevice_Request = <ListDiskDevice_Post>{};
    ListDiskDevice_Request.serverI = this.form.controls['ListDiskDevice_serverI'].value;
    ListDiskDevice_Request.serverDecryptPass = this.form.controls['ListDiskDevice_serverDecryptPass'].value;


    this.KvmDiskOperationService.ListDiskDevice(ListDiskDevice_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDiskOperationListDiskDeviceResult = result;
      }, error => {
        console.log(error);
      });
  }
}