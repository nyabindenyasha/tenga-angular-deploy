import { Component, OnInit, Input } from '@angular/core';
import { ProductCommodity } from '../../../models/product/product-commodity';
import { TableCompose } from '../../../provider/table/table-compose';
import { HttpRequestComponent } from '../../../provider/http-request/http-request.component';
import { DataType } from '../../../provider/table/data-type.enum';
import { CartMockDetailsView } from '../../../models/cart/cart-mock-details-view';
import { CartMock } from '../../../models/cart/cart-mock';

@Component({
  selector: 'app-cart-v2',
  templateUrl: './cart-v2.component.html',
  styleUrls: ['./cart-v2.component.css']
})
export class CartV2Component implements OnInit {

  cartDetails: CartMockDetailsView[];
  cartMockDetails: CartMock[];
  tableData: TableCompose;
  productCommodityList: ProductCommodity[];

  @Input() isReload: any;

  constructor(private http: HttpRequestComponent) { }

  ngOnInit() {
    console.log("cart init: ", this.isReload);    
    this.getAll();
  }

  getAll(){
      this.http.get('cartMock', (results) => {     
        setTimeout(() => {
          this.loadCartMockDetails(results);   
        }, 500)
 
    });

    setTimeout(() => {
      this.http.get('cartMock/getCartDetails', (products) => { 
        console.log(products);   
        this.loadCartMockDetailsView(products)
      }) 
    }, 1500);
  
  }

  loadCartMockDetails(results){
    console.log(results); 
    this.cartMockDetails = results;
  }
 
  mapCartMockDetailsView(id: number): CartMock {
    return this.cartMockDetails.find(x => x.productCommodityId == id);
  }

  loadCartMockDetailsView(results: CartMockDetailsView[]) {
    this.cartDetails = results;
    console.log(this.cartDetails); 
    // this.productCommodityList = results.productCommodityList;
 //   this.cartDetails.forEach(x => x.productCommodityList = x.productCommodityList.forEach(y => y.cartMork = this.mapCartMockDetailsView(y.id)));
  }

  
  onCheckOut(event) {

  }

  onClearCart(event) {

  }

  onClearItem(event) {

  }

  onIncreaseQuantity(event) {
    console.log(event);    
  }

  onDecreaseQuantity(event) {
    console.log(event);
  }

}
