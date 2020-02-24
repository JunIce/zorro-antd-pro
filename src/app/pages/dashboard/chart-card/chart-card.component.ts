import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.less']
})
export class ChartCardComponent implements OnInit {

  @Input() loading = false;
  @Input() title: string | TemplateRef<void>;
  @Input() total: string;
  @Input() action: string | TemplateRef<void>;
  @Input() footer: string | TemplateRef<void>;


  bodyStyle = { padding: '20px 24px 8px' };
  constructor() { }

  ngOnInit() {
  }

}
