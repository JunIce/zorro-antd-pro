import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../services/layout/layout.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  isCollapsed: boolean;
  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
    this.layoutService.collapsed$.subscribe(v => this.isCollapsed = v);
  }

}
