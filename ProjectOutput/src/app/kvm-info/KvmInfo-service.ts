import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions, HttpParameterCodec } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { GetServerStorageDevice_Get } from './KvmInfo-input';
import { GetFreeIP_Get } from './KvmInfo-input';
import { GetFreeKvmVolume_Get } from './KvmInfo-input';
import { GetKvmVolume_Get } from './KvmInfo-input';
import { ServerInfo_Get } from './KvmInfo-input';
import { NetworkInfo_Get } from './KvmInfo-input';
import { PoolInfo_Get } from './KvmInfo-input';
import { StorageInfo_Get } from './KvmInfo-input';
import { AccessInfo_Get } from './KvmInfo-input';
import { GetKvmVlan_Get } from './KvmInfo-input';
import { GetKvmNetworkInterface_Get } from './KvmInfo-input';
import { GetKvmBridge_Get } from './KvmInfo-input';
import { GetKvmBridgePort_Get } from './KvmInfo-input';
import { GetVlanSwitch_Get } from './KvmInfo-input';


@Injectable({
    providedIn: 'root',
})

export class KvmInfoService {

    constructor(
        protected http: HttpClient) {
    }

    GetServerStorageDevice(item: GetServerStorageDevice_Get): Observable<any> {
        var url = "/KvmInfo/GetServerStorageDevice";
        let queryParams = new HttpParams()
            .append("ServerI", item.ServerI)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    GetFreeIP(item: GetFreeIP_Get): Observable<any> {
        var url = "/KvmInfo/GetFreeIP";
        let queryParams = new HttpParams()

        return this.http.get(url, { params: queryParams }).pipe();
    }

    GetFreeKvmVolume(item: GetFreeKvmVolume_Get): Observable<any> {
        var url = "/KvmInfo/GetFreeKvmVolume";
        let queryParams = new HttpParams()

        return this.http.get(url, { params: queryParams }).pipe();
    }

    GetKvmVolume(item: GetKvmVolume_Get): Observable<any> {
        var url = "/KvmInfo/GetKvmVolume";
        let queryParams = new HttpParams()

        return this.http.get(url, { params: queryParams }).pipe();
    }

    ServerInfo(item: ServerInfo_Get): Observable<any> {
        var url = "/KvmInfo/ServerInfo";
        let queryParams = new HttpParams()

        return this.http.get(url, { params: queryParams }).pipe();
    }

    NetworkInfo(item: NetworkInfo_Get): Observable<any> {
        var url = "/KvmInfo/NetworkInfo";
        let queryParams = new HttpParams()
            .append("ServerI", item.ServerI)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    PoolInfo(item: PoolInfo_Get): Observable<any> {
        var url = "/KvmInfo/PoolInfo";
        let queryParams = new HttpParams()
            .append("ServerI", item.ServerI)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    StorageInfo(item: StorageInfo_Get): Observable<any> {
        var url = "/KvmInfo/StorageInfo";
        let queryParams = new HttpParams()
            .append("ServerI", item.ServerI)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    AccessInfo(item: AccessInfo_Get): Observable<any> {
        var url = "/KvmInfo/AccessInfo";
        let queryParams = new HttpParams()
            .append("ServerI", item.ServerI)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    GetKvmVlan(item: GetKvmVlan_Get): Observable<any> {
        var url = "/KvmInfo/GetKvmVlan";
        let queryParams = new HttpParams()
            .append("ServerI", item.ServerI)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    GetKvmNetworkInterface(item: GetKvmNetworkInterface_Get): Observable<any> {
        var url = "/KvmInfo/GetKvmNetworkInterface";
        let queryParams = new HttpParams()
            .append("ServerI", item.ServerI)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    GetKvmBridge(item: GetKvmBridge_Get): Observable<any> {
        var url = "/KvmInfo/GetKvmBridge";
        let queryParams = new HttpParams()
            .append("ServerI", item.ServerI)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    GetKvmBridgePort(item: GetKvmBridgePort_Get): Observable<any> {
        var url = "/KvmInfo/GetKvmBridgePort";
        let queryParams = new HttpParams()
            .append("ServerI", item.ServerI)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    GetVlanSwitch(item: GetVlanSwitch_Get): Observable<any> {
        var url = "/KvmInfo/GetVlanSwitch";
        let queryParams = new HttpParams()
            .append("IP", item.IP)
        return this.http.get(url, { params: queryParams }).pipe();
    }


}