import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateSumComponent } from './calculate-sum.component';

describe('CalculateSumComponent', () => {
  let component: CalculateSumComponent;
  let fixture: ComponentFixture<CalculateSumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateSumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
