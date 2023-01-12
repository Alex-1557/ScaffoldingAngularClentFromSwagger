import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AesService } from "./Aes-service"
import { SqlCrypt_Get } from './Aes-input'

@Component({
  selector: 'app-AesSqlCrypt',
  templateUrl: 'Aes-SqlCrypt-form.html',
  styleUrls: ['./aes.component.css']
})

export class AesSqlCryptComponent
  extends BaseFormComponent implements OnInit {

  AesSqlCryptResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private AesService: AesService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      SqlCrypt_Text: new FormControl(),
      SqlCrypt_KeyString: new FormControl(),

    });
  }

  SqlCrypt_Submit() {
    var SqlCrypt_Request = <SqlCrypt_Get>{};
    SqlCrypt_Request.Text = this.form.controls['SqlCrypt_Text'].value;
    SqlCrypt_Request.KeyString = this.form.controls['SqlCrypt_KeyString'].value;


    this.AesService.SqlCrypt(SqlCrypt_Request)
      .subscribe(result => {
        console.log(result);
        this.AesSqlCryptResult = result;
      }, error => {
        console.log(error);
      });
  }
}