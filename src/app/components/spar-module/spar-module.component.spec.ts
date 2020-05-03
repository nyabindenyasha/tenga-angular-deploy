import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparModuleComponent } from './spar-module.component';

describe('SparModuleComponent', () => {
  let component: SparModuleComponent;
  let fixture: ComponentFixture<SparModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
