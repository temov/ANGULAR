import { Component,OnInit } from '@angular/core';

import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';


import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;

  constructor( private productsService:ProductsService){

  }

  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      price: new FormControl ('', [Validators.required, Validators.min(0)]),
      category: new FormControl ('', [Validators.required, this.validateCategory]),
      stock: new FormControl('', [Validators.required, Validators.min(0)]),
    });
  }

  validateCategory = (control: FormControl): {[key: string]: boolean} | null => {
    const validCategories = ['Books', 'Clothing', 'Sports', 'Electronics'];

    return validCategories.includes(control.value) ? null : { invalidCategory: true };

    
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
