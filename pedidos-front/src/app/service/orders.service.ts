import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  orderUrl = "http://localhost:8080/fractal/pedido";

  constructor(
    private httpCliente: HttpClient
  ) { }

  public listOrders(): Observable<Order[]>{
    return this.httpCliente.get<Order[]>(this.orderUrl+"/list");
  }

  public createOrder(order: Order): Observable<any>{
    return this.httpCliente.post(this.orderUrl+"/create", order, {responseType: 'text'});
  } 

}
