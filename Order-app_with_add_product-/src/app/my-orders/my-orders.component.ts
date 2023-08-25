import { Component} from '@angular/core';

import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';



@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent {

  

  orderedProducts: Product[] = [];

  constructor(private readonly productService: ProductsService) {
    this.productService.orderedProducts$.subscribe((orderedProducts) => {
    this.orderedProducts = orderedProducts;
  
  });


  }
}

