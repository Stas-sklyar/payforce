import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUnitDetailsSummaryComponent } from './business-unit-details-summary.component';

describe('BusinessUnitDetailsSummaryComponent', () => {
  let component: BusinessUnitDetailsSummaryComponent;
  let fixture: ComponentFixture<BusinessUnitDetailsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessUnitDetailsSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUnitDetailsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
