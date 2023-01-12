import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions, HttpParameterCodec } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { AddMasternodeInfo_Post } from './DbMasternode-input';
import { DelMasternodeInfo_Get } from './DbMasternode-input';
import { GetMasternodeInfo_Get } from './DbMasternode-input';


@Injectable({
    providedIn: 'root',
})

export class DbMasternodeService {

    constructor(
        protected http: HttpClient) {
    }

    DelMasternodeInfo(item: DelMasternodeInfo_Get): Observable<any> {
        var url = "/DbMasternode/DelMasternodeInfo";
        let queryParams = new HttpParams()
            .append("MasternodeI", item.MasternodeI)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    GetMasternodeInfo(item: GetMasternodeInfo_Get): Observable<any> {
        var url = "/DbMasternode/GetMasternodeInfo";
        let queryParams = new HttpParams()

        return this.http.get(url, { params: queryParams }).pipe();
    }

    AddMasternodeInfo(item: AddMasternodeInfo_Post): Observable<any> {
        var url = "/DbMasternode/AddMasternodeInfo";
        return this.http.post(url, item).pipe();
    }



}