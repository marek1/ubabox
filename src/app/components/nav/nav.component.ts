import { Component, OnInit } from '@angular/core';
import { ROUTE_CART, ROUTE_PRODUCTS } from '../../routes';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public ROUTE_CART = ROUTE_CART;
  public ROUTE_PRODUCTS = ROUTE_PRODUCTS;
  constructor(public cartService: CartService) {

  }

  ngOnInit() {
  }

  getNumber() {
    const lengthOfFixed = this.cartService.selectedBox ? this.cartService.selectedBox.fixedProducts.length : 0;
    return this.cartService.products.length > 0 ? this.cartService.products.length : lengthOfFixed;
  }

}
