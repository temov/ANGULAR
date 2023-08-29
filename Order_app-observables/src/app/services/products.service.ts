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

  private orderedProductsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.orderedProducts);
  orderedProducts$: Observable<Product[]> = this.orderedProductsSubject.asObservable();

  

  getProducts():Product[]{

    return this._products;
  }

  orderProduct(productId:number):void{

    const productToBuy = this._products.find((p) => p.id === productId)
     

      if(productToBuy){

        console.log(productToBuy)
        const productInCart = this.orderedProducts.find((p) => p.id === productId);

      if(!productInCart){

        console.log('Product is not in cart');
        productToBuy.stock--;
        this.orderedProducts.push({...productToBuy, counter:1});
        this.orderedProductsSubject.next([...this.orderedProducts]);
        console.log(this.orderedProducts);

      };
      if(productInCart){

        console.log('Product is already in cart');
        productToBuy.stock--;
        productInCart.counter && productInCart.counter++
        this.orderedProductsSubject.next([...this.orderedProducts]);
        console.log(this.orderedProducts);

      };
      this.productsSubject.next([...this._products])
      
  }
}
  

  getOrderedProducts():Product[]{

    return this.orderedProducts;
  }
  
  
}


