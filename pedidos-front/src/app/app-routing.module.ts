import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { NewProductComponent } from './components/products/new-product/new-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { ListOrdersComponent } from './components/orders/list-orders/list-orders.component';
import { NewOrderComponent } from './components/orders/new-order/new-order.component';


const routes: Routes = [
  {path: '', component: ListProductsComponent},
  {path: 'products', component: ListProductsComponent},
  {path: 'product/new', component: NewProductComponent},
  {path: 'product/edit/:id', component: EditProductComponent},
  {path: 'orders', component: ListOrdersComponent},
  {path: 'order/new', component: NewOrderComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
