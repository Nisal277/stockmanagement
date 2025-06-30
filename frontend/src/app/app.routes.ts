import { Routes } from '@angular/router';
import {Home} from './components/home/home'
import { AddProduct } from './components/add-product/add-product';
import { ProductList } from './components/product-list/product-list';
import { LockScreen } from './components/lock-screen/lock-screen'; // 👈

export const routes: Routes = [
    { path: '', redirectTo: 'lock', pathMatch: 'full' }, 
    {path: 'add-product', component: AddProduct },
    {path: 'product-list' , component: ProductList },
    { path: 'lock', component: LockScreen },
     { path: 'home', component: Home }

];


