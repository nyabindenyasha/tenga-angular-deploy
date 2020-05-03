import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkModuleComponent } from './ok-module.component';

describe('OkModuleComponent', () => {
  let component: OkModuleComponent;
  let fixture: ComponentFixture<OkModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
