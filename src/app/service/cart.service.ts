import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../data/products';
import { BoxName } from '../data/boxNames';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public products: Product[];
  public selectedBox: BoxName|null;

  constructor() {
    this.reset();
  }

  reset() {
    this.products = [];
    this.selectedBox = null;
  }

  setSelectedBox(box: BoxName) {
    this.selectedBox = box;

    // ??????????
    this.setProducts(box.fixedProducts);
  }

  setProducts(products: Product[]) {
    this.products = [...products];
  }

  addProduct(product: Product) {
    console.log('called addProduct');
    this.products.push(product);
  }

  removeProduct(product: Product) {
    const pos = this.findIndex(product.id);
    this.products.splice(pos, 1);
  }

  findIndex(id: string): number {
    return this.products.findIndex(x => x.id === id);
  }

  calculateDonation() {
    const diff = this.selectedBox.maxPrice - this.getCurrentTotal();
    return this.selectedBox.maxPrice === diff || diff === 0 ? 1 : diff;
  }

  isNotWithInBudget(product: Product): boolean {
    return this.getCurrentTotal() + product.price > this.selectedBox.maxPrice;
  }

  getCurrentTotal() {
    if (!this.products || this.products.length === 0) {
      return 0;
    }
    return this.products.reduce((a, b) => a + b.price, 0);
  }

  getSelectedNumberOfProducts(): number {
    if (!this.selectedBox) {
      return this.products.length;
    }
    return this.selectedBox.fixedProducts.length + this.products.length;
  }

  isSelectedProduct(product: Product): boolean {
    return this.products.filter(x => x.id === product.id).length > 0;
  }

  addToBox(product: Product) {
    console.log('called addToBox');
    if (this.isSelectedProduct(product)) {
      const pos = this.products.findIndex(x => x.id === product.id);
      this.products.splice(pos, 1);
    } else {
      if (this.isNotWithInBudget(product)) {
        console.log('not within budget');
        return;
      }
      this.addProduct(product);
    }
  }

  updateProduct(product: Product) {
    console.log('updating product ' , this.findIndex(product.id));
    this.products[this.findIndex(product.id)] = {...product};
    console.log(this.products[this.findIndex(product.id)]);
  }
}
