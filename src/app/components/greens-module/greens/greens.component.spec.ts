import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreensComponent } from './greens.component';

describe('GreensComponent', () => {
  let component: GreensComponent;
  let fixture: ComponentFixture<GreensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
