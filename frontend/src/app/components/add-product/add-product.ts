import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  templateUrl: './add-product.html',
  styleUrls: ['./add-product.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule]
})
export class AddProduct {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0.01)]]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;

      this.productService.addProduct(productData).subscribe({
        next: () => {
          alert('✅ Product added successfully!');
          this.productForm.reset();
        },
        error: (err) => {
          console.error('❌ Error adding product:', err);
          alert('Something went wrong while saving.');
        }
      });
    } else {
      alert('⚠️ Please fill out all fields correctly.');
    }
  }
}
