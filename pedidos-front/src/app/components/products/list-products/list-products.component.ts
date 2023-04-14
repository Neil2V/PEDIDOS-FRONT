import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  products : Product[] = [];
  page! : number;

  constructor(
    private productService: ProductService,
    private toastrService: ToastrService,
    private router: Router
  ){}

  ngOnInit(): void{
    this.loadProducts();
  }

  loadProducts(): void{
    this.productService.listProducts().subscribe(
      data => {
        this.products = data;
      },
      err => {
        console.log(err);
      }
    )
  }

}
