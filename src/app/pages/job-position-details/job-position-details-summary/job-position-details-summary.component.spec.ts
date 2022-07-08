import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPositionDetailsSummaryComponent } from './job-position-details-summary.component';

describe('JobPositionDetailsSummaryComponent', () => {
  let component: JobPositionDetailsSummaryComponent;
  let fixture: ComponentFixture<JobPositionDetailsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPositionDetailsSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPositionDetailsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
