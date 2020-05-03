import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickNPayHomeComponent } from './pick-n-pay-home.component';

describe('PickNPayHomeComponent', () => {
  let component: PickNPayHomeComponent;
  let fixture: ComponentFixture<PickNPayHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickNPayHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickNPayHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
