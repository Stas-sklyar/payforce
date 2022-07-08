import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPositionDetailsAbsencesComponent } from './job-position-details-absences.component';

describe('JobPositionDetailsAbsencesComponent', () => {
  let component: JobPositionDetailsAbsencesComponent;
  let fixture: ComponentFixture<JobPositionDetailsAbsencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPositionDetailsAbsencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPositionDetailsAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
