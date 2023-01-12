import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmVmService } from "./KvmVm-service"
import { DeleteVm2_FromDb_Post } from './KvmVm-input'

@Component({
  selector: 'app-KvmVmDeleteVm2_FromDb',
  templateUrl: 'KvmVm-DeleteVm2_FromDb-form.html',
  styleUrls: ['./kvm-vm.component.css']
})

export class KvmVmDeleteVm2_FromDbComponent
  extends BaseFormComponent implements OnInit {

  KvmVmDeleteVm2_FromDbResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmVmService: KvmVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      DeleteVm2_FromDb_serverI: new FormControl(),
      DeleteVm2_FromDb_serverDecryptPass: new FormControl(),
      DeleteVm2_FromDb_vmI: new FormControl(),
      DeleteVm2_FromDb_removeAllStorage: new FormControl(),

    });
  }

  DeleteVm2_FromDb_Submit() {
    var DeleteVm2_FromDb_Request = <DeleteVm2_FromDb_Post>{};
    DeleteVm2_FromDb_Request.serverI = this.form.controls['DeleteVm2_FromDb_serverI'].value;
    DeleteVm2_FromDb_Request.serverDecryptPass = this.form.controls['DeleteVm2_FromDb_serverDecryptPass'].value;
    DeleteVm2_FromDb_Request.vmI = this.form.controls['DeleteVm2_FromDb_vmI'].value;
    DeleteVm2_FromDb_Request.removeAllStorage = this.form.controls['DeleteVm2_FromDb_removeAllStorage'].value;


    this.KvmVmService.DeleteVm2_FromDb(DeleteVm2_FromDb_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmVmDeleteVm2_FromDbResult = result;
      }, error => {
        console.log(error);
      });
  }
}