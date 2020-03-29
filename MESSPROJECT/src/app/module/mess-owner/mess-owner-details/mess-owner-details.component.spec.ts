import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessOwnerDetailsComponent } from './mess-owner-details.component';

describe('MessOwnerDetailsComponent', () => {
  let component: MessOwnerDetailsComponent;
  let fixture: ComponentFixture<MessOwnerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessOwnerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessOwnerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
