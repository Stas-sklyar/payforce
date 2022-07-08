import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJobPositionComponent } from './edit-job-position.component';

describe('EditJobPositionComponent', () => {
  let component: EditJobPositionComponent;
  let fixture: ComponentFixture<EditJobPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJobPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJobPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
