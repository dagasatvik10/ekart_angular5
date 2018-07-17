import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product, PRODUCTS } from './products/product';

@Injectable()
export class DataService {
  productTypes: string[] = ['electronics', 'fashion', 'sports', 'cycles'];
  products = PRODUCTS;
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  getProductsByType(type: string, page?: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products/${type}?page=${page || 1}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.getProducts().pipe(
      map(products => products.find(p => p.id === id)),
    );
  }

  addProduct(product: Product) {
    product.id = this.products.length;
    this.products.push(product);
  }

  getProductsCountByType(type: string): Observable<{count: number, limit: number}> {
    return this.http.get<{count: number, limit: number}>(`${this.baseUrl}/products/count?type=${type}`)
    .pipe(
      map((obj: {count: number}) => ({count: obj.count, limit: 4}))
    );
  }
}
