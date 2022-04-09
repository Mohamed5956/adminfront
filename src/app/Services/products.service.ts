import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  getProducts()
  {
    return this.httpClient.get(`${environment.APIBaseURL}/products`);
  }

  getProductsByCatID(catID:number)
  {
    return this.httpClient.get(`${environment.APIBaseURL}/products?categoryID`);
  }

}
