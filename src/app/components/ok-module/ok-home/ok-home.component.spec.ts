import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkHomeComponent } from './ok-home.component';

describe('OkHomeComponent', () => {
  let component: OkHomeComponent;
  let fixture: ComponentFixture<OkHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
