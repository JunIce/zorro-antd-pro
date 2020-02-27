import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseService {

  constructor(
    private http: HttpClient
  ) {
    super();
  }


  fetchCardList() {
    return this.http.get(this.baseUrl + `/dashboard/workspace/cardlist`);
  }

  fetchNoticeList() {
    return this.http.get(this.baseUrl + '/dashboard/workspace/cardlist/list');
  }

  fetchTeamsList() {
    return this.http.get(this.baseUrl + '/dashboard/workspace/teams');
  }
}
