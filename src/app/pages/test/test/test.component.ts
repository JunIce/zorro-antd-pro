import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, from, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit, OnDestroy {

  constructor() { }

  subscribe$ = new Subject();

  target1$ = from(this.subscribe$).pipe(
    map((v: number) => v + 2),
    startWith(1)
  );

  target2$ = from(this.target1$).pipe(map((v: number) => v + 5));

  ngOnInit() {
    console.log(this.target2$);

    combineLatest(this.subscribe$, this.target1$, this.target2$).subscribe(res => console.log(res));
  }

  ngOnDestroy() {
    this.subscribe$.unsubscribe();
  }
}
