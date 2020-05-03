import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorNestedComponent } from './actor-nested.component';

describe('ActorNestedComponent', () => {
  let component: ActorNestedComponent;
  let fixture: ComponentFixture<ActorNestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorNestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
