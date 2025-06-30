import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-home',
  imports: [ProductList],
  templateUrl: './home.html',
  styleUrl: './home.css',
  
})
export class Home {
  
  constructor(private router: Router){}

  onAddProduct() 
  {
    this.router.navigate(['/add-product']);
  }

onViewProducts()
{
  this.router.navigate(["/product-list"]);
}




}
