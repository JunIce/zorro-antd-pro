import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.less']
})
export class CenterComponent implements OnInit {
  index2 = 0;
  list = new Array(8);
  constructor() { }

  ngOnInit() {
  }

}
