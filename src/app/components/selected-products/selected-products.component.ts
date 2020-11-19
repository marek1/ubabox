import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { DonationProject } from '../../data/donationProject';

@Component({
  selector: 'app-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.scss']
})
export class SelectedProductsComponent implements OnInit {

  public donationProject = DonationProject;
  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

}
