import { Component, OnInit } from '@angular/core';
import { Prices } from '../../data/prices';
import { BoxName, BoxNames } from '../../data/boxNames';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public prices = Prices;
  public selectedPrice: number;
  public boxes = BoxNames;
  public selectedBox: BoxName;

  constructor(public router: ActivatedRoute) {

  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      console.log('params ;: ' , params['id']);
      if (params['id'] !== undefined) {
        this.selectedBox = this.boxes.filter(x => x.short.toLowerCase() === params['id'].toLowerCase())[0];
      }
    });
  }

}
