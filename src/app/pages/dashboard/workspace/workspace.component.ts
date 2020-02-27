import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashborad/dashboard.service';
import { from, zip } from 'rxjs';
import { switchAll } from 'rxjs/operators';

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
  noticeList = [];
  teams = [];
  viewData = [];

  menus = ['操作一', '操作一', '操作一', '操作一', '操作一', '操作一'];
  loading = false;
  ngOnInit() {
    this.loading = true;

    zip(this.dashService.fetchCardList(), this.dashService.fetchNoticeList(), this.dashService.fetchTeamsList()).subscribe((res: any) => {
      this.loading = false;
      this.cardList = res[0].data;
      this.noticeList = res[1].data;
      this.teams = res[2].data;
    });
  }

}
