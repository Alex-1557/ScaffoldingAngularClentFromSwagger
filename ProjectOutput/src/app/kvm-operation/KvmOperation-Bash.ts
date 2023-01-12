import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KvmOperationService } from "./KvmOperation-service"
import { Bash_Post } from './KvmOperation-input'

@Component({
  selector: 'app-KvmOperationBash',
  templateUrl: 'KvmOperation-Bash-form.html',
  styleUrls: ['./kvm-operation.component.css']
})

export class KvmOperationBashComponent
  extends BaseFormComponent implements OnInit {

  KvmOperationBashResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private KvmOperationService: KvmOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      Bash_serverI: new FormControl(),
      Bash_serverDecryptPass: new FormControl(),
      Bash_bashCmd: new FormControl(),

    });
  }

  Bash_Submit() {
    var Bash_Request = <Bash_Post>{};
    Bash_Request.serverI = this.form.controls['Bash_serverI'].value;
    Bash_Request.serverDecryptPass = this.form.controls['Bash_serverDecryptPass'].value;
    Bash_Request.bashCmd = this.form.controls['Bash_bashCmd'].value;


    this.KvmOperationService.Bash(Bash_Request)
      .subscribe(result => {
        console.log(result);
        this.KvmOperationBashResult = result;
      }, error => {
        console.log(error);
      });
  }
}