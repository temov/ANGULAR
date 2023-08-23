import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { PRODUCTS } from '../mock-data/products-data';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private _products:Product[] = PRODUCTS;
  _selectedProduct = new EventEmitter<Product>
  

  getProducts():Product[]{

    return this._products;
  }

  orderProduct(productId:number):Product|undefined {

    const product = this._products.find(product => product.id === productId);

    if (product && product.stock > 0) {
      product.stock--;
    }
    return product
  }

  setSelectedProduct(product:Product):void{

    this._selectedProduct.emit(product)

  }
}
