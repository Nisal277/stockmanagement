import { Routes } from '@angular/router';
import {Home} from './components/home/home'
import { AddProduct } from './components/add-product/add-product';
import { ProductList } from './components/product-list/product-list';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'add-product', component: AddProduct },
    {path: 'product-list' , component: ProductList }

];


