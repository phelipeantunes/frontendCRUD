import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {
product: Product = {
id:0,
name:'',
price: 0
}
  constructor(
    private router:Router,
    private productService: ProductsService) { }

  ngOnInit() {
  }
  createProduct(){
    this.productService.create(this.product).subscribe(() =>{
      this.productService.showMessage('Produto Criado');
      this.router.navigate(['/product-crud']);
    });
  }
  cancel(){
    this.router.navigate(['./product-crud'])
  }
}
