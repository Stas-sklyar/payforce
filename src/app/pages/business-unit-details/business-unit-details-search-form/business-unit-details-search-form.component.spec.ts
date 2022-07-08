import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUnitDetailsSearchFormComponent } from './business-unit-details-search-form.component';

describe('BusinessUnitDetailsSearchFormComponent', () => {
  let component: BusinessUnitDetailsSearchFormComponent;
  let fixture: ComponentFixture<BusinessUnitDetailsSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessUnitDetailsSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUnitDetailsSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
