import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VmOperationService } from "./VmOperation-service"
import { Bash_Post } from './VmOperation-input'

@Component({
  selector: 'app-VmOperationBash',
  templateUrl: 'VmOperation-Bash-form.html',
  styleUrls: ['./vm-operation.component.css']
})

export class VmOperationBashComponent
  extends BaseFormComponent implements OnInit {

  VmOperationBashResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private VmOperationService: VmOperationService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      Bash_vmName: new FormControl(),
      Bash_vmConnectionAdminDecryptPass: new FormControl(),
      Bash_bashCmd: new FormControl(),
      Bash_addSudo: new FormControl(),
      Bash_useAdminLogin: new FormControl(),

    });
  }

  Bash_Submit() {
    var Bash_Request = <Bash_Post>{};
    Bash_Request.vmName = this.form.controls['Bash_vmName'].value;
    Bash_Request.vmConnectionAdminDecryptPass = this.form.controls['Bash_vmConnectionAdminDecryptPass'].value;
    Bash_Request.bashCmd = this.form.controls['Bash_bashCmd'].value;
    Bash_Request.addSudo = this.form.controls['Bash_addSudo'].value;
    Bash_Request.useAdminLogin = this.form.controls['Bash_useAdminLogin'].value;


    this.VmOperationService.Bash(Bash_Request)
      .subscribe(result => {
        console.log(result);
        this.VmOperationBashResult = result;
      }, error => {
        console.log(error);
      });
  }
}