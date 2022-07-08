import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUnitDetailsTableComponent } from './business-unit-details-table.component';

describe('BusinessUnitDetailsTableComponent', () => {
  let component: BusinessUnitDetailsTableComponent;
  let fixture: ComponentFixture<BusinessUnitDetailsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessUnitDetailsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUnitDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
