import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ProductsService } from 'src/app/components/products/products.service';
@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router:Router,
    private productService:HeaderService){
      productService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  }
  navigateToProductCreate(){
    this.router.navigate(['products/products-create']);
    console.log('navegando..');
  }
}
