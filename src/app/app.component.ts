import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { ProductsService } from './services/products.service';
import { Observable, tap } from 'rxjs';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'simpleOnlineShop';
  loading = false;
  products: Product[];
  term = '';

  constructor(
    public productService: ProductsService,
    public modalService: ModalService
  ){

  }

  ngOnInit(): void {
    this.loading = true;
    this.productService.getAll().subscribe(() => {
      this.loading = false;
    })
  }
}
