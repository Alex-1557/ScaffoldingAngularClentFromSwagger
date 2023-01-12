import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions, HttpParameterCodec } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { StartContainerRaw_Post } from './Container-input';
import { StartMasterNodeContainerByBash_Post } from './Container-input';
import { CreateContainerByDockerRaw_Post } from './Container-input';
import { CreateContainerByDocker_Post } from './Container-input';
import { StartContainerByDocker_Post } from './Container-input';
import { StopContainerByDocker_Post } from './Container-input';
import { RestartContainerByDocker_Post } from './Container-input';
import { RemoveContainerByDocker_Post } from './Container-input';
import { ReadContainerLogByDocker_Post } from './Container-input';
import { ListAllContainersByDocker_Post } from './Container-input';
import { ListRunningContainersByDocker_Post } from './Container-input';
import { InspectContainerByDocker_Post } from './Container-input';
import { ListContainerProcessesByDocker_Post } from './Container-input';
import { ListImagesByDocker_Post } from './Container-input';
import { ListVolumesByDocker_Post } from './Container-input';
import { AttachToContainerByDocker_Post } from './Container-input';


@Injectable({
    providedIn: 'root',
})

export class ContainerService {

    constructor(
        protected http: HttpClient) {
    }

    StartContainerRaw(item: StartContainerRaw_Post): Observable<any> {
        var url = "/Container/StartContainerRaw";
        return this.http.post(url, item).pipe();
    }


    StartMasterNodeContainerByBash(item: StartMasterNodeContainerByBash_Post): Observable<any> {
        var url = "/Container/StartMasterNodeContainerByBash";
        return this.http.post(url, item).pipe();
    }


    CreateContainerByDockerRaw(item: CreateContainerByDockerRaw_Post): Observable<any> {
        var url = "/Container/CreateContainerByDockerRaw";
        return this.http.post(url, item).pipe();
    }


    CreateContainerByDocker(item: CreateContainerByDocker_Post): Observable<any> {
        var url = "/Container/CreateContainerByDocker";
        return this.http.post(url, item).pipe();
    }


    StartContainerByDocker(item: StartContainerByDocker_Post): Observable<any> {
        var url = "/Container/StartContainerByDocker";
        return this.http.post(url, item).pipe();
    }


    StopContainerByDocker(item: StopContainerByDocker_Post): Observable<any> {
        var url = "/Container/StopContainerByDocker";
        return this.http.post(url, item).pipe();
    }


    RestartContainerByDocker(item: RestartContainerByDocker_Post): Observable<any> {
        var url = "/Container/RestartContainerByDocker";
        return this.http.post(url, item).pipe();
    }


    RemoveContainerByDocker(item: RemoveContainerByDocker_Post): Observable<any> {
        var url = "/Container/RemoveContainerByDocker";
        return this.http.post(url, item).pipe();
    }


    ReadContainerLogByDocker(item: ReadContainerLogByDocker_Post): Observable<any> {
        var url = "/Container/ReadContainerLogByDocker";
        return this.http.post(url, item).pipe();
    }


    ListAllContainersByDocker(item: ListAllContainersByDocker_Post): Observable<any> {
        var url = "/Container/ListAllContainersByDocker";
        return this.http.post(url, item).pipe();
    }


    ListRunningContainersByDocker(item: ListRunningContainersByDocker_Post): Observable<any> {
        var url = "/Container/ListRunningContainersByDocker";
        return this.http.post(url, item).pipe();
    }


    InspectContainerByDocker(item: InspectContainerByDocker_Post): Observable<any> {
        var url = "/Container/InspectContainerByDocker";
        return this.http.post(url, item).pipe();
    }


    ListContainerProcessesByDocker(item: ListContainerProcessesByDocker_Post): Observable<any> {
        var url = "/Container/ListContainerProcessesByDocker";
        return this.http.post(url, item).pipe();
    }


    ListImagesByDocker(item: ListImagesByDocker_Post): Observable<any> {
        var url = "/Container/ListImagesByDocker";
        return this.http.post(url, item).pipe();
    }


    ListVolumesByDocker(item: ListVolumesByDocker_Post): Observable<any> {
        var url = "/Container/ListVolumesByDocker";
        return this.http.post(url, item).pipe();
    }


    AttachToContainerByDocker(item: AttachToContainerByDocker_Post): Observable<any> {
        var url = "/Container/AttachToContainerByDocker";
        return this.http.post(url, item).pipe();
    }



}