import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappinessIndicatorComponent } from './happiness-indicator.component';

describe('HappinessIndicatorComponent', () => {
  let component: HappinessIndicatorComponent;
  let fixture: ComponentFixture<HappinessIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappinessIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappinessIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
