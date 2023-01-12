import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions, HttpParameterCodec } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { GetVmMasternodes_Post } from './VmMasternode-input';
import { UpdateVmMasternodeInfo_Post } from './VmMasternode-input';
import { UpdateAllVmMasternodesInfo_Post } from './VmMasternode-input';


@Injectable({
    providedIn: 'root',
})

export class VmMasternodeService {

    constructor(
        protected http: HttpClient) {
    }

    GetVmMasternodes(item: GetVmMasternodes_Post): Observable<any> {
        var url = "/VmMasternode/GetVmMasternodes";
        return this.http.post(url, item).pipe();
    }


    UpdateVmMasternodeInfo(item: UpdateVmMasternodeInfo_Post): Observable<any> {
        var url = "/VmMasternode/UpdateVmMasternodeInfo";
        return this.http.post(url, item).pipe();
    }


    UpdateAllVmMasternodesInfo(item: UpdateAllVmMasternodesInfo_Post): Observable<any> {
        var url = "/VmMasternode/UpdateAllVmMasternodesInfo";
        return this.http.post(url, item).pipe();
    }



}