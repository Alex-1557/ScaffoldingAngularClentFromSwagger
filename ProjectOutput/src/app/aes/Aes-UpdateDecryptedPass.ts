import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AesService } from "./Aes-service"
import { UpdateDecryptedPass_Get } from './Aes-input'

@Component({
  selector: 'app-AesUpdateDecryptedPass',
  templateUrl: 'Aes-UpdateDecryptedPass-form.html',
  styleUrls: ['./aes.component.css']
})

export class AesUpdateDecryptedPassComponent
  extends BaseFormComponent implements OnInit {

  AesUpdateDecryptedPassResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private AesService: AesService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      UpdateDecryptedPass_PassType: new FormControl(),
      UpdateDecryptedPass_OldPass: new FormControl(),
      UpdateDecryptedPass_NewPass: new FormControl(),

    });
  }

  UpdateDecryptedPass_Submit() {
    var UpdateDecryptedPass_Request = <UpdateDecryptedPass_Get>{};
    UpdateDecryptedPass_Request.PassType = this.form.controls['UpdateDecryptedPass_PassType'].value;
    UpdateDecryptedPass_Request.OldPass = this.form.controls['UpdateDecryptedPass_OldPass'].value;
    UpdateDecryptedPass_Request.NewPass = this.form.controls['UpdateDecryptedPass_NewPass'].value;


    this.AesService.UpdateDecryptedPass(UpdateDecryptedPass_Request)
      .subscribe(result => {
        console.log(result);
        this.AesUpdateDecryptedPassResult = result;
      }, error => {
        console.log(error);
      });
  }
}