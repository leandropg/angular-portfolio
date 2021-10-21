import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDescription } from 'src/app/interfaces/product.description.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  id: string = "";
  productDescription: ProductDescription = {};

  constructor(private route: ActivatedRoute, public productService: ProductsService) { }

  ngOnInit(): void {

    this.route.params
    .subscribe( (parameters) => {

      this.productService.getProduct(parameters.id)
      .subscribe((product: ProductDescription) => {

        this.id = parameters.id;
        this.productDescription = product;
      });
    });
  }
}
