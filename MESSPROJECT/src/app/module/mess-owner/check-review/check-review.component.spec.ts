import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckReviewComponent } from './check-review.component';

describe('CheckReviewComponent', () => {
  let component: CheckReviewComponent;
  let fixture: ComponentFixture<CheckReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
