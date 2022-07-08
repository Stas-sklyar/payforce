import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanRessourcesHealthcheckComponent } from './human-ressources-healthcheck.component';

describe('HumanRessourcesHealthcheckComponent', () => {
  let component: HumanRessourcesHealthcheckComponent;
  let fixture: ComponentFixture<HumanRessourcesHealthcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanRessourcesHealthcheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanRessourcesHealthcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
