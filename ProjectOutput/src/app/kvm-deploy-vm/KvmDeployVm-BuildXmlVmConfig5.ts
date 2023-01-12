import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDeployVmService } from "./KvmDeployVm-service"
import { BuildXmlVmConfig5_Post } from './KvmDeployVm-input'

@Component({
  selector: 'app-KvmDeployVmBuildXmlVmConfig5',
  templateUrl: 'KvmDeployVm-BuildXmlVmConfig5-form.html',
  styleUrls: ['./kvm-deploy-vm.component.css']
})

export class KvmDeployVmBuildXmlVmConfig5Component
  extends BaseFormComponent implements OnInit {

  KvmDeployVmBuildXmlVmConfig5Result?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDeployVmService: KvmDeployVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      BuildXmlVmConfig5_name: new FormControl(),
      BuildXmlVmConfig5_uuid: new FormControl(),
      BuildXmlVmConfig5_diskDevice: new FormControl(),
      BuildXmlVmConfig5_cpuSet: new FormControl(),
      BuildXmlVmConfig5_cpuCount: new FormControl(),
      BuildXmlVmConfig5_memory: new FormControl(),
      BuildXmlVmConfig5_mac: new FormControl(),
      BuildXmlVmConfig5_spicePort: new FormControl(),
      BuildXmlVmConfig5_bridgeName: new FormControl(),

    });
  }

  BuildXmlVmConfig5_Submit() {
    var BuildXmlVmConfig5_Request = <BuildXmlVmConfig5_Post>{};
    BuildXmlVmConfig5_Request.name = this.form.controls['BuildXmlVmConfig5_name'].value;
    BuildXmlVmConfig5_Request.uuid = this.form.controls['BuildXmlVmConfig5_uuid'].value;
    BuildXmlVmConfig5_Request.diskDevice = this.form.controls['BuildXmlVmConfig5_diskDevice'].value;
    BuildXmlVmConfig5_Request.cpuSet = this.form.controls['BuildXmlVmConfig5_cpuSet'].value;
    BuildXmlVmConfig5_Request.cpuCount = this.form.controls['BuildXmlVmConfig5_cpuCount'].value;
    BuildXmlVmConfig5_Request.memory = this.form.controls['BuildXmlVmConfig5_memory'].value;
    BuildXmlVmConfig5_Request.mac = this.form.controls['BuildXmlVmConfig5_mac'].value;
    BuildXmlVmConfig5_Request.spicePort = this.form.controls['BuildXmlVmConfig5_spicePort'].value;
    BuildXmlVmConfig5_Request.bridgeName = this.form.controls['BuildXmlVmConfig5_bridgeName'].value;


    this.KvmDeployVmService.BuildXmlVmConfig5(BuildXmlVmConfig5_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDeployVmBuildXmlVmConfig5Result = result;
      }, error => {
        console.log(error);
      });
  }
}