import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreensModuleComponent } from './greens-module.component';

describe('GreensModuleComponent', () => {
  let component: GreensModuleComponent;
  let fixture: ComponentFixture<GreensModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreensModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreensModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
