import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

import { environment } from './../../environments/environment';
import { AuthenticateRequest } from './AuthenticateRequest';
import { AuthenticateResponse } from './AuthenticateResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private tokenKey: string = "token";
  private userName: string = "userName";
  private userId: string = "userId";

  private _authStatus = new Subject<boolean>();
  public authStatus = this._authStatus.asObservable();

  constructor(
    protected http: HttpClient) {
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getId(): string | null {
    return localStorage.getItem(this.userId);
  }

  getName(): string | null {
    return localStorage.getItem(this.userName);
  }

  init(): void {
    if (this.isAuthenticated())
      this.setAuthStatus(true);
  }

  login(item: AuthenticateRequest): Observable<AuthenticateResponse> {
    var url = "http://localhost:7000/User/Authenticate";
    return this.http.post<AuthenticateResponse>(url, item)
      .pipe(tap(loginResult => {
        if (loginResult.Token) {
          localStorage.setItem(this.tokenKey, loginResult.Token);
          localStorage.setItem(this.userName, loginResult.Username!);
          localStorage.setItem(this.userId, loginResult.Id!.toString());
          this.setAuthStatus(true);
        }
      }));
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.setAuthStatus(false);
  }

  private setAuthStatus(isAuthenticated: boolean): void {
    this._authStatus.next(isAuthenticated);
  }
}
