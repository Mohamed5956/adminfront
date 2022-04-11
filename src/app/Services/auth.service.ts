import { environment } from './../../environments/environment.prod';
import { Auth } from './../Models/auth';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private httpOptions = {};
  constructor(private httpClient:HttpClient)
   {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

  }

  auth_login(data:any): Observable <Auth> {

    return this.httpClient.post<Auth>(`${environment.APIBaseURL}/login`,data);
  }
}
