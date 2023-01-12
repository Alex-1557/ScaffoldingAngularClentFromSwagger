import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VmImageService } from "./VmImage-service"
import { SyncPartitionImages_Post } from './VmImage-input'

@Component({
  selector: 'app-VmImageSyncPartitionImages',
  templateUrl: 'VmImage-SyncPartitionImages-form.html',
  styleUrls: ['./vm-image.component.css']
})

export class VmImageSyncPartitionImagesComponent
  extends BaseFormComponent implements OnInit {

  VmImageSyncPartitionImagesResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private VmImageService: VmImageService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      SyncPartitionImages_serverI: new FormControl(),
      SyncPartitionImages_serverDecryptPass: new FormControl(),

    });
  }

  SyncPartitionImages_Submit() {
    var SyncPartitionImages_Request = <SyncPartitionImages_Post>{};
    SyncPartitionImages_Request.serverI = this.form.controls['SyncPartitionImages_serverI'].value;
    SyncPartitionImages_Request.serverDecryptPass = this.form.controls['SyncPartitionImages_serverDecryptPass'].value;


    this.VmImageService.SyncPartitionImages(SyncPartitionImages_Request)
      .subscribe(result => {
        console.log(result);
        this.VmImageSyncPartitionImagesResult = result;
      }, error => {
        console.log(error);
      });
  }
}