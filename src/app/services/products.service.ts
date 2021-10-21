import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  isLoading = true;
  products: Product[] = []
  productsFiltered: Product[] = []

  constructor(public http: HttpClient) {

    this.loadProducts();
  }

  private loadProducts() {

    return new Promise((resolve, reject) => {

      this.http.get('https://angular-portfolio-5f8c0-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((result: any) => {
  
        this.isLoading = false;
        this.products = result;
        resolve(null);
      })
    })
  }

  /**
   * Get Product
   * @param idProduct Id Product
   */
  public getProduct(idProduct: string): any {

    return this.http.get(`https://angular-portfolio-5f8c0-default-rtdb.firebaseio.com/productos/${idProduct}.json`)
  }

  public searchProduct(searchValue: string) {

    // Check if exist products
    if(this.products.length === 0) {

      this.loadProducts().then(() => {

        this.filterProducts(searchValue);
      });

    } else {
      
      this.filterProducts(searchValue);
    }
  }

  private filterProducts(searchValue: string) {

    this.productsFiltered = this.products.filter((product) => {

      return ((product.titulo.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0) || (product.categoria.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0));
    })
  }
}
