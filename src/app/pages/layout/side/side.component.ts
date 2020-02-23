import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../services/layout/layout.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.less']
})
export class SideComponent implements OnInit {

  isCollapsed: boolean;

  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
    this.layoutService.collapsed$.subscribe(v => this.isCollapsed = v);
  }
}
