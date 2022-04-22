import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserInformation } from '../Models/user-information';
import { Users } from '../Models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpOptions = {};

    constructor(private httpClient:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  getAllUsers(): Observable <Users[]> {
    return this.httpClient.get <Users[]>(`${environment.APIBaseURL}/usersAdmin`);
  }

  getUserByID(UserID:number): Observable <UserInformation> {
    return this.httpClient.get <UserInformation>(`${environment.APIBaseURL}/view-user/${UserID}`);
  }

  updateUser(newRole: Users): Observable<Users> {
    console.log(newRole);
    return this.httpClient.put<Users>(`${environment.APIBaseURL}/update-user/${newRole.id}`, JSON.stringify(newRole), this.httpOptions)
  }


  getDataUser(UserID:number):Observable<Users>{
    //return this.httpClient.get <Users>(`${environment.APIBaseURL}/users/${UserID}`)
    return this.httpClient.get <Users>(`${environment.APIBaseURL}/showuser/${UserID}`);

  }

}
