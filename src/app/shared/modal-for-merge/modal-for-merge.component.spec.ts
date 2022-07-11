import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalForMergeComponent } from './modal-for-merge.component';

describe('ModalForMergeComponent', () => {
  let component: ModalForMergeComponent;
  let fixture: ComponentFixture<ModalForMergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalForMergeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalForMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
