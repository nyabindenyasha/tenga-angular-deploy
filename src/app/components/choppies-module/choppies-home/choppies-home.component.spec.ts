import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoppiesHomeComponent } from './choppies-home.component';

describe('ChoppiesHomeComponent', () => {
  let component: ChoppiesHomeComponent;
  let fixture: ComponentFixture<ChoppiesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoppiesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoppiesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
