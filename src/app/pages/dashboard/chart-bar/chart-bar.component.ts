import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ChartBar } from '../../../entities';

@Component({
  selector: 'app-chart-bar',
  template: `
    <div class="bar">
      <h4>{{ title }}</h4>
      <v-chart
        [height]="328"
        [(data)]="data"
        [forceFit]="true"
        [padding]="[20, 30, 20, 30]"
      >
        <v-tooltip></v-tooltip>
        <v-axis></v-axis>
        <v-bar position="x*y"></v-bar>
      </v-chart>
    </div>
  `,
  styles: [
    `.bar {
        padding: 0 0 32px 32px
      }

      h4 {
          margin-bottom: 20px
      }`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
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
