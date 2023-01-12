import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions, HttpParameterCodec } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { ZipPartition_Post } from './VmImage-input';
import { ListPartitionImages_Post } from './VmImage-input';
import { ListPartitionImagesFromDB_Get } from './VmImage-input';
import { SyncPartitionImages_Post } from './VmImage-input';
import { UnZipPartition_Post } from './VmImage-input';


@Injectable({
    providedIn: 'root',
})

export class VmImageService {

    constructor(
        protected http: HttpClient) {
    }

    ListPartitionImagesFromDB(item: ListPartitionImagesFromDB_Get): Observable<any> {
        var url = "/VmImage/ListPartitionImagesFromDB";
        let queryParams = new HttpParams()

        return this.http.get(url, { params: queryParams }).pipe();
    }

    ZipPartition(item: ZipPartition_Post): Observable<any> {
        var url = "/VmImage/ZipPartition";
        return this.http.post(url, item).pipe();
    }


    ListPartitionImages(item: ListPartitionImages_Post): Observable<any> {
        var url = "/VmImage/ListPartitionImages";
        return this.http.post(url, item).pipe();
    }


    SyncPartitionImages(item: SyncPartitionImages_Post): Observable<any> {
        var url = "/VmImage/SyncPartitionImages";
        return this.http.post(url, item).pipe();
    }


    UnZipPartition(item: UnZipPartition_Post): Observable<any> {
        var url = "/VmImage/UnZipPartition";
        return this.http.post(url, item).pipe();
    }



}