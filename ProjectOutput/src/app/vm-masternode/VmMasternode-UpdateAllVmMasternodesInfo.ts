import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VmMasternodeService } from "./VmMasternode-service"
import { UpdateAllVmMasternodesInfo_Post } from './VmMasternode-input'

@Component({
  selector: 'app-VmMasternodeUpdateAllVmMasternodesInfo',
  templateUrl: 'VmMasternode-UpdateAllVmMasternodesInfo-form.html',
  styleUrls: ['./vm-masternode.component.css']
})

export class VmMasternodeUpdateAllVmMasternodesInfoComponent
  extends BaseFormComponent implements OnInit {

  VmMasternodeUpdateAllVmMasternodesInfoResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private VmMasternodeService: VmMasternodeService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      UpdateAllVmMasternodesInfo_serverI: new FormControl(),
      UpdateAllVmMasternodesInfo_serverDecryptPass: new FormControl(),
      UpdateAllVmMasternodesInfo_vmConnectionAdminDecryptPass: new FormControl(),

    });
  }

  UpdateAllVmMasternodesInfo_Submit() {
    var UpdateAllVmMasternodesInfo_Request = <UpdateAllVmMasternodesInfo_Post>{};
    UpdateAllVmMasternodesInfo_Request.serverI = this.form.controls['UpdateAllVmMasternodesInfo_serverI'].value;
    UpdateAllVmMasternodesInfo_Request.serverDecryptPass = this.form.controls['UpdateAllVmMasternodesInfo_serverDecryptPass'].value;
    UpdateAllVmMasternodesInfo_Request.vmConnectionAdminDecryptPass = this.form.controls['UpdateAllVmMasternodesInfo_vmConnectionAdminDecryptPass'].value;


    this.VmMasternodeService.UpdateAllVmMasternodesInfo(UpdateAllVmMasternodesInfo_Request)
      .subscribe(result => {
        console.log(result);
        this.VmMasternodeUpdateAllVmMasternodesInfoResult = result;
      }, error => {
        console.log(error);
      });
  }
}