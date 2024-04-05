import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBonusDetailsComponent } from './show-bonus-details.component';

describe('ShowBonusDetailsComponent', () => {
  let component: ShowBonusDetailsComponent;
  let fixture: ComponentFixture<ShowBonusDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowBonusDetailsComponent]
    });
    fixture = TestBed.createComponent(ShowBonusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
