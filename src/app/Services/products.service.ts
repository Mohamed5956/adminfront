import { Observable } from 'rxjs';
import { Products } from './../Models/products';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }


  getProducts() :Observable <Products[]>
  {
    return this.httpClient.get<Products[]>(`${environment.APIBaseURL}/products`);
  }


  getproductbyID(id:number):Observable<Products>
  {
    return this.httpClient.get<Products>(`${environment.APIBaseURL}/products/${id}`);  //return object

  }

  addproduct(product:Products) :Observable<Products>
  {
    return this.httpClient.post<Products>(`${environment.APIBaseURL}/products`,product);
  }


  getproducstbycategoryID(categoryId:number):Observable<Products[]>
  {
    if(categoryId==0)
    return this.getProducts();
    return this.httpClient.get<Products[]>(`${environment.APIBaseURL}/getproducts/${categoryId}`);

  }


  editproduct(product:Products) :Observable<Products>
  {
    return this.httpClient.put<Products>(`${environment.APIBaseURL}/products/${product.id}`,product);
  }


  deleteproduct(productId:number): Observable<Products[]>
  {
    return this.httpClient.delete<Products[]>(`${environment.APIBaseURL}/products/${productId}`);
  }


}
