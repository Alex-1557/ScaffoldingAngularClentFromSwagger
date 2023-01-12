import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VmImageService } from "./VmImage-service"
import { ZipPartition_Post } from './VmImage-input'

@Component({
  selector: 'app-VmImageZipPartition',
  templateUrl: 'VmImage-ZipPartition-form.html',
  styleUrls: ['./vm-image.component.css']
})

export class VmImageZipPartitionComponent
  extends BaseFormComponent implements OnInit {

  VmImageZipPartitionResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private VmImageService: VmImageService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      ZipPartition_serverI: new FormControl(),
      ZipPartition_serverDecryptPass: new FormControl(),
      ZipPartition_serverDevice: new FormControl(),
      ZipPartition_isoImageFileName: new FormControl(),

    });
  }

  ZipPartition_Submit() {
    var ZipPartition_Request = <ZipPartition_Post>{};
    ZipPartition_Request.serverI = this.form.controls['ZipPartition_serverI'].value;
    ZipPartition_Request.serverDecryptPass = this.form.controls['ZipPartition_serverDecryptPass'].value;
    ZipPartition_Request.serverDevice = this.form.controls['ZipPartition_serverDevice'].value;
    ZipPartition_Request.isoImageFileName = this.form.controls['ZipPartition_isoImageFileName'].value;


    this.VmImageService.ZipPartition(ZipPartition_Request)
      .subscribe(result => {
        console.log(result);
        this.VmImageZipPartitionResult = result;
      }, error => {
        console.log(error);
      });
  }
}