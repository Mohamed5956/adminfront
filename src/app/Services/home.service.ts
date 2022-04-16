import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient:HttpClient) { }



   users() {
  return this.httpClient.get(`${environment.APIBaseURL}/numberusers`);
   }

   clients()
   {
    return this.httpClient.get(`${environment.APIBaseURL}/numbercustomers`);
   }

   orders()
   {
    return this.httpClient.get(`${environment.APIBaseURL}/todayorders`);

   }

   sales()
   {
     return this.httpClient.get(`${environment.APIBaseURL}/sales`);
   }


}
