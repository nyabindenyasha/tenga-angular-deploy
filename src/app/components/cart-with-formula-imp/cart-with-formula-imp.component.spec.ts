import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartWithFormulaImpComponent } from './cart-with-formula-imp.component';

describe('CartWithFormulaImpComponent', () => {
  let component: CartWithFormulaImpComponent;
  let fixture: ComponentFixture<CartWithFormulaImpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartWithFormulaImpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartWithFormulaImpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
