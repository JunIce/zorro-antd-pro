import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.less']
})
export class SecurityComponent implements OnInit {

  constructor(private message: NzMessageService) { }

  ngOnInit() {
  }

  handleClick() {
    this.message.info('This is a normal message');
  }
}
