import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AesService } from "./Aes-service"
import { CheckDecryptPass_Post } from './Aes-input'

@Component({
  selector: 'app-AesCheckDecryptPass',
  templateUrl: 'Aes-CheckDecryptPass-form.html',
  styleUrls: ['./aes.component.css']
})

export class AesCheckDecryptPassComponent
  extends BaseFormComponent implements OnInit {

  AesCheckDecryptPassResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private AesService: AesService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      CheckDecryptPass_serverDecryptPass: new FormControl(),
      CheckDecryptPass_vmConnectionAdminDecryptPass: new FormControl(),
      CheckDecryptPass_dockerHubDecryptPass: new FormControl(),
      CheckDecryptPass_dockerRegistryDecryptPass: new FormControl(),
      CheckDecryptPass_vmConnectionUserDecryptPass: new FormControl(),

    });
  }

  CheckDecryptPass_Submit() {
    var CheckDecryptPass_Request = <CheckDecryptPass_Post>{};
    CheckDecryptPass_Request.serverDecryptPass = this.form.controls['CheckDecryptPass_serverDecryptPass'].value;
    CheckDecryptPass_Request.vmConnectionAdminDecryptPass = this.form.controls['CheckDecryptPass_vmConnectionAdminDecryptPass'].value;
    CheckDecryptPass_Request.dockerHubDecryptPass = this.form.controls['CheckDecryptPass_dockerHubDecryptPass'].value;
    CheckDecryptPass_Request.dockerRegistryDecryptPass = this.form.controls['CheckDecryptPass_dockerRegistryDecryptPass'].value;
    CheckDecryptPass_Request.vmConnectionUserDecryptPass = this.form.controls['CheckDecryptPass_vmConnectionUserDecryptPass'].value;


    this.AesService.CheckDecryptPass(CheckDecryptPass_Request)
      .subscribe(result => {
        console.log(result);
        this.AesCheckDecryptPassResult = result;
      }, error => {
        console.log(error);
      });
  }
}