import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions, HttpParameterCodec } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { AddServer_Post } from './Datacenter-input';
import { DelServer_Post } from './Datacenter-input';
import { UpdServer_Post } from './Datacenter-input';


@Injectable({
    providedIn: 'root',
})

export class DatacenterService {

    constructor(
        protected http: HttpClient) {
    }

    AddServer(item: AddServer_Post): Observable<any> {
        var url = "/Datacenter/AddServer";
        return this.http.post(url, item).pipe();
    }


    DelServer(item: DelServer_Post): Observable<any> {
        var url = "/Datacenter/DelServer";
        return this.http.post(url, item).pipe();
    }


    UpdServer(item: UpdServer_Post): Observable<any> {
        var url = "/Datacenter/UpdServer";
        return this.http.post(url, item).pipe();
    }



}