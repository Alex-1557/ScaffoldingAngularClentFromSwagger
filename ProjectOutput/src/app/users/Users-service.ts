import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions, HttpParameterCodec } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Authenticate_Post } from './Users-input';
import { GetAll_Get } from './Users-input';


@Injectable({
    providedIn: 'root',
})

export class UsersService {

    constructor(
        protected http: HttpClient) {
    }

    GetAll(item: GetAll_Get): Observable<any> {
        var url = "/Users/GetAll";
        let queryParams = new HttpParams()

        return this.http.get(url, { params: queryParams }).pipe();
    }

    Authenticate(item: Authenticate_Post): Observable<any> {
        var url = "/Users/Authenticate";
        return this.http.post(url, item).pipe();
    }



}