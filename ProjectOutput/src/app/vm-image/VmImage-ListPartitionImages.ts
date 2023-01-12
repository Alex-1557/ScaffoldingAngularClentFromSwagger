import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VmImageService } from "./VmImage-service"
import { ListPartitionImages_Post } from './VmImage-input'

@Component({
  selector: 'app-VmImageListPartitionImages',
  templateUrl: 'VmImage-ListPartitionImages-form.html',
  styleUrls: ['./vm-image.component.css']
})

export class VmImageListPartitionImagesComponent
  extends BaseFormComponent implements OnInit {

  VmImageListPartitionImagesResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private VmImageService: VmImageService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      ListPartitionImages_serverI: new FormControl(),
      ListPartitionImages_serverDecryptPass: new FormControl(),

    });
  }

  ListPartitionImages_Submit() {
    var ListPartitionImages_Request = <ListPartitionImages_Post>{};
    ListPartitionImages_Request.serverI = this.form.controls['ListPartitionImages_serverI'].value;
    ListPartitionImages_Request.serverDecryptPass = this.form.controls['ListPartitionImages_serverDecryptPass'].value;


    this.VmImageService.ListPartitionImages(ListPartitionImages_Request)
      .subscribe(result => {
        console.log(result);
        this.VmImageListPartitionImagesResult = result;
      }, error => {
        console.log(error);
      });
  }
}