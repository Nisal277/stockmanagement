import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8081/api/products';

  constructor(private http: HttpClient) { }

  addProduct(product: any): Observable<any> {
    return this.http.post(this.baseUrl, product);
  }

  getAllProducts(): Observable<any> {
  return this.http.get(this.baseUrl);
  }

  updateProduct(id: string , product: any): Observable<any>
  {
    return this.http.put(`${this.baseUrl}/${id}`, product);
  }

  deleteProduct(id: string): Observable<any> 
  {
  return this.http.delete(`${this.baseUrl}/${id}`);
  }


}



