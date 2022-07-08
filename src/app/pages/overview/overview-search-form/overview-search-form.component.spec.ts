import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewSearchFormComponent } from './overview-search-form.component';

describe('OverviewSearchFormComponent', () => {
  let component: OverviewSearchFormComponent;
  let fixture: ComponentFixture<OverviewSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
