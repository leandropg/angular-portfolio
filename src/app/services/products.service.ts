import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  isLoading = true;
  products: any[] = []

  constructor(public http: HttpClient) {

    this.loadProducts();
  }

  private loadProducts() {

    this.http.get('https://angular-portfolio-5f8c0-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((result: any) => {

      this.isLoading = false;
      this.products = result;
      console.log(result);
    })
  }
}
