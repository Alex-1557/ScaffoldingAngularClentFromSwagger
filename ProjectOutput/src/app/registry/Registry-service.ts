import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions, HttpParameterCodec } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { GetRegistryList_Get } from './Registry-input';
import { GetRegistryReportFromDb_Get } from './Registry-input';
import { AddRegistryInfoToDb_Post } from './Registry-input';
import { GetRegistryImageList_Get } from './Registry-input';
import { DeleteRegistryImageFromDb_Get } from './Registry-input';
import { GetRegistryRuntimeCatalog_Post } from './Registry-input';
import { GetRegistryRuntimeTagList_Post } from './Registry-input';
import { GetRegistryRuntimeManifestAndDigest_Post } from './Registry-input';
import { GetRegistryRuntimeFullContent_Post } from './Registry-input';
import { UpdateRegistryDbFromRuntime_Post } from './Registry-input';
import { AddNewRegistryServerToDb_Post } from './Registry-input';
import { LoadRegistryImageToDb_Post } from './Registry-input';


@Injectable({
    providedIn: 'root',
})

export class RegistryService {

    constructor(
        protected http: HttpClient) {
    }

    GetRegistryList(item: GetRegistryList_Get): Observable<any> {
        var url = "/Registry/GetRegistryList";
        let queryParams = new HttpParams()

        return this.http.get(url, { params: queryParams }).pipe();
    }

    GetRegistryReportFromDb(item: GetRegistryReportFromDb_Get): Observable<any> {
        var url = "/Registry/GetRegistryReportFromDb";
        let queryParams = new HttpParams()

        return this.http.get(url, { params: queryParams }).pipe();
    }

    GetRegistryImageList(item: GetRegistryImageList_Get): Observable<any> {
        var url = "/Registry/GetRegistryImageList";
        let queryParams = new HttpParams()
            .append("toDockerRegistry", item.toDockerRegistry)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    DeleteRegistryImageFromDb(item: DeleteRegistryImageFromDb_Get): Observable<any> {
        var url = "/Registry/DeleteRegistryImageFromDb";
        let queryParams = new HttpParams()
            .append("toDockerRegistry", item.toDockerRegistry).append("ImageName", item.ImageName)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    AddRegistryInfoToDb(item: AddRegistryInfoToDb_Post): Observable<any> {
        var url = "/Registry/AddRegistryInfoToDb";
        return this.http.post(url, item).pipe();
    }


    GetRegistryRuntimeCatalog(item: GetRegistryRuntimeCatalog_Post): Observable<any> {
        var url = "/Registry/GetRegistryRuntimeCatalog";
        return this.http.post(url, item).pipe();
    }


    GetRegistryRuntimeTagList(item: GetRegistryRuntimeTagList_Post): Observable<any> {
        var url = "/Registry/GetRegistryRuntimeTagList";
        return this.http.post(url, item).pipe();
    }


    GetRegistryRuntimeManifestAndDigest(item: GetRegistryRuntimeManifestAndDigest_Post): Observable<any> {
        var url = "/Registry/GetRegistryRuntimeManifestAndDigest";
        return this.http.post(url, item).pipe();
    }


    GetRegistryRuntimeFullContent(item: GetRegistryRuntimeFullContent_Post): Observable<any> {
        var url = "/Registry/GetRegistryRuntimeFullContent";
        return this.http.post(url, item).pipe();
    }


    UpdateRegistryDbFromRuntime(item: UpdateRegistryDbFromRuntime_Post): Observable<any> {
        var url = "/Registry/UpdateRegistryDbFromRuntime";
        return this.http.post(url, item).pipe();
    }


    AddNewRegistryServerToDb(item: AddNewRegistryServerToDb_Post): Observable<any> {
        var url = "/Registry/AddNewRegistryServerToDb";
        return this.http.post(url, item).pipe();
    }


    LoadRegistryImageToDb(item: LoadRegistryImageToDb_Post): Observable<any> {
        var url = "/Registry/LoadRegistryImageToDb";
        return this.http.post(url, item).pipe();
    }



}