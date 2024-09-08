import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'assets/data/products.json';

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.mockProducts());
  }

  private mockProducts(): Product[] {
    return [
      { id: 1, name: 'Laptop', description: 'High performance laptop', price: 999.99, imageUrl: 'assets/images/laptop.jpg' },
      { id: 2, name: 'Smartphone', description: 'Latest smartphone model', price: 699.99, imageUrl: 'assets/images/smartphone.jpg' },
      { id: 3, name: 'Headphones', description: 'Noise-cancelling headphones', price: 199.99, imageUrl: 'assets/images/headphones.jpg' }
    ];
  }
}
