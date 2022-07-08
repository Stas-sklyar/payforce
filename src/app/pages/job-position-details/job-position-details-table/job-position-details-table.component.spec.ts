import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPositionDetailsTableComponent } from './job-position-details-table.component';

describe('JobPositionDetailsTableComponent', () => {
  let component: JobPositionDetailsTableComponent;
  let fixture: ComponentFixture<JobPositionDetailsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPositionDetailsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPositionDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
