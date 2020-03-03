import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterAppComponent } from './center-app.component';

describe('CenterAppComponent', () => {
  let component: CenterAppComponent;
  let fixture: ComponentFixture<CenterAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
