import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPositionDetailsComponent } from './job-position-details.component';

describe('JobPositionDetailsComponent', () => {
  let component: JobPositionDetailsComponent;
  let fixture: ComponentFixture<JobPositionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPositionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPositionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
