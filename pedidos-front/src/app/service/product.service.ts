import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl = "http://localhost:8080/fractal/product";


  constructor(
    private httpCliente: HttpClient
  ) { }
 
  public listProducts(): Observable<Product[]>{
    return this.httpCliente.get<Product[]>(this.productUrl+'/list');
  }

  public createProduct(product: Product): Observable<any>{
    return this.httpCliente.post(this.productUrl+'/create',product, {responseType: 'text'}); 
  }

  public deleteProduct(id: number): Observable<any>{
    return this.httpCliente.delete(this.productUrl+`/delete/${id}`, {responseType: 'text'});
  }

  public updateProduct(id: number, product: Product): Observable<any>{
    return this.httpCliente.put(this.productUrl+`/update/${id}`, product, {responseType: 'text'});
  }

  public getProductById(id: number): Observable<any>{
    return this.httpCliente.get<Product>(this.productUrl+`/${id}`);
  }
  
}
