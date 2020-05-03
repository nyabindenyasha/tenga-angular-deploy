import { Component, OnInit, Input } from '@angular/core';
import { HttpRequestComponent } from '../../provider/http-request/http-request.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartDetails: any;
  cart: any;
  @Input() isReload: any;

  constructor(private http: HttpRequestComponent) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.http.get('cartMock/getCartDetails', (results) => {
      setTimeout(() => {
        this.loadCart(results);
      }, 1500)

    });
  }

  loadCart(results) {
    console.log(results);
    this.cartDetails = results;

    this.loopCart();
  }

  loopCart() {
    this.cartDetails.forEach(x => {
      var subTotal: number = 0;
      x.productCommodity.forEach(y => {
        subTotal = subTotal + (y.price * y.quantity);
      });
      x.shopTotal = subTotal;
    });
    console.log(this.cartDetails);
  }

  onIncreaseQuantity(f) {
    console.log(f);
    f.quantity++;
    this.http.post('cartMock/quantity/' + f.quantity, f, (result) => {
      console.log(result);
    });
  }

  onDecreaseQuantity(f) {
    f.quantity--;
    this.http.post('cartMock/quantity/' + f.quantity, f, (result) => {
      console.log(result);
    });
  }

  onClearItem(f) {
    this.http.delete('cartMock/deleteByProdCommId/' + f.id, (result) => {
      console.log(result);
      this.reload();
    })
  }

  reload() {
    this.getAll();
  }

  onClearCart() {
    console.log('clear cart');
  }

  onCheckOut() {
    console.log('on check out');
  }

}
