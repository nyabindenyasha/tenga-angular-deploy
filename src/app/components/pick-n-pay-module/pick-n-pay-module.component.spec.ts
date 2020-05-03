import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickNPayModuleComponent } from './pick-n-pay-module.component';

describe('PickNPayModuleComponent', () => {
  let component: PickNPayModuleComponent;
  let fixture: ComponentFixture<PickNPayModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickNPayModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickNPayModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
