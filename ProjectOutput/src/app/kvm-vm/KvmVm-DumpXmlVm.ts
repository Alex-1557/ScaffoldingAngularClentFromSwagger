import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmVmService } from "./KvmVm-service"
import { DumpXmlVm_Post } from './KvmVm-input'

@Component({
  selector: 'app-KvmVmDumpXmlVm',
  templateUrl: 'KvmVm-DumpXmlVm-form.html',
  styleUrls: ['./kvm-vm.component.css']
})

export class KvmVmDumpXmlVmComponent
  extends BaseFormComponent implements OnInit {

  KvmVmDumpXmlVmResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmVmService: KvmVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      DumpXmlVm_serverI: new FormControl(),
      DumpXmlVm_serverDecryptPass: new FormControl(),
      DumpXmlVm_vmName: new FormControl(),

    });
  }

  DumpXmlVm_Submit() {
    var DumpXmlVm_Request = <DumpXmlVm_Post>{};
    DumpXmlVm_Request.serverI = this.form.controls['DumpXmlVm_serverI'].value;
    DumpXmlVm_Request.serverDecryptPass = this.form.controls['DumpXmlVm_serverDecryptPass'].value;
    DumpXmlVm_Request.vmName = this.form.controls['DumpXmlVm_vmName'].value;


    this.KvmVmService.DumpXmlVm(DumpXmlVm_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmVmDumpXmlVmResult = result;
      }, error => {
        console.log(error);
      });
  }
}