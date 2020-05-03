import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoppiesModuleComponent } from './choppies-module.component';

describe('ChoppiesModuleComponent', () => {
  let component: ChoppiesModuleComponent;
  let fixture: ComponentFixture<ChoppiesModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoppiesModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoppiesModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
