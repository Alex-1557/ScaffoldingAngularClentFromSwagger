import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VmMasternodeService } from "./VmMasternode-service"
import { GetVmMasternodes_Post } from './VmMasternode-input'

@Component({
  selector: 'app-VmMasternodeGetVmMasternodes',
  templateUrl: 'VmMasternode-GetVmMasternodes-form.html',
  styleUrls: ['./vm-masternode.component.css']
})

export class VmMasternodeGetVmMasternodesComponent
  extends BaseFormComponent implements OnInit {

  VmMasternodeGetVmMasternodesResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private VmMasternodeService: VmMasternodeService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      GetVmMasternodes_serverI: new FormControl(),
      GetVmMasternodes_serverDecryptPass: new FormControl(),
      GetVmMasternodes_userName: new FormControl(),

    });
  }

  GetVmMasternodes_Submit() {
    var GetVmMasternodes_Request = <GetVmMasternodes_Post>{};
    GetVmMasternodes_Request.serverI = this.form.controls['GetVmMasternodes_serverI'].value;
    GetVmMasternodes_Request.serverDecryptPass = this.form.controls['GetVmMasternodes_serverDecryptPass'].value;
    GetVmMasternodes_Request.userName = this.form.controls['GetVmMasternodes_userName'].value;


    this.VmMasternodeService.GetVmMasternodes(GetVmMasternodes_Request)
      .subscribe(result => {
        console.log(result);
        this.VmMasternodeGetVmMasternodesResult = result;
      }, error => {
        console.log(error);
      });
  }
}