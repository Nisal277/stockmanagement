import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
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
