import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VmMasternodeService } from "./VmMasternode-service"
import { UpdateVmMasternodeInfo_Post } from './VmMasternode-input'

@Component({
  selector: 'app-VmMasternodeUpdateVmMasternodeInfo',
  templateUrl: 'VmMasternode-UpdateVmMasternodeInfo-form.html',
  styleUrls: ['./vm-masternode.component.css']
})

export class VmMasternodeUpdateVmMasternodeInfoComponent
  extends BaseFormComponent implements OnInit {

  VmMasternodeUpdateVmMasternodeInfoResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private VmMasternodeService: VmMasternodeService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      UpdateVmMasternodeInfo_serverI: new FormControl(),
      UpdateVmMasternodeInfo_serverDecryptPass: new FormControl(),
      UpdateVmMasternodeInfo_vmName: new FormControl(),
      UpdateVmMasternodeInfo_vmConnectionAdminDecryptPass: new FormControl(),
      UpdateVmMasternodeInfo_masternodeI: new FormControl(),

    });
  }

  UpdateVmMasternodeInfo_Submit() {
    var UpdateVmMasternodeInfo_Request = <UpdateVmMasternodeInfo_Post>{};
    UpdateVmMasternodeInfo_Request.serverI = this.form.controls['UpdateVmMasternodeInfo_serverI'].value;
    UpdateVmMasternodeInfo_Request.serverDecryptPass = this.form.controls['UpdateVmMasternodeInfo_serverDecryptPass'].value;
    UpdateVmMasternodeInfo_Request.vmName = this.form.controls['UpdateVmMasternodeInfo_vmName'].value;
    UpdateVmMasternodeInfo_Request.vmConnectionAdminDecryptPass = this.form.controls['UpdateVmMasternodeInfo_vmConnectionAdminDecryptPass'].value;
    UpdateVmMasternodeInfo_Request.masternodeI = this.form.controls['UpdateVmMasternodeInfo_masternodeI'].value;


    this.VmMasternodeService.UpdateVmMasternodeInfo(UpdateVmMasternodeInfo_Request)
      .subscribe(result => {
        console.log(result);
        this.VmMasternodeUpdateVmMasternodeInfoResult = result;
      }, error => {
        console.log(error);
      });
  }
}