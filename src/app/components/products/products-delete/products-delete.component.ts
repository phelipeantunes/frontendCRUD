import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.css'],
})
export class ProductsDeleteComponent implements OnInit {
  constructor(
    private router: Router,
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  deleteProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.delete(id!).subscribe(() => {
      this.productService.showMessage('Produto excluido');
      this.router.navigate(['/product-crud']);
    });
  }
  cancel() {
    this.router.navigate(['/product-crud']);
  }
}
