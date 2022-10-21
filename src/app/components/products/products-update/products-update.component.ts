import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.css']
})
export class ProductsUpdateComponent implements OnInit {
  product!: Product;
  constructor(
    private router:Router,
    private productService: ProductsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe(product => {
      this.product = product;
    });
  }
  updateProduct(){
    this.productService.update(this.product).subscribe(() =>{
      this.productService.showMessage('Produto Atualizado');
    this.router.navigate(['/product-crud']);
    });
  }
  cancel(){
    this.router.navigate(['/product-crud'])
  }
}
