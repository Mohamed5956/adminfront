import { environment } from './../../environments/environment.prod';
import { Auth } from './../Models/auth';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {


  private httpOptions = {};
  constructor(private httpClient:HttpClient)
  {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

  }

    intercept(req:HttpRequest<any>, next:HttpHandler) {
    let token=req.clone(
    {
      setHeaders:{
        Authorization:`Bearer ${localStorage.getItem('login')}`
      }

    })

      return next.handle(token);

  }

  auth_login(data:Auth): Observable <any> {

    return this.httpClient.post(`${environment.APIBaseURL}/login`,data);
  }

  auth_logout()
  {

    return this.httpClient.delete(`${environment.APIBaseURL}/logout`);
  }


    sendemail(data:any):Observable<any>
    {
      return this.httpClient.post(`${environment.APIBaseURL}/resetpassword`,data);
    }

    updatepassword(data:any):Observable<any>
    {
      console.log(data);
      return this.httpClient.post(`${environment.APIBaseURL}/updatepassword`,data);

    }


  loggedIn()
  {
    if(localStorage.getItem('login')&&localStorage.getItem('role')&&localStorage.getItem('role')!='user')
      return true;

      return false;
  }

   admin()
   {
    if(localStorage.getItem('role')=='admin')
      return true;

      return false;

   }



}
