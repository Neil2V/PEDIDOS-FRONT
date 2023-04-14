import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/models/order';
import { OrdersService } from 'src/app/service/orders.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit{

  orders: Order[]= null;
  page! : number;

  constructor(
    private router: Router,
    private orderService: OrdersService,
    private toastrService: ToastrService
  ){}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void{
      this.orderService.listOrders().subscribe(
        data => {
          this.orders = data;
        },
        err => {
          this.toastrService.error(err, 'Fail !',{
            timeOut: 3000,
            positionClass: 'toast-top-center'
          });
        }
      );
  }


}
