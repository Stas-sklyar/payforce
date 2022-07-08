import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPositionDetailsPeopleComponent } from './job-position-details-people.component';

describe('JobPositionDetailsPeopleComponent', () => {
  let component: JobPositionDetailsPeopleComponent;
  let fixture: ComponentFixture<JobPositionDetailsPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPositionDetailsPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPositionDetailsPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
