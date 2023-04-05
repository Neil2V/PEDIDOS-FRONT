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
}
