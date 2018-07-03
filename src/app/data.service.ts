import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product, PRODUCTS } from './products/product';

@Injectable()
export class DataService {
  productTypes: string[] = ['electronics', 'fashion', 'sports', 'cycles'];
  products = PRODUCTS;
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    // return this.http.get<Product[]>('./assets/products.json');
    return of(this.products);
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

  addProduct(product: Product) {
    product.id = this.products.length;
    this.products.push(product);
  }
}
