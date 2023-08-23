import { Component, OnInit } from '@angular/core';

import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  selectedProduct: Product | undefined ;

  orderedProducts: Product[] = [];

  constructor(private readonly productService: ProductsService, private readonly route:ActivatedRoute) {}

  ngOnInit(): void {

    this.route.params.subscribe(params =>{

      const productId = params['/'] // vo mojot slucaj nemam route params bidejki imam poseban ruta za page: my-orders , ne znam kako da postapam tuka

    this.selectedProduct = this.productService.orderProduct(productId)
    this.orderedProducts = this.productService.setSelectedProduct(product)
  })

  

  }
}
