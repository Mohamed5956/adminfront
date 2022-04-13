import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  getUserByID(UserID:number): Observable <Users> {
    return this.httpClient.get <Users>(`${environment.APIBaseURL}/view-user/${UserID}`);
  }

  updateUser(newRole: Users): Observable<Users> {
    return this.httpClient.put<Users>(`${environment.APIBaseURL}/update-user/${newRole.id}`, JSON.stringify(newRole), this.httpOptions)
  }

}
