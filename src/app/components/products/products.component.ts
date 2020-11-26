import { Component, OnInit } from '@angular/core';
import { BoxNames } from '../../data/boxNames';
import { Product, Products, ProductVariation } from '../../data/products';

interface ProductSummary extends ProductVariation {
  productName: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products = Products;
  public productVariations: ProductSummary[];
  constructor() {
    this.productVariations = [];
    this.products.map((x: Product) => {
      x.productVariations.map((y: ProductVariation) => {
        this.productVariations.push({...y, productName: x.name});
      });
    });
  }

  ngOnInit() {
  }

}
