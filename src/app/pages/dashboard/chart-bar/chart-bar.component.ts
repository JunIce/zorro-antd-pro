import { Component, OnInit, Input } from '@angular/core';
import { ChartBar } from '../../../entities';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.less']
})
export class ChartBarComponent implements OnInit {

  constructor() { }
  @Input() title: string;
  @Input() data: ChartBar[] = [];
  forceFit = true;
  scale = [{
    dataKey: 'x',
    min: 2
  }, {
    dataKey: 'y',
    title: '时间',
    min: 1,
    max: 22
  }];

  ngOnInit() {
    console.log(this.data);
  }
}
