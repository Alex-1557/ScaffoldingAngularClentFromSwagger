import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmDiskOperationService } from "./KvmDiskOperation-service"
import { ListLvmMember_Post } from './KvmDiskOperation-input'

@Component({
  selector: 'app-KvmDiskOperationListLvmMember',
  templateUrl: 'KvmDiskOperation-ListLvmMember-form.html',
  styleUrls: ['./kvm-disk-operation.component.css']
})

export class KvmDiskOperationListLvmMemberComponent
  extends BaseFormComponent implements OnInit {

  KvmDiskOperationListLvmMemberResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmDiskOperationService: KvmDiskOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      ListLvmMember_serverI: new FormControl(),
      ListLvmMember_serverDecryptPass: new FormControl(),
      ListLvmMember_serverDevice: new FormControl(),

    });
  }

  ListLvmMember_Submit() {
    var ListLvmMember_Request = <ListLvmMember_Post>{};
    ListLvmMember_Request.serverI = this.form.controls['ListLvmMember_serverI'].value;
    ListLvmMember_Request.serverDecryptPass = this.form.controls['ListLvmMember_serverDecryptPass'].value;
    ListLvmMember_Request.serverDevice = this.form.controls['ListLvmMember_serverDevice'].value;


    this.KvmDiskOperationService.ListLvmMember(ListLvmMember_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmDiskOperationListLvmMemberResult = result;
      }, error => {
        console.log(error);
      });
  }
}