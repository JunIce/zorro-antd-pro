import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.less']
})
export class StepFormComponent implements OnInit {

  constructor() { }
  current = 2;
  list = ['east.qrj@gmail.com'];
  email: string = null;
  acount: string = null;
  receiver: string = null;
  pay: string = null;
  method = '支付宝';

  password = null;

  ngOnInit() {
  }

}
