import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit{

  name = '';
  category = '';
  price : number = null;
  status = '';

  statusArray = [
    { statusOption: 'Active', value: 'Active' },
    { statusOption: 'Inactive', value: 'Inactive'}
  ] 

  constructor(
    private productService: ProductService,
    private router: Router ,
    private toastr: ToastrService
  ){}

  ngOnInit(): void {
    
  }

  createProduct(): void{
    const product = new Product(this.name, this.category, this.price, this.status);

    console.log("show product: ", product);

    this.productService.createProduct(product).subscribe(
        response => {
          
          this.toastr.success(response, 'Ok !', {
            timeOut: 3000,
            positionClass: 'toast-top-center'
          });
          this.router.navigate(['/']);
        },
        err => {
          this.toastr.success(`Error, ${err}`, 'Ok !', {
            timeOut: 3000,
            positionClass: 'toast-top-center'
          });
          console.log("Fail: ",err);
        }
    );
  } 

}
