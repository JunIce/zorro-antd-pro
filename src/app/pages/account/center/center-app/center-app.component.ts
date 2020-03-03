import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center-app',
  templateUrl: './center-app.component.html',
  styleUrls: ['./center-app.component.less']
})
export class CenterAppComponent implements OnInit {

  constructor() { }
  list = new Array(12);
  ngOnInit() {
  }

}
