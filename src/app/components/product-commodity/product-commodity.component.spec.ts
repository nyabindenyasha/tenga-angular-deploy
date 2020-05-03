import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCommodityComponent } from './product-commodity.component';

describe('ProductCommodityComponent', () => {
  let component: ProductCommodityComponent;
  let fixture: ComponentFixture<ProductCommodityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCommodityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCommodityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
