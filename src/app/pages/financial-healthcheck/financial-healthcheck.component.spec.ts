import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialHealthcheckComponent } from './financial-healthcheck.component';

describe('FinancialHealthcheckComponent', () => {
  let component: FinancialHealthcheckComponent;
  let fixture: ComponentFixture<FinancialHealthcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialHealthcheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialHealthcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
