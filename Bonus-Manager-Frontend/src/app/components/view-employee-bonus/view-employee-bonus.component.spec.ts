import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeBonusComponent } from './view-employee-bonus.component';

describe('ViewEmployeeBonusComponent', () => {
  let component: ViewEmployeeBonusComponent;
  let fixture: ComponentFixture<ViewEmployeeBonusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEmployeeBonusComponent]
    });
    fixture = TestBed.createComponent(ViewEmployeeBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
