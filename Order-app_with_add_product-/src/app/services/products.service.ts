import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { PRODUCTS } from '../mock-data/products-data';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private _products:Product[] = PRODUCTS;
  private orderedProducts:Product[] = []

  private productsSubject = new BehaviorSubject<Product[]>(this._products)
  products$: Observable<Product[]> = this.productsSubject.asObservable();

  private orderedProductsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  orderedProducts$: Observable<Product[]> = this.orderedProductsSubject.asObservable();

  

  getProducts():Product[]{

    return this._products;
  }

  orderProduct(productId:number):void{
      const product = this._products.find((p) => p.id === productId)

        if (product && product.stock > 0) {
            product.stock--;
            this.productsSubject.next([...this._products])
            this.orderedProductsSubject.next([...this.orderedProductsSubject.value, { ...product }]);
          }
  }
  

  getOrderedProducts():Product[]{

    return this.orderedProducts;
  }

  addProduct(product: Product): void {
    this._products.push(product);
    this.productsSubject.next([...this._products]);
  }

  getNextProductId(): number {
    const maxId = Math.max(...this._products.map((p) => p.id));
    return maxId + 1;
  }
  
}
