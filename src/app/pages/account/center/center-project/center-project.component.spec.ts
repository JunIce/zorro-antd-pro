import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterProjectComponent } from './center-project.component';

describe('CenterProjectComponent', () => {
  let component: CenterProjectComponent;
  let fixture: ComponentFixture<CenterProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
