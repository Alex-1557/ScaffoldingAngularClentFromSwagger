import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions, HttpParameterCodec } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Bash_Post } from './VmOperation-input';
import { BashByKvm_Post } from './VmOperation-input';
import { VmStartByKvm_Post } from './VmOperation-input';
import { VmStopByBash_Post } from './VmOperation-input';
import { VmStopByKvm_Post } from './VmOperation-input';
import { VmRebootByBash_Post } from './VmOperation-input';
import { VmRebootByKvm_Post } from './VmOperation-input'

@Injectable({
    providedIn: 'root',
})

export class VmOperationService {

    constructor(
        protected http: HttpClient) {
    }

    Bash(item: Bash_Post): Observable<any> {
        var url = "/VmOperation/Bash";
        return this.http.post(url, item).pipe();
    }


    BashByKvm(item: BashByKvm_Post): Observable<any> {
        var url = "/VmOperation/BashByKvm";
        return this.http.post(url, item).pipe();
    }


    VmStartByKvm(item: VmStartByKvm_Post): Observable<any> {
        var url = "/VmOperation/VmStartByKvm";
        return this.http.post(url, item).pipe();
    }


    VmStopByBash(item: VmStopByBash_Post): Observable<any> {
        var url = "/VmOperation/VmStopByBash";
        return this.http.post(url, item).pipe();
    }


    VmStopByKvm(item: VmStopByKvm_Post): Observable<any> {
        var url = "/VmOperation/VmStopByKvm";
        return this.http.post(url, item).pipe();
    }


    VmRebootByBash(item: VmRebootByBash_Post): Observable<any> {
        var url = "/VmOperation/VmRebootByBash";
        return this.http.post(url, item).pipe();
    }

    VmRebootByKvm(item: VmRebootByKvm_Post): Observable<any> {
        var url = "/VmOperation/VmRebootByKvm";
        return this.http.post(url, item).pipe();
    }

}