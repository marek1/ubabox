import { Component, OnInit } from '@angular/core';
import { Prices } from '../../data/prices';
import { BoxName, BoxNames } from '../../data/boxNames';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product, Products } from '../../data/products';
import { ROUTE_CART, ROUTE_CREATE_BOX } from '../../routes';
import { DonationProject } from '../../data/donationProject';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public ROUTE_CART = ROUTE_CART;
  public selectedPrice = 30; // set
  public boxes = BoxNames;
  public selectedBox: BoxName|null;
  public donationProject = DonationProject;
  public selectedProducts: Product[];
  public modalOpened = false;
  constructor(public route: ActivatedRoute, public router: Router) {
    this.selectedBox = null;
    this.selectedProducts = [];
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['id'] !== undefined) {
        this.selectedBox = this.boxes.filter(x => x.short.toLowerCase() === params['id'].toLowerCase())[0];
        this.selectedProducts = [];
        this.modalOpened = false;
      }
    });
  }

  selectBox(box?: BoxName) {
    if (box === undefined) {
      this.router.navigate([ROUTE_CREATE_BOX]);
      return;
    }
    this.router.navigate([ROUTE_CREATE_BOX, box.short]);
  }

  addToBox(product: Product) {
    this.modalOpened = false;
    if (this.isSelectedProduct(product)) {
      const pos = this.selectedProducts.findIndex(x => x.id === product.id);
      this.selectedProducts.splice(pos, 1);
    } else {
      if (this.isNotWithInBudget(product)) {
        return;
      }
      this.selectedProducts.push(product);
      if (this.getCurrentTotal() > 20) {
        this.modalOpened = true;
      }
    }
  }

  isSelectedProduct(product: Product): boolean {
    return this.selectedProducts.filter(x => x.id === product.id).length > 0;
  }

  isNotWithInBudget(product: Product): boolean {
    return this.getCurrentTotal() + product.price > this.selectedBox.maxPrice;
  }

  getSelectedNumberOfProducts(): number {
    if (!this.selectedBox) {
      return this.selectedProducts.length;
    }
    return this.selectedBox.fixedProducts.length + this.selectedProducts.length;
  }

  getCurrentTotal(): number {
    if (!this.selectedBox) {
      return 0;
    }
    return (this.selectedBox.fixedProducts.length > 0 ?
      this.selectedBox.fixedProducts.reduce((a, b) => a + b.price, 0) : 0) +
      this.selectedProducts.reduce((a, b) => a + b.price, 0);
  }

  calculateDonation(): number {
    const diff = this.selectedBox.maxPrice - this.getCurrentTotal();
    return this.selectedBox.maxPrice === diff || diff === 0 ? 1 : diff;
  }

}
