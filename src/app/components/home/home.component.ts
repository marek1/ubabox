import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoxNames } from '../../data/boxNames';
import { ROUTE_CREATE_BOX } from '../../routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public boxNames = BoxNames;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToPage(x?: string) {
    if (x === undefined) {
      this.router.navigate([ROUTE_CREATE_BOX]);
    }
    this.router.navigate([ROUTE_CREATE_BOX, x]);
  }

}
