import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../services/layout/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean;
  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
    this.layoutService.collapsed$.subscribe(v => this.isCollapsed = v);
  }

  toggle() {
    this.layoutService.collapsed$.next(!this.isCollapsed);
  }
}
