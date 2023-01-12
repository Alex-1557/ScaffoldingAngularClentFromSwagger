import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions, HttpParameterCodec } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { AddBashJob_Post } from './Notification-input';
import { BashJobFinished_Post } from './Notification-input';
import { FlushAllNotificationForOneUser_Get } from './Notification-input';
import { FlushNotification_Get } from './Notification-input';
import { ListNotificationCacheWaitingToSendToSubscriber_Get } from './Notification-input';
import { ListAllClientConnectionToHub_Get } from './Notification-input';
import { NotificationCacheState_Get } from './Notification-input';
import { NotifyAllClientsSRV_Get } from './Notification-input';
import { NotifyOneClientSRV_Get } from './Notification-input';
import { NotifyAllClientsTST_Get } from './Notification-input';
import { NotifyOneClientTST_Get } from './Notification-input';
import { ListAllDockerEventsConnectionToHub_Get } from './Notification-input';
import { NotifyAllDockerEventsClientsTST_Get } from './Notification-input';
import { NotifyOneDockerEventsClientTST_Get } from './Notification-input';
import { ContainerStart_Get } from './Notification-input';
import { ContainerStop_Get } from './Notification-input';


@Injectable({
    providedIn: 'root',
})

export class NotificationService {

    constructor(
        protected http: HttpClient) {
    }

    FlushAllNotificationForOneUser(item: FlushAllNotificationForOneUser_Get): Observable<any> {
        var url = "/Notification/FlushAllNotificationForOneUser";
        let queryParams = new HttpParams()
            .append("UserID", item.UserID)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    FlushNotification(item: FlushNotification_Get): Observable<any> {
        var url = "/Notification/FlushNotification";
        let queryParams = new HttpParams()

        return this.http.get(url, { params: queryParams }).pipe();
    }

    ListNotificationCacheWaitingToSendToSubscriber(item: ListNotificationCacheWaitingToSendToSubscriber_Get): Observable<any> {
        var url = "/Notification/ListNotificationCacheWaitingToSendToSubscriber";
        let queryParams = new HttpParams()

        return this.http.get(url, { params: queryParams }).pipe();
    }

    ListAllClientConnectionToHub(item: ListAllClientConnectionToHub_Get): Observable<any> {
        var url = "/Notification/ListAllClientConnectionToHub";
        let queryParams = new HttpParams()

        return this.http.get(url, { params: queryParams }).pipe();
    }

    NotificationCacheState(item: NotificationCacheState_Get): Observable<any> {
        var url = "/Notification/NotificationCacheState";
        let queryParams = new HttpParams()

        return this.http.get(url, { params: queryParams }).pipe();
    }

    NotifyAllClientsSRV(item: NotifyAllClientsSRV_Get): Observable<any> {
        var url = "/Notification/NotifyAllClientsSRV";
        let queryParams = new HttpParams()

        return this.http.get(url, { params: queryParams }).pipe();
    }

    NotifyOneClientSRV(item: NotifyOneClientSRV_Get): Observable<any> {
        var url = "/Notification/NotifyOneClientSRV";
        let queryParams = new HttpParams()
            .append("ConnectionID", item.ConnectionID)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    NotifyAllClientsTST(item: NotifyAllClientsTST_Get): Observable<any> {
        var url = "/Notification/NotifyAllClientsTST";
        let queryParams = new HttpParams()

        return this.http.get(url, { params: queryParams }).pipe();
    }

    NotifyOneClientTST(item: NotifyOneClientTST_Get): Observable<any> {
        var url = "/Notification/NotifyOneClientTST";
        let queryParams = new HttpParams()
            .append("ConnectionID", item.ConnectionID)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    ListAllDockerEventsConnectionToHub(item: ListAllDockerEventsConnectionToHub_Get): Observable<any> {
        var url = "/Notification/ListAllDockerEventsConnectionToHub";
        let queryParams = new HttpParams()

        return this.http.get(url, { params: queryParams }).pipe();
    }

    NotifyAllDockerEventsClientsTST(item: NotifyAllDockerEventsClientsTST_Get): Observable<any> {
        var url = "/Notification/NotifyAllDockerEventsClientsTST";
        let queryParams = new HttpParams()

        return this.http.get(url, { params: queryParams }).pipe();
    }

    NotifyOneDockerEventsClientTST(item: NotifyOneDockerEventsClientTST_Get): Observable<any> {
        var url = "/Notification/NotifyOneDockerEventsClientTST";
        let queryParams = new HttpParams()
            .append("ConnectionID", item.ConnectionID)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    ContainerStart(item: ContainerStart_Get): Observable<any> {
        var url = "/Notification/ContainerStart";
        let queryParams = new HttpParams()
            .append("ID", item.ID).append("name", item.name).append("Time", item.Time).append("N", item.N)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    ContainerStop(item: ContainerStop_Get): Observable<any> {
        var url = "/Notification/ContainerStop";
        let queryParams = new HttpParams()
            .append("ID", item.ID).append("name", item.name).append("Time", item.Time).append("N", item.N)
        return this.http.get(url, { params: queryParams }).pipe();
    }

    AddBashJob(item: AddBashJob_Post): Observable<any> {
        var url = "/Notification/AddBashJob";
        return this.http.post(url, item).pipe();
    }


    BashJobFinished(item: BashJobFinished_Post): Observable<any> {
        var url = "/Notification/BashJobFinished";
        return this.http.post(url, item).pipe();
    }



}