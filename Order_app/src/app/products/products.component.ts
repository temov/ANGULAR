import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

 
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:Product[] = [];
  selectedProduct:Product;

  constructor( private readonly productsService:ProductsService){

  }

    
    ngOnInit(): void {
    this.products = this.productsService.getProducts();
  
    }

    orderProduct(productId:number): void {
      this.productsService.orderProduct(productId);
    }
  


}
