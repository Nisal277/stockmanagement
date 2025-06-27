import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit 
{
  products: any[] = [];

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

}

