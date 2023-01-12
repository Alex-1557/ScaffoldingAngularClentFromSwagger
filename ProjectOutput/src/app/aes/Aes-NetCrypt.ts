import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AesService } from "./Aes-service"
import { NetCrypt_Get } from './Aes-input'

@Component({
  selector: 'app-AesNetCrypt',
  templateUrl: 'Aes-NetCrypt-form.html',
  styleUrls: ['./aes.component.css']
})

export class AesNetCryptComponent
  extends BaseFormComponent implements OnInit {

  AesNetCryptResult?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private AesService: AesService) {
    super();
  }

  ngOnInit() {
    this.form = new FormGroup({
      NetCrypt_Text: new FormControl(),
      NetCrypt_KeyString: new FormControl(),

    });
  }

  NetCrypt_Submit() {
    var NetCrypt_Request = <NetCrypt_Get>{};
    NetCrypt_Request.Text = this.form.controls['NetCrypt_Text'].value;
    NetCrypt_Request.KeyString = this.form.controls['NetCrypt_KeyString'].value;


    this.AesService.NetCrypt(NetCrypt_Request)
      .subscribe(result => {
        console.log(result);
        this.AesNetCryptResult = result;
      }, error => {
        console.log(error);
      });
  }
}