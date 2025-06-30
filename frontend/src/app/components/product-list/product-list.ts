import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit 
{
  products: any[] = [];
  editMode: boolean = false;

  constructor(private productService: ProductService){}

  ngOnInit(): void 
  {
      this.productService.getAllProducts().subscribe({
        next: (res) => {
          this.products = res;
        },

        error: (err) => {
        console.error('Error loading products:', err);
      }

      });
  }

  enableEdit()
  {
    this.editMode = true;
  }

  saveProduct(product: any) {
  console.log('Saving product:', product); // ✅ Add this
  this.productService.updateProduct(product.id, product).subscribe({
    next: () => {
      alert('Product updated successfully');
    },
    error: (err) => {
      console.error('Error updating product:', err);
    }
  });
}

deleteProduct(product: any)
{
  const confirmed = confirm(`Are you sure you want to delete "${product.name}"?`);
  if (!confirmed) return;

  this.productService.deleteProduct(product.id).subscribe
  ({
    next: () =>
    {
      alert('Product deleted successfully');
      this.products = this.products.filter(p => p.id !== product.id);

    },

    error: (err) =>
    {
      console.error('Error deleting product:', err);
    }
  });
}



}

