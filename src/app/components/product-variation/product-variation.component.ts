import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductVariation } from '../../data/products';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-product-variation',
  templateUrl: './product-variation.component.html',
  styleUrls: ['./product-variation.component.scss']
})
export class ProductVariationComponent implements OnInit {

  @Input() public product: Product;

  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

  setSelectedProductVariation(prod: Product, event: any) {
    const selectedVar = (event as any).target.value;
    if (selectedVar === undefined || !selectedVar) {
      return;
    }
    prod.selectedProductVariation = prod.productVariations.filter((prodVar: ProductVariation) => prodVar.name === selectedVar)[0];
    this.cartService.updateProduct(prod);
  }

}
