import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit{

  product: Product;
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
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ){}
    
  ngOnInit(): void{
    this.loadProduct();
  }


  
  editProduct(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.productService.updateProduct(id, this.product).subscribe(
      response => {
        this.toastrService.success(response, 'Ok !',{
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastrService.error(err, 'Fail !',{
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
      }
    );
  }

  loadProduct(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(id).subscribe(
      data => {     
        this.product = data;     
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
