import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:Product[] = [];
  selectedProduct:Product;

  constructor( private readonly productsService:ProductsService, private readonly router: Router){

  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.productsService._selectedProduct.subscribe(res=>{
    this.selectedProduct = res;
    })
  }

   onSelectProduct(product:Product){
    this.productsService.setSelectedProduct(product);
    this.router.navigate(['/my-orders'])
   }

}
