import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { PRODUCTS } from '../mock-data/products-data';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private _products:Product[] = PRODUCTS;
  private orderedProducts:Product[] = []
  

  getProducts():Product[]{

    return this._products;
  }

  orderProduct(productId:number){
      const product = this._products.find((p) => p.id === productId)

        if (product && product.stock > 0) {
            product.stock--;
            this.orderedProducts.push(product)
          }
  }
  

  getOrderedProducts():Product[]{

    return this.orderedProducts;
  }

  
}
