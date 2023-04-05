import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  products : Product[] = [];

  constructor(
    private productService: ProductService,
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
