import { Component, OnInit } from '@angular/core';
import { ROUTE_CART } from '../../routes';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public ROUTE_CART = ROUTE_CART;
  constructor() { }

  ngOnInit() {
  }

}
