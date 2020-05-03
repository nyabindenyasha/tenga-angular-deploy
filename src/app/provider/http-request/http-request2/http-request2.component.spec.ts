import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpRequest2Component } from './http-request2.component';

describe('HttpRequest2Component', () => {
  let component: HttpRequest2Component;
  let fixture: ComponentFixture<HttpRequest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpRequest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpRequest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
