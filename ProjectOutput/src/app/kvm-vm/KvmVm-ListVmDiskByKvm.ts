import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmVmService } from "./KvmVm-service"
import { ListVmDiskByKvm_Post } from './KvmVm-input'

@Component({
  selector: 'app-KvmVmListVmDiskByKvm',
  templateUrl: 'KvmVm-ListVmDiskByKvm-form.html',
  styleUrls: ['./kvm-vm.component.css']
})

export class KvmVmListVmDiskByKvmComponent
  extends BaseFormComponent implements OnInit {

  KvmVmListVmDiskByKvmResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmVmService: KvmVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      ListVmDiskByKvm_serverI: new FormControl(),
      ListVmDiskByKvm_serverDecryptPass: new FormControl(),
      ListVmDiskByKvm_vmName: new FormControl(),

    });
  }

  ListVmDiskByKvm_Submit() {
    var ListVmDiskByKvm_Request = <ListVmDiskByKvm_Post>{};
    ListVmDiskByKvm_Request.serverI = this.form.controls['ListVmDiskByKvm_serverI'].value;
    ListVmDiskByKvm_Request.serverDecryptPass = this.form.controls['ListVmDiskByKvm_serverDecryptPass'].value;
    ListVmDiskByKvm_Request.vmName = this.form.controls['ListVmDiskByKvm_vmName'].value;


    this.KvmVmService.ListVmDiskByKvm(ListVmDiskByKvm_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmVmListVmDiskByKvmResult = result;
      }, error => {
        console.log(error);
      });
  }
}