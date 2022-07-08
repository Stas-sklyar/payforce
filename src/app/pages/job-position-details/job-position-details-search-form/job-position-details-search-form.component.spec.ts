import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPositionDetailsSearchFormComponent } from './job-position-details-search-form.component';

describe('JobPositionDetailsSearchFormComponent', () => {
  let component: JobPositionDetailsSearchFormComponent;
  let fixture: ComponentFixture<JobPositionDetailsSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPositionDetailsSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPositionDetailsSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
