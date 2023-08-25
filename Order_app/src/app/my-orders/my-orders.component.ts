import { Component, OnInit } from '@angular/core';

import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { ProductsComponent } from '../products/products.component';


@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  

  orderedProducts: Product[] = [];

  constructor(private readonly productService: ProductsService) {}

  ngOnInit(): void {

      this.orderedProducts = this.productService.getOrderedProducts()
   
  }

  

  }

