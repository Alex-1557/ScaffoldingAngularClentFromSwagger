import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AesService } from "./Aes-service"
import { SqlDeCrypt_Get } from './Aes-input'

@Component({
  selector: 'app-AesSqlDeCrypt',
  templateUrl: 'Aes-SqlDeCrypt-form.html',
  styleUrls: ['./aes.component.css']
})

export class AesSqlDeCryptComponent
  extends BaseFormComponent implements OnInit {

  AesSqlDeCryptResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private AesService: AesService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      SqlDeCrypt_HexCipherText: new FormControl(),
      SqlDeCrypt_KeyString: new FormControl(),

    });
  }

  SqlDeCrypt_Submit() {
    var SqlDeCrypt_Request = <SqlDeCrypt_Get>{};
    SqlDeCrypt_Request.HexCipherText = this.form.controls['SqlDeCrypt_HexCipherText'].value;
    SqlDeCrypt_Request.KeyString = this.form.controls['SqlDeCrypt_KeyString'].value;


    this.AesService.SqlDeCrypt(SqlDeCrypt_Request)
      .subscribe(result => {
        console.log(result);
        this.AesSqlDeCryptResult = result;
      }, error => {
        console.log(error);
      });
  }
}