import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPositionDetailsAdvantagesComponent } from './job-position-details-advantages.component';

describe('JobPositionDetailsAdvantagesComponent', () => {
  let component: JobPositionDetailsAdvantagesComponent;
  let fixture: ComponentFixture<JobPositionDetailsAdvantagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPositionDetailsAdvantagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPositionDetailsAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
