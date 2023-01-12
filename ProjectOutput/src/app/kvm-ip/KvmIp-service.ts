import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions, HttpParameterCodec } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { GetRuntimeBridgeList_Post } from './KvmIp-input';
import { GetRuntimeBridgePorts_Post } from './KvmIp-input';
import { GetRuntimeRoute_Post } from './KvmIp-input';
import { GetIpConfig_Post } from './KvmIp-input';
import { GetUfwRules_Post } from './KvmIp-input';
import { GetRuntimeIpList_Post } from './KvmIp-input';


@Injectable({
    providedIn: 'root',
})

export class KvmIpService {

    constructor(
        protected http: HttpClient) {
    }

    GetRuntimeBridgeList(item: GetRuntimeBridgeList_Post): Observable<any> {
        var url = "/KvmIp/GetRuntimeBridgeList";
        return this.http.post(url, item).pipe();
    }


    GetRuntimeBridgePorts(item: GetRuntimeBridgePorts_Post): Observable<any> {
        var url = "/KvmIp/GetRuntimeBridgePorts";
        return this.http.post(url, item).pipe();
    }


    GetRuntimeRoute(item: GetRuntimeRoute_Post): Observable<any> {
        var url = "/KvmIp/GetRuntimeRoute";
        return this.http.post(url, item).pipe();
    }


    GetIpConfig(item: GetIpConfig_Post): Observable<any> {
        var url = "/KvmIp/GetIpConfig";
        return this.http.post(url, item).pipe();
    }


    GetUfwRules(item: GetUfwRules_Post): Observable<any> {
        var url = "/KvmIp/GetUfwRules";
        return this.http.post(url, item).pipe();
    }


    GetRuntimeIpList(item: GetRuntimeIpList_Post): Observable<any> {
        var url = "/KvmIp/GetRuntimeIpList";
        return this.http.post(url, item).pipe();
    }



}