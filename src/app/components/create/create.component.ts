import { Component, OnInit } from '@angular/core';
import { Prices } from '../../data/prices';
import { BoxName, BoxNames } from '../../data/boxNames';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product, Products } from '../../data/products';
import { ROUTE_CART, ROUTE_CREATE_BOX } from '../../routes';
import { DonationProject } from '../../data/donationProject';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public ROUTE_CART = ROUTE_CART;
  public selectedPrice = 30; // set
  public boxes = BoxNames;
  public donationProject = DonationProject;
  public modalOpened = false;
  constructor(public route: ActivatedRoute,
              public router: Router,
              public cartService: CartService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log('params : ', params);
      if (params['id'] !== undefined) {
        const box = this.boxes.filter(x => x.short.toLowerCase() === params['id'].toLowerCase())[0];
        console.log('box : ', box);
        this.cartService.setSelectedBox(box);
        // this.selectedProducts = [];
        this.modalOpened = false;
      } else {
        this.cartService.reset();
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
    this.cartService.addToBox(product);
    if (this.cartService.getCurrentTotal() > 20) {
      this.modalOpened = true;
    }
  }

  isNotWithInBudget(product: Product): boolean {
    return this.cartService.isNotWithInBudget(product);
  }

  getCurrentTotal(): number {
    return this.cartService.getCurrentTotal();
  }

  calculateDonation(): number {
    return this.cartService.calculateDonation();
  }

}
