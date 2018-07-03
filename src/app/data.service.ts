import { Observable } from 'rxjs/Observable';
import { tap, map, scan } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from './products/product';

@Injectable()
export class DataService {
  productTypes: string[] = ['electronics', 'fashion', 'sports', 'cycles'];
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('./assets/products.json');
  }

  getProductsByType(type: string): Observable<Product[]> {
    return this.getProducts().pipe(
      map(products => products.filter(p => p.type === type)),
    );
  }

  getProductById(id: number): Observable<Product> {
    return this.getProducts().pipe(
      map(products => products.find(p => p.id === id)),
    );
  }
}
