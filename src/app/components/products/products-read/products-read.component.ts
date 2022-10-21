import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-read',
  templateUrl: './products-read.component.html',
  styleUrls: ['./products-read.component.css']
})
export class ProductsReadComponent implements OnInit {

  products!: Product[];
  displayedColumns= ['id', 'name', 'price', 'action'];


  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  this.productService.readProduct().subscribe(products =>{
    this.products = products;
    console.log(products);
  })
  }
  getProductsRead(){

  }
}
