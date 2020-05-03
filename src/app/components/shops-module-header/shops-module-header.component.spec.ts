import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsModuleHeaderComponent } from './shops-module-header.component';

describe('ShopsModuleHeaderComponent', () => {
  let component: ShopsModuleHeaderComponent;
  let fixture: ComponentFixture<ShopsModuleHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopsModuleHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsModuleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
