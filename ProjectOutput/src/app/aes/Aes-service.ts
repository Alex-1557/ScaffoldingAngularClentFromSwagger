import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions, HttpParameterCodec } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { NetCrypt_Get } from './Aes-input';
import { NetDeCrypt_Get } from './Aes-input';
import { SqlCrypt_Get } from './Aes-input';
import { SqlDeCrypt_Get } from './Aes-input';
import { UpdateDecryptedPass_Get } from './Aes-input';
import { CheckDecryptPass_Post } from './Aes-input';
import { GetRandomPassword_Get } from './Aes-input';
import { GetRandomName_Get } from './Aes-input';


@Injectable({
    providedIn: 'root',
})

export class AesService {

    constructor(
        protected http: HttpClient) {
    }

    NetCrypt(item: NetCrypt_Get): Observable<any> {
        var url = "/Aes/NetCrypt";
        let queryParams = new HttpParams()
            .append("Text", item.Text).append("KeyString", item.KeyString)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    NetDeCrypt(item: NetDeCrypt_Get): Observable<any> {
        var url = "/Aes/NetDeCrypt";
        let queryParams = new HttpParams()
            .append("CipherText", item.CipherText).append("KeyString", item.KeyString)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    SqlCrypt(item: SqlCrypt_Get): Observable<any> {
        var url = "/Aes/SqlCrypt";
        let queryParams = new HttpParams()
            .append("Text", item.Text).append("KeyString", item.KeyString)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    SqlDeCrypt(item: SqlDeCrypt_Get): Observable<any> {
        var url = "/Aes/SqlDeCrypt";
        let queryParams = new HttpParams()
            .append("HexCipherText", item.HexCipherText).append("KeyString", item.KeyString)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    UpdateDecryptedPass(item: UpdateDecryptedPass_Get): Observable<any> {
        var url = "/Aes/UpdateDecryptedPass";
        let queryParams = new HttpParams()
            .append("PassType", item.PassType).append("OldPass", item.OldPass).append("NewPass", item.NewPass)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    GetRandomPassword(item: GetRandomPassword_Get): Observable<any> {
        var url = "/Aes/GetRandomPassword";
        let queryParams = new HttpParams()
            .append("Len", item.Len)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    GetRandomName(item: GetRandomName_Get): Observable<any> {
        var url = "/Aes/GetRandomName";
        let queryParams = new HttpParams()
            .append("Len", item.Len)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    CheckDecryptPass(item: CheckDecryptPass_Post): Observable<any> {
        var url = "/Aes/CheckDecryptPass";
        return this.http.post(url, item).pipe();
    }



}