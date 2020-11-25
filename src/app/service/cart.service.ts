import { Injectable } from '@angular/core';
import { Product } from '../data/products';
import { BoxName } from '../data/boxNames';
import { HANDLING_FEE, PAYMENT_FEE, SHIPPING_FEE, shippingWithDhl } from '../data/global';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public products: Product[];
  public selectedBox: BoxName|null;

  constructor(public http: HttpClient) {
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

  calculatePaymentFee(price: number): string {
    return parseFloat(((price * 0.0249) + 0.35).toString()).toFixed(2);
  }

  calculateProvision(price: number, currentTotal: number) {
    return (parseFloat(price.toString()) - parseFloat(currentTotal.toString())).toFixed(2);
  }

  calculateShippingCosts() {
    return shippingWithDhl;
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
    this.products[this.findIndex(product.id)] = {...product};
  }

  sendEmail(data: any) {
    // send to https://imkiez.de/imkiez/kiezbox
    // email : data.payer.email_address
    // full_name : data.purchase_units.shipping.full_name
    // address : data.purchase_units.shipping.address.map(x --> concenate)
    // items: data.purchase_units.items.map(x => x.name)
    // shipping: data.purchase_units.items.filter(x => x.name === 'Versand' ).length === 0 ? 'Abholung' : 'Versand'
    this.http.post('https://imkiez.de/imkiez/kiezbox', {
      email: data.payer.email_address,
      full_name: data.payer.name.given_name + ' ' + data.payer.name.surname,
      address: Object.values(data.purchase_units[0].shipping.address).join(' '),
      items: data.purchase_units[0].items.filter(x => x.name !== PAYMENT_FEE &&
        x.name !== SHIPPING_FEE && x.name !== HANDLING_FEE).join(', '),
      shipping: data.purchase_units[0].items.filter(x => x.name === SHIPPING_FEE).length > 0 ? 'Versand' : 'Abholung'
    }).subscribe(() => console.log('sent'));
  }

}
