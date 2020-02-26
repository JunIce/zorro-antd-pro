import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashborad/dashboard.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.less']
})
export class WorkspaceComponent implements OnInit {

  gridStyle = { width: '25%' };

  constructor(
    private dashService: DashboardService
  ) { }

  cardList = [];
  ngOnInit() {
    this.dashService.fetchCardList().subscribe((data: any) => {
      this.cardList = data.data;
    });
  }

}
