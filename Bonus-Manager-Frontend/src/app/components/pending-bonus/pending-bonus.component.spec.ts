import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingBonusComponent } from './pending-bonus.component';

describe('PendingBonusComponent', () => {
  let component: PendingBonusComponent;
  let fixture: ComponentFixture<PendingBonusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingBonusComponent]
    });
    fixture = TestBed.createComponent(PendingBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
