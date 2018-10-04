import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdaysMonthComponent } from './birthdays-month.component';

describe('BirthdaysMonthComponent', () => {
  let component: BirthdaysMonthComponent;
  let fixture: ComponentFixture<BirthdaysMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdaysMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdaysMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
