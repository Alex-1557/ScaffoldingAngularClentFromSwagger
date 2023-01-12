import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions, HttpParameterCodec } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { GetDockerHostList_Get } from './Docker-input';
import { GetDockerHubDbInfo_Get } from './Docker-input';
import { UpdateDockerHubDbConfigInfo_Post } from './Docker-input';
import { GetDockerHubRuntimeInfo_Post } from './Docker-input';
import { UpdateDockerHubInfo_Post } from './Docker-input';
import { GetDockerServiceLog_Post } from './Docker-input';
import { GetDockerInfo_Post } from './Docker-input';
import { GetDockerEvents_Post } from './Docker-input';
import { DeleteDockerHubFromDb_Post } from './Docker-input';
import { AddDockerHubInfoToDb_Post } from './Docker-input';


@Injectable({
    providedIn: 'root',
})

export class DockerService {

    constructor(
        protected http: HttpClient) {
    }

    GetDockerHostList(item: GetDockerHostList_Get): Observable<any> {
        var url = "/Docker/GetDockerHostList";
        let queryParams = new HttpParams()

        return this.http.get(url, { params: queryParams }).pipe();
    }

    GetDockerHubDbInfo(item: GetDockerHubDbInfo_Get): Observable<any> {
        var url = "/Docker/GetDockerHubDbInfo";
        let queryParams = new HttpParams()
            .append("I", item.I)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    UpdateDockerHubDbConfigInfo(item: UpdateDockerHubDbConfigInfo_Post): Observable<any> {
        var url = "/Docker/UpdateDockerHubDbConfigInfo";
        return this.http.post(url, item).pipe();
    }


    GetDockerHubRuntimeInfo(item: GetDockerHubRuntimeInfo_Post): Observable<any> {
        var url = "/Docker/GetDockerHubRuntimeInfo";
        return this.http.post(url, item).pipe();
    }


    UpdateDockerHubInfo(item: UpdateDockerHubInfo_Post): Observable<any> {
        var url = "/Docker/UpdateDockerHubInfo";
        return this.http.post(url, item).pipe();
    }


    GetDockerServiceLog(item: GetDockerServiceLog_Post): Observable<any> {
        var url = "/Docker/GetDockerServiceLog";
        return this.http.post(url, item).pipe();
    }


    GetDockerInfo(item: GetDockerInfo_Post): Observable<any> {
        var url = "/Docker/GetDockerInfo";
        return this.http.post(url, item).pipe();
    }


    GetDockerEvents(item: GetDockerEvents_Post): Observable<any> {
        var url = "/Docker/GetDockerEvents";
        return this.http.post(url, item).pipe();
    }


    DeleteDockerHubFromDb(item: DeleteDockerHubFromDb_Post): Observable<any> {
        var url = "/Docker/DeleteDockerHubFromDb";
        return this.http.post(url, item).pipe();
    }


    AddDockerHubInfoToDb(item: AddDockerHubInfoToDb_Post): Observable<any> {
        var url = "/Docker/AddDockerHubInfoToDb";
        return this.http.post(url, item).pipe();
    }



}