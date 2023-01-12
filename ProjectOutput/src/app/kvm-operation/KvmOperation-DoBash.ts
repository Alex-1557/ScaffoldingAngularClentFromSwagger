import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmOperationService } from "./KvmOperation-service"
import { DoBash_Post } from './KvmOperation-input'

@Component({
  selector: 'app-KvmOperationDoBash',
  templateUrl: 'KvmOperation-DoBash-form.html',
  styleUrls: ['./kvm-operation.component.css']
})

export class KvmOperationDoBashComponent
  extends BaseFormComponent implements OnInit {

  KvmOperationDoBashResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmOperationService: KvmOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      DoBash_serverI: new FormControl(),
      DoBash_serverDecryptPass: new FormControl(),
      DoBash_bashCmd: new FormControl(),

    });
  }

  DoBash_Submit() {
    var DoBash_Request = <DoBash_Post>{};
    DoBash_Request.serverI = this.form.controls['DoBash_serverI'].value;
    DoBash_Request.serverDecryptPass = this.form.controls['DoBash_serverDecryptPass'].value;
    DoBash_Request.bashCmd = this.form.controls['DoBash_bashCmd'].value;


    this.KvmOperationService.DoBash(DoBash_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmOperationDoBashResult = result;
      }, error => {
        console.log(error);
      });
  }
}