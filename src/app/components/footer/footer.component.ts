import { Component, OnInit } from '@angular/core';
import { ROUTE_PRODUCTS } from '../../routes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public ROUTE_PRODUCTS = ROUTE_PRODUCTS;
  constructor() { }

  ngOnInit() {
  }

}
