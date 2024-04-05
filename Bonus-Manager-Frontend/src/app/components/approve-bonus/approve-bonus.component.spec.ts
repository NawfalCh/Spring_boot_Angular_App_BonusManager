import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveBonusComponent } from './approve-bonus.component';

describe('ApproveBonusComponent', () => {
  let component: ApproveBonusComponent;
  let fixture: ComponentFixture<ApproveBonusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproveBonusComponent]
    });
    fixture = TestBed.createComponent(ApproveBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
