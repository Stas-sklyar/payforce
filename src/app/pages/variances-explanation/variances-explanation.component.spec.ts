import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariancesExplanationComponent } from './variances-explanation.component';

describe('VariancesExplanationComponent', () => {
  let component: VariancesExplanationComponent;
  let fixture: ComponentFixture<VariancesExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariancesExplanationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariancesExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
