import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterArticleComponent } from './center-article.component';

describe('CenterArticleComponent', () => {
  let component: CenterArticleComponent;
  let fixture: ComponentFixture<CenterArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
