import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewSubComponent } from './table-view-sub.component';

describe('TableViewSubComponent', () => {
  let component: TableViewSubComponent;
  let fixture: ComponentFixture<TableViewSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableViewSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
