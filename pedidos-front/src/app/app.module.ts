import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';



import { NewProductComponent } from './components/products/new-product/new-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { DetailProductComponent } from './components/products/detail-product/detail-product.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListOrdersComponent } from './components/orders/list-orders/list-orders.component';
import { NewOrderComponent } from './components/orders/new-order/new-order.component';
import { EditOrderComponent } from './components/orders/edit-order/edit-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    
    
    NewProductComponent,
    EditProductComponent,
    DetailProductComponent,
    ListProductsComponent,
    ListOrdersComponent,
    NewOrderComponent,
    EditOrderComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
