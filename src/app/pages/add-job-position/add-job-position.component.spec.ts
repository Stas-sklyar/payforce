import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobPositionComponent } from './add-job-position.component';

describe('AddJobPositionComponent', () => {
  let component: AddJobPositionComponent;
  let fixture: ComponentFixture<AddJobPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJobPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
