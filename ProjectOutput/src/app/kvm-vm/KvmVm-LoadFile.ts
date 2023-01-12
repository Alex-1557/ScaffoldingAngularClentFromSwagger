import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmVmService } from "./KvmVm-service"
import { LoadFile_Post } from './KvmVm-input'

@Component({
  selector: 'app-KvmVmLoadFile',
  templateUrl: 'KvmVm-LoadFile-form.html',
  styleUrls: ['./kvm-vm.component.css']
})

export class KvmVmLoadFileComponent
  extends BaseFormComponent implements OnInit {

  KvmVmLoadFileResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmVmService: KvmVmService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      LoadFile_vmName: new FormControl(),
      LoadFile_vmConnectionAdminDecryptPass: new FormControl(),
      LoadFile_tableName: new FormControl(),
      LoadFile_fileName: new FormControl(),
      LoadFile_columnName: new FormControl(),
      LoadFile_recordNum: new FormControl(),

    });
  }

  LoadFile_Submit() {
    var LoadFile_Request = <LoadFile_Post>{};
    LoadFile_Request.vmName = this.form.controls['LoadFile_vmName'].value;
    LoadFile_Request.vmConnectionAdminDecryptPass = this.form.controls['LoadFile_vmConnectionAdminDecryptPass'].value;
    LoadFile_Request.tableName = this.form.controls['LoadFile_tableName'].value;
    LoadFile_Request.fileName = this.form.controls['LoadFile_fileName'].value;
    LoadFile_Request.columnName = this.form.controls['LoadFile_columnName'].value;
    LoadFile_Request.recordNum = this.form.controls['LoadFile_recordNum'].value;


    this.KvmVmService.LoadFile(LoadFile_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmVmLoadFileResult = result;
      }, error => {
        console.log(error);
      });
  }
}