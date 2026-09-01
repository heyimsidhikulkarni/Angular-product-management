import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class Productservice {
  private showProductUrl='http://localhost:8080/product/showallproducts';

  constructor(private http:HttpClient) {}

  showAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.showProductUrl);
  }

}
