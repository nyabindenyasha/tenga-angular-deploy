import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartFakeData } from '../../models/cart/cart-fake-data';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  @Output() checkOutClick = new EventEmitter<any>();

  cartDetails = new CartFakeData().cartDetails;
  // cartDataTemp: CartFakeData;
  cartDataTemp: any;

  constructor() { }

  ngOnInit() {
  }

  onCheckOut(event) {
    this.checkOutClick.emit(event);
  }

  onClearCart(event) {

  }

  onClearItem(event) {

  }

  onIncreaseQuantity(event) {
    console.log(event);
    this.cartDataTemp = this.cartDetails.find((x) => {
      return x.productCommodityName == event.productCommodityName;
    })
    // this.quantity++;
    console.log(this.cartDataTemp);
    
    this.cartDataTemp.quantity++;
  }

  onDecreaseQuantity(event) {
    console.log(event);
    //  this.quantity--;
  }

}

class CartDetails {
  productCommodityName: string;
  price: number;
  quantity: number;
  subTotal: number;
}
