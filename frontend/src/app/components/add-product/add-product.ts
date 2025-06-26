import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule , HttpClientModule],
  templateUrl: './add-product.html',
  styleUrls: ['./add-product.css']
})
export class AddProduct 
{
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['' , Validators.required],
      quantity: [0, Validators.required],
      price: [0, Validators.required]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      
      this.productService.addProduct(productData).subscribe({
        next: res=> {
          alert ('product added successfully')
          this.productForm.reset();
        },

        error: err=>
        {
          console.error('error adding product',err);
          alert ('something went wrong');

        }
      })
    }
  }

}
