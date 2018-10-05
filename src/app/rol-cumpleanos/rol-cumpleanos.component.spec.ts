import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolCumpleanosComponent } from './rol-cumpleanos.component';

describe('RolCumpleanosComponent', () => {
  let component: RolCumpleanosComponent;
  let fixture: ComponentFixture<RolCumpleanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolCumpleanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolCumpleanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
