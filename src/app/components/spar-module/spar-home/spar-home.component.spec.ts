import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparHomeComponent } from './spar-home.component';

describe('SparHomeComponent', () => {
  let component: SparHomeComponent;
  let fixture: ComponentFixture<SparHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
