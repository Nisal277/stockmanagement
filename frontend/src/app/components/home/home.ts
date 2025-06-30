import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-home',
  imports: [ProductList],
  templateUrl: './home.html',
  styleUrl: './home.css',
  
})
export class Home implements OnInit  {
  
  time: string = '';

  constructor(private router: Router){}

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

   updateTime() {
    const now = new Date();
    this.time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  onAddProduct() 
  {
    this.router.navigate(['/add-product']);
  }

onViewProducts()
{
  this.router.navigate(["/product-list"]);
}


}
