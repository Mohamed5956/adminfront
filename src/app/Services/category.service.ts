import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../Models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private httpOptions = {};

  constructor(private httpClient:HttpClient) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

  }

  getAllCategories(): Observable <Category[]> {

    return this.httpClient.get<Category[]>(`${environment.APIBaseURL}/categories`);
  }

  getCategoryByID(catID: number): Observable<Category>{
      return this.httpClient.get<Category>(`${environment.APIBaseURL}/categories/${catID}`);
  }

  addCategory(newCat: Category): Observable<Category> {
    return this.httpClient.post<Category>(`${environment.APIBaseURL}/categories`, JSON.stringify(newCat), this.httpOptions);
  }

  editCategory(catID: number, newCat: Category) {
    return this.httpClient.put(`${environment.APIBaseURL}/categories`, JSON.stringify(newCat), this.httpOptions)
  }

  updateProduct(newCat: Category): Observable<Category> {
    return this.httpClient.put<Category>(`${environment.APIBaseURL}/categories/${newCat.id}`, JSON.stringify(newCat), this.httpOptions)

  }

  deleteProduct(catID: number): Observable<{}> {
    const url = `${environment.APIBaseURL}/categories/${catID}`;
    return this.httpClient.delete(`${environment.APIBaseURL}/categories/${catID}`, this.httpOptions)
  }

}
