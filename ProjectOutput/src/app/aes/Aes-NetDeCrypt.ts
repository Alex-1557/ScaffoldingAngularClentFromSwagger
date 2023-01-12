import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AesService } from "./Aes-service"
import { NetDeCrypt_Get } from './Aes-input'

@Component({
  selector: 'app-AesNetDeCrypt',
  templateUrl: 'Aes-NetDeCrypt-form.html',
  styleUrls: ['./aes.component.css']
})

export class AesNetDeCryptComponent
  extends BaseFormComponent implements OnInit {

  AesNetDeCryptResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private AesService: AesService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      NetDeCrypt_CipherText: new FormControl(),
      NetDeCrypt_KeyString: new FormControl(),

    });
  }

  NetDeCrypt_Submit() {
    var NetDeCrypt_Request = <NetDeCrypt_Get>{};
    NetDeCrypt_Request.CipherText = this.form.controls['NetDeCrypt_CipherText'].value;
    NetDeCrypt_Request.KeyString = this.form.controls['NetDeCrypt_KeyString'].value;


    this.AesService.NetDeCrypt(NetDeCrypt_Request)
      .subscribe(result => {
        console.log(result);
        this.AesNetDeCryptResult = result;
      }, error => {
        console.log(error);
      });
  }
}