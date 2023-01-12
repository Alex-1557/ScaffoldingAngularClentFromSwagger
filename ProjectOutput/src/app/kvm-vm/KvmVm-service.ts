import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions, HttpParameterCodec } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { GetVmInfo_Get } from './KvmVm-input';
import { GetVmList_Get } from './KvmVm-input';
import { GetVmListInfo_Get } from './KvmVm-input';
import { GetVmListRuntime_Get } from './KvmVm-input';
import { DeleteVm1_FromServer_Post } from './KvmVm-input';
import { DeleteVm2_FromDb_Post } from './KvmVm-input';
import { DumpXmlVm_Post } from './KvmVm-input';
import { ListVmDiskByKvm_Post } from './KvmVm-input';
import { ChangeSshVmIpDb_Post } from './KvmVm-input';
import { UpdateVmInfo_Post } from './KvmVm-input';
import { UpdateAllVmInfo_Post } from './KvmVm-input';
import { BashForEachVm_Post } from './KvmVm-input';
import { LoadFile_Post } from './KvmVm-input';


@Injectable({
    providedIn: 'root',
})

export class KvmVmService {

    constructor(
        protected http: HttpClient) {
    }

    GetVmInfo(item: GetVmInfo_Get): Observable<any> {
        var url = "/KvmVm/GetVmInfo";
        let queryParams = new HttpParams()
            .append("VmI", item.VmI)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    GetVmList(item: GetVmList_Get): Observable<any> {
        var url = "/KvmVm/GetVmList";
        let queryParams = new HttpParams()
            .append("ServerI", item.ServerI)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    GetVmListInfo(item: GetVmListInfo_Get): Observable<any> {
        var url = "/KvmVm/GetVmListInfo";
        let queryParams = new HttpParams()
            .append("ServerI", item.ServerI)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    GetVmListRuntime(item: GetVmListRuntime_Get): Observable<any> {
        var url = "/KvmVm/GetVmListRuntime";
        let queryParams = new HttpParams()
            .append("ServerI", item.ServerI).append("ServerDecryptPass", item.ServerDecryptPass)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    DeleteVm1_FromServer(item: DeleteVm1_FromServer_Post): Observable<any> {
        var url = "/KvmVm/DeleteVm1_FromServer";
        return this.http.post(url, item).pipe();
    }


    DeleteVm2_FromDb(item: DeleteVm2_FromDb_Post): Observable<any> {
        var url = "/KvmVm/DeleteVm2_FromDb";
        return this.http.post(url, item).pipe();
    }


    DumpXmlVm(item: DumpXmlVm_Post): Observable<any> {
        var url = "/KvmVm/DumpXmlVm";
        return this.http.post(url, item).pipe();
    }


    ListVmDiskByKvm(item: ListVmDiskByKvm_Post): Observable<any> {
        var url = "/KvmVm/ListVmDiskByKvm";
        return this.http.post(url, item).pipe();
    }


    ChangeSshVmIpDb(item: ChangeSshVmIpDb_Post): Observable<any> {
        var url = "/KvmVm/ChangeSshVmIpDb";
        return this.http.post(url, item).pipe();
    }


    UpdateVmInfo(item: UpdateVmInfo_Post): Observable<any> {
        var url = "/KvmVm/UpdateVmInfo";
        return this.http.post(url, item).pipe();
    }


    UpdateAllVmInfo(item: UpdateAllVmInfo_Post): Observable<any> {
        var url = "/KvmVm/UpdateAllVmInfo";
        return this.http.post(url, item).pipe();
    }


    BashForEachVm(item: BashForEachVm_Post): Observable<any> {
        var url = "/KvmVm/BashForEachVm";
        return this.http.post(url, item).pipe();
    }


    LoadFile(item: LoadFile_Post): Observable<any> {
        var url = "/KvmVm/LoadFile";
        return this.http.post(url, item).pipe();
    }



}