import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDiskOperationService } from "./KvmDiskOperation-service"
import { ListDirectory_Post } from './KvmDiskOperation-input'

@Component({
  selector: 'app-KvmDiskOperationListDirectory',
  templateUrl: 'KvmDiskOperation-ListDirectory-form.html',
  styleUrls: ['./kvm-disk-operation.component.css']
})

export class KvmDiskOperationListDirectoryComponent
  extends BaseFormComponent implements OnInit {

  KvmDiskOperationListDirectoryResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDiskOperationService: KvmDiskOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      ListDirectory_serverI: new FormControl(),
      ListDirectory_serverDecryptPass: new FormControl(),
      ListDirectory_directory: new FormControl(),

    });
  }

  ListDirectory_Submit() {
    var ListDirectory_Request = <ListDirectory_Post>{};
    ListDirectory_Request.serverI = this.form.controls['ListDirectory_serverI'].value;
    ListDirectory_Request.serverDecryptPass = this.form.controls['ListDirectory_serverDecryptPass'].value;
    ListDirectory_Request.directory = this.form.controls['ListDirectory_directory'].value;


    this.KvmDiskOperationService.ListDirectory(ListDirectory_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDiskOperationListDirectoryResult = result;
      }, error => {
        console.log(error);
      });
  }
}