import { Component,OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  categories = ['Books', 'Clothing', 'Sports', 'Electronics'];

  constructor( private productsService:ProductsService){

  }

  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      price: new FormControl ('', [Validators.required, Validators.min(0)]),
      category: new FormControl ('', [Validators.required, Validators.pattern(/^(Books|Clothing|Sports|Electronics)$/)]),
      stock: new FormControl('', [Validators.required, Validators.min(0)]),
    });
  }

  onFormSubmit() {
    if (this.productForm.valid) {
      const newProduct = {
        id: this.productsService.getNextProductId(),
        ...this.productForm.value,
      };
      this.productsService.addProduct(newProduct);
      this.productForm.reset();
    }
  }

}
