import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomIconForSelectComponent } from './custom-icon-for-select.component';

describe('CustomIconForSelectComponent', () => {
  let component: CustomIconForSelectComponent;
  let fixture: ComponentFixture<CustomIconForSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomIconForSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomIconForSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
