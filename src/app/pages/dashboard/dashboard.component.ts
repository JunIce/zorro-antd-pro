import { Component, OnInit } from '@angular/core';
import { ChartBar } from '../../entities';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  loading = false;
  barData: ChartBar[] = [];
  barData2: ChartBar[] = [];

  date_range: Date[] = [];
  rankList = [];

  constructor() { }

  ngOnInit() {

    for (let i = 0; i < 12; i += 1) {
      this.barData.push({
        x: `${i + 1}月`,
        y: Math.floor(Math.random() * 1000) + 200
      });
      this.barData2.push({
        x: `${i + 1}月`,
        y: Math.floor(Math.random() * 1000) + 200
      });
    }

    for (let i = 0; i < 7; i++) {
      this.rankList.push({
        name: '白鹭岛 ' + (i + 1) + ' 号店',
        total: 1234.56 - i * 100
      });
    }
  }

  handleRangeChange(e: Event) {
    console.log(e);
  }

  setDate(params: string) {
    console.log(params);
  }

}
