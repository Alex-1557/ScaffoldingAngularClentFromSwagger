import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions, HttpParameterCodec } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { DeletePartitionFromServer_Post } from './KvmDiskOperation-input';
import { DeletePartitionFromDB_Get } from './KvmDiskOperation-input';
import { DeleteVolumeFromDB_Post } from './KvmDiskOperation-input';
import { AddPartitionToServer_Post } from './KvmDiskOperation-input';
import { AddPartitionToDB_Post } from './KvmDiskOperation-input';
import { FormatPartition_Post } from './KvmDiskOperation-input';
import { ListDevicePartition_Post } from './KvmDiskOperation-input';
import { GetFreeDevicePartitionName_Post } from './KvmDiskOperation-input';
import { ListDiskDevice_Post } from './KvmDiskOperation-input';
import { ListLvmDevice_Post } from './KvmDiskOperation-input';
import { ListLvmMember_Post } from './KvmDiskOperation-input';
import { UpdatePartitionInDB_Post } from './KvmDiskOperation-input';
import { ListDirectory_Post } from './KvmDiskOperation-input';
import { GetServerPartitions_Get } from './KvmDiskOperation-input';
import { GetFreeServerPartitions_Get } from './KvmDiskOperation-input';
import { AddKvmVolumeToServer_Post } from './KvmDiskOperation-input';
import { AddKvmVolumeToDb_Post } from './KvmDiskOperation-input';
import { SyncKvmVolume_Post } from './KvmDiskOperation-input';
import { KvmStorageList_Post } from './KvmDiskOperation-input';
import { KvmVmPoolList_Post } from './KvmDiskOperation-input';


@Injectable({
    providedIn: 'root',
})

export class KvmDiskOperationService {

    constructor(
        protected http: HttpClient) {
    }

    DeletePartitionFromDB(item: DeletePartitionFromDB_Get): Observable<any> {
        var url = "/KvmDiskOperation/DeletePartitionFromDB";
        let queryParams = new HttpParams()
            .append("PartitionI", item.PartitionI)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    GetServerPartitions(item: GetServerPartitions_Get): Observable<any> {
        var url = "/KvmDiskOperation/GetServerPartitions";
        let queryParams = new HttpParams()
            .append("ServerI", item.ServerI)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    GetFreeServerPartitions(item: GetFreeServerPartitions_Get): Observable<any> {
        var url = "/KvmDiskOperation/GetFreeServerPartitions";
        let queryParams = new HttpParams()
            .append("ServerI", item.ServerI).append("GapOnly", item.GapOnly).append("OneDeviceOnly", item.OneDeviceOnly)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    DeletePartitionFromServer(item: DeletePartitionFromServer_Post): Observable<any> {
        var url = "/KvmDiskOperation/DeletePartitionFromServer";
        return this.http.post(url, item).pipe();
    }


    DeleteVolumeFromDB(item: DeleteVolumeFromDB_Post): Observable<any> {
        var url = "/KvmDiskOperation/DeleteVolumeFromDB";
        return this.http.post(url, item).pipe();
    }


    AddPartitionToServer(item: AddPartitionToServer_Post): Observable<any> {
        var url = "/KvmDiskOperation/AddPartitionToServer";
        return this.http.post(url, item).pipe();
    }


    AddPartitionToDB(item: AddPartitionToDB_Post): Observable<any> {
        var url = "/KvmDiskOperation/AddPartitionToDB";
        return this.http.post(url, item).pipe();
    }


    FormatPartition(item: FormatPartition_Post): Observable<any> {
        var url = "/KvmDiskOperation/FormatPartition";
        return this.http.post(url, item).pipe();
    }


    ListDevicePartition(item: ListDevicePartition_Post): Observable<any> {
        var url = "/KvmDiskOperation/ListDevicePartition";
        return this.http.post(url, item).pipe();
    }


    GetFreeDevicePartitionName(item: GetFreeDevicePartitionName_Post): Observable<any> {
        var url = "/KvmDiskOperation/GetFreeDevicePartitionName";
        return this.http.post(url, item).pipe();
    }


    ListDiskDevice(item: ListDiskDevice_Post): Observable<any> {
        var url = "/KvmDiskOperation/ListDiskDevice";
        return this.http.post(url, item).pipe();
    }


    ListLvmDevice(item: ListLvmDevice_Post): Observable<any> {
        var url = "/KvmDiskOperation/ListLvmDevice";
        return this.http.post(url, item).pipe();
    }


    ListLvmMember(item: ListLvmMember_Post): Observable<any> {
        var url = "/KvmDiskOperation/ListLvmMember";
        return this.http.post(url, item).pipe();
    }


    UpdatePartitionInDB(item: UpdatePartitionInDB_Post): Observable<any> {
        var url = "/KvmDiskOperation/UpdatePartitionInDB";
        return this.http.post(url, item).pipe();
    }


    ListDirectory(item: ListDirectory_Post): Observable<any> {
        var url = "/KvmDiskOperation/ListDirectory";
        return this.http.post(url, item).pipe();
    }


    AddKvmVolumeToServer(item: AddKvmVolumeToServer_Post): Observable<any> {
        var url = "/KvmDiskOperation/AddKvmVolumeToServer";
        return this.http.post(url, item).pipe();
    }


    AddKvmVolumeToDb(item: AddKvmVolumeToDb_Post): Observable<any> {
        var url = "/KvmDiskOperation/AddKvmVolumeToDb";
        return this.http.post(url, item).pipe();
    }


    SyncKvmVolume(item: SyncKvmVolume_Post): Observable<any> {
        var url = "/KvmDiskOperation/SyncKvmVolume";
        return this.http.post(url, item).pipe();
    }


    KvmStorageList(item: KvmStorageList_Post): Observable<any> {
        var url = "/KvmDiskOperation/KvmStorageList";
        return this.http.post(url, item).pipe();
    }


    KvmVmPoolList(item: KvmVmPoolList_Post): Observable<any> {
        var url = "/KvmDiskOperation/KvmVmPoolList";
        return this.http.post(url, item).pipe();
    }



}