import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions, HttpParameterCodec } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { DeployVM_Post } from './KvmDeployVm-input';
import { AbortDeployVM_Get } from './KvmDeployVm-input';
import { GetCurrentDeploymentLog_Get } from './KvmDeployVm-input';
import { GetCurrentDeploymentState_Get } from './KvmDeployVm-input';
import { SelectPartitionToDeploy1_Post } from './KvmDeployVm-input';
import { AllocatePartition2_Post } from './KvmDeployVm-input';
import { CopyTemplate2_Post } from './KvmDeployVm-input';
import { SetUpIpName3_Post } from './KvmDeployVm-input';
import { SetUpMasternode4_Post } from './KvmDeployVm-input';
import { BuildXmlVmConfig5_Post } from './KvmDeployVm-input';
import { AddVmToKvm6_Post } from './KvmDeployVm-input';
import { AddVmToDb7_Post } from './KvmDeployVm-input';
import { AddMasterNodeToDb8_Post } from './KvmDeployVm-input';


@Injectable({
    providedIn: 'root',
})

export class KvmDeployVmService {

    constructor(
        protected http: HttpClient) {
    }

    AbortDeployVM(item: AbortDeployVM_Get): Observable<any> {
        var url = "/KvmDeployVm/AbortDeployVM";
        let queryParams = new HttpParams()

        return this.http.get(url, { params: queryParams }).pipe();
    }

    GetCurrentDeploymentLog(item: GetCurrentDeploymentLog_Get): Observable<any> {
        var url = "/KvmDeployVm/GetCurrentDeploymentLog";
        let queryParams = new HttpParams()

        return this.http.get(url, { params: queryParams }).pipe();
    }

    GetCurrentDeploymentState(item: GetCurrentDeploymentState_Get): Observable<any> {
        var url = "/KvmDeployVm/GetCurrentDeploymentState";
        let queryParams = new HttpParams()

        return this.http.get(url, { params: queryParams }).pipe();
    }

    DeployVM(item: DeployVM_Post): Observable<any> {
        var url = "/KvmDeployVm/DeployVM";
        return this.http.post(url, item).pipe();
    }


    SelectPartitionToDeploy1(item: SelectPartitionToDeploy1_Post): Observable<any> {
        var url = "/KvmDeployVm/SelectPartitionToDeploy1";
        return this.http.post(url, item).pipe();
    }


    AllocatePartition2(item: AllocatePartition2_Post): Observable<any> {
        var url = "/KvmDeployVm/AllocatePartition2";
        return this.http.post(url, item).pipe();
    }


    CopyTemplate2(item: CopyTemplate2_Post): Observable<any> {
        var url = "/KvmDeployVm/CopyTemplate2";
        return this.http.post(url, item).pipe();
    }


    SetUpIpName3(item: SetUpIpName3_Post): Observable<any> {
        var url = "/KvmDeployVm/SetUpIpName3";
        return this.http.post(url, item).pipe();
    }


    SetUpMasternode4(item: SetUpMasternode4_Post): Observable<any> {
        var url = "/KvmDeployVm/SetUpMasternode4";
        return this.http.post(url, item).pipe();
    }


    BuildXmlVmConfig5(item: BuildXmlVmConfig5_Post): Observable<any> {
        var url = "/KvmDeployVm/BuildXmlVmConfig5";
        return this.http.post(url, item).pipe();
    }


    AddVmToKvm6(item: AddVmToKvm6_Post): Observable<any> {
        var url = "/KvmDeployVm/AddVmToKvm6";
        return this.http.post(url, item).pipe();
    }


    AddVmToDb7(item: AddVmToDb7_Post): Observable<any> {
        var url = "/KvmDeployVm/AddVmToDb7";
        return this.http.post(url, item).pipe();
    }


    AddMasterNodeToDb8(item: AddMasterNodeToDb8_Post): Observable<any> {
        var url = "/KvmDeployVm/AddMasterNodeToDb8";
        return this.http.post(url, item).pipe();
    }



}