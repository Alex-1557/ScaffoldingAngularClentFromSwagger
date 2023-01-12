import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions, HttpParameterCodec } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Bash_Post } from './KvmOperation-input';
import { DoBash_Post } from './KvmOperation-input';


@Injectable({
    providedIn: 'root',
})

export class KvmOperationService {

    constructor(
        protected http: HttpClient) {
    }

    Bash(item: Bash_Post): Observable<any> {
        var url = "/KvmOperation/Bash";
        return this.http.post(url, item).pipe();
    }


    DoBash(item: DoBash_Post): Observable<any> {
        var url = "/KvmOperation/DoBash";
        return this.http.post(url, item).pipe();
    }



}