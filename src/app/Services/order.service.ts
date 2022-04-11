import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Orders } from '../Models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private httpOptions = {};

  constructor(private httpClient:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  getPendingOrders(): Observable <Orders[]> {
    return this.httpClient.get<Orders[]>(`${environment.APIBaseURL}/orders`);
  }

  getFinishedOrders(): Observable <Orders[]> {
    return this.httpClient.get<Orders[]>(`${environment.APIBaseURL}/order-history`);
  }

  getOrderByID(orderID: number): Observable<Orders>{
      return this.httpClient.get<Orders>(`${environment.APIBaseURL}/orders/${orderID}`);
  }

  editOrder(orderID: number, newStatus: Orders) {
    return this.httpClient.put(`${environment.APIBaseURL}/orders`, JSON.stringify(newStatus), this.httpOptions)
  }

  updateOrder(newStatus: Orders): Observable<Orders> {
    return this.httpClient.put<Orders>(`${environment.APIBaseURL}/orders/${newStatus.id}`, JSON.stringify(newStatus), this.httpOptions)
  }


}
