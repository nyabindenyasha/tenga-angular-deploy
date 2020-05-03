import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreensHomeComponent } from './greens-home.component';

describe('GreensHomeComponent', () => {
  let component: GreensHomeComponent;
  let fixture: ComponentFixture<GreensHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreensHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreensHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
