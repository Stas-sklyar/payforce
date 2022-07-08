import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPositionDetailsAdditionalInfoComponent } from './job-position-details-additional-info.component';

describe('JobPositionDetailsAdditionalInfoComponent', () => {
  let component: JobPositionDetailsAdditionalInfoComponent;
  let fixture: ComponentFixture<JobPositionDetailsAdditionalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPositionDetailsAdditionalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPositionDetailsAdditionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
