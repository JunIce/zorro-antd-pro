import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center-project',
  templateUrl: './center-project.component.html',
  styleUrls: ['./center-project.component.less']
})
export class CenterProjectComponent implements OnInit {

  constructor() { }
  list = new Array(12);
  ngOnInit() {
  }

}
