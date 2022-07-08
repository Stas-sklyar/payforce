import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenariosComparisonComponent } from './scenarios-comparison.component';

describe('ScenariosComparisonComponent', () => {
  let component: ScenariosComparisonComponent;
  let fixture: ComponentFixture<ScenariosComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenariosComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenariosComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
