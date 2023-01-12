import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VmImageService } from "./VmImage-service"
import { UnZipPartition_Post } from './VmImage-input'

@Component({
  selector: 'app-VmImageUnZipPartition',
  templateUrl: 'VmImage-UnZipPartition-form.html',
  styleUrls: ['./vm-image.component.css']
})

export class VmImageUnZipPartitionComponent
  extends BaseFormComponent implements OnInit {

  VmImageUnZipPartitionResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private VmImageService: VmImageService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      UnZipPartition_serverI: new FormControl(),
      UnZipPartition_serverDecryptPass: new FormControl(),
      UnZipPartition_serverDevice: new FormControl(),
      UnZipPartition_isoImageFileName: new FormControl(),

    });
  }

  UnZipPartition_Submit() {
    var UnZipPartition_Request = <UnZipPartition_Post>{};
    UnZipPartition_Request.serverI = this.form.controls['UnZipPartition_serverI'].value;
    UnZipPartition_Request.serverDecryptPass = this.form.controls['UnZipPartition_serverDecryptPass'].value;
    UnZipPartition_Request.serverDevice = this.form.controls['UnZipPartition_serverDevice'].value;
    UnZipPartition_Request.isoImageFileName = this.form.controls['UnZipPartition_isoImageFileName'].value;


    this.VmImageService.UnZipPartition(UnZipPartition_Request)
      .subscribe(result => {
        console.log(result);
        this.VmImageUnZipPartitionResult = result;
      }, error => {
        console.log(error);
      });
  }
}