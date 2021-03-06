import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Authentication } from '../models/authentication';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class JWTService {

  api = new ApiService(this.httpClient);

  constructor(private httpClient: HttpClient) { }
  
  login(username: string, password: string) {
    const url = 'http://localhost:8080/LocacoesRS/api/login';
    return this.httpClient.post<Authentication> (url, {username, password}).pipe(tap(res=> {
      res.when = new Date();
      localStorage.setItem('username', username);
      localStorage.setItem('role', res.roles.toString()); 
      localStorage.setItem('authentication', JSON.stringify(res));
      localStorage.setItem('access_token', res.access_token);
      localStorage.setItem('refresh_token', res.refresh_token);
    }));
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('authentication');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  getAuthentication(): Observable<Authentication> {
    const token = localStorage.getItem('refresh_token');
    const payload = new HttpParams()
      .set('grant_type', 'refresh_token')
      .set('refresh_token', token);
    const url = 'http://localhost:8080/LocacoesRS/oauth/access_token';
    return this.httpClient.post<Authentication>(url,payload).pipe(
      tap(_=> console.debug('getAuthentication'))
    );
  }

  async refreshToken() {
    const auth: Authentication = await this.getAuthentication().toPromise();
    auth.when = new Date();
    localStorage.setItem('authentication', JSON.stringify(auth));
    localStorage.setItem('access_token', auth.access_token);
    localStorage.setItem('refresh_token', auth.refresh_token);
    console.debug('RefreshToken(): I will wait until promise is resolved...');
  }

  public get loggedIn(): boolean {
    const hasToken: boolean = localStorage.getItem('access_token') !== null;
    if (hasToken) {
      const auth = JSON.parse(localStorage.getItem('authentication'));
      const date1: number = new Date(auth.when).getTime() / 1000 + auth.expires_in;
      const date2: number = new Date().getTime() / 1000;
      if (date1 < date2) {
        console.debug('token expired... refreshing token');
        this.refreshToken();
      }
    }
    return hasToken
  }

  getUsername(): String {
    return localStorage.getItem('username')
  }

  getRole(): String {
    return localStorage.getItem('role')
  }
}
