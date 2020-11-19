import { Component, OnInit } from '@angular/core';
import { ShippingOption, ShippingOptions } from '../../data/shippingOptions';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public shippingOptions = ShippingOptions;
  public selectedShippingOption: ShippingOption|null = null;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.selectedShippingOption = this.shippingOptions[1];
  }

}
