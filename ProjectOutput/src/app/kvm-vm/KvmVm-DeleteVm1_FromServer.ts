import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmVmService } from "./KvmVm-service"
import { DeleteVm1_FromServer_Post } from './KvmVm-input'

@Component({
  selector: 'app-KvmVmDeleteVm1_FromServer',
  templateUrl: 'KvmVm-DeleteVm1_FromServer-form.html',
  styleUrls: ['./kvm-vm.component.css']
})

export class KvmVmDeleteVm1_FromServerComponent
  extends BaseFormComponent implements OnInit {

  KvmVmDeleteVm1_FromServerResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmVmService: KvmVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      DeleteVm1_FromServer_serverI: new FormControl(),
      DeleteVm1_FromServer_serverDecryptPass: new FormControl(),
      DeleteVm1_FromServer_vmI: new FormControl(),
      DeleteVm1_FromServer_removeAllStorage: new FormControl(),

    });
  }

  DeleteVm1_FromServer_Submit() {
    var DeleteVm1_FromServer_Request = <DeleteVm1_FromServer_Post>{};
    DeleteVm1_FromServer_Request.serverI = this.form.controls['DeleteVm1_FromServer_serverI'].value;
    DeleteVm1_FromServer_Request.serverDecryptPass = this.form.controls['DeleteVm1_FromServer_serverDecryptPass'].value;
    DeleteVm1_FromServer_Request.vmI = this.form.controls['DeleteVm1_FromServer_vmI'].value;
    DeleteVm1_FromServer_Request.removeAllStorage = this.form.controls['DeleteVm1_FromServer_removeAllStorage'].value;


    this.KvmVmService.DeleteVm1_FromServer(DeleteVm1_FromServer_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmVmDeleteVm1_FromServerResult = result;
      }, error => {
        console.log(error);
      });
  }
}