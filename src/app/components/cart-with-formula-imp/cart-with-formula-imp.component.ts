import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpRequestComponent } from '../../provider/http-request/http-request.component';

@Component({
  selector: 'app-cart-with-formula-imp',
  templateUrl: './cart-with-formula-imp.component.html',
  styleUrls: ['./cart-with-formula-imp.component.css']
})
export class CartWithFormulaImpComponent implements OnInit {

  cartDetails: any;
  cart: any;
  grandTotal: number;
  @Input() isReload: any;
  priceOfFuelPerLitre: number;
  distance: number = 10;
  allShopsTotal: number;
  @Output() checkOutClick = new EventEmitter<any>();  
  @Output() transactionSuccessfulClick = new EventEmitter<any>();

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
    this.http.get('cart/getPriceOfFuelPerLitre', (result) =>{
        console.log(result);        
        this.priceOfFuelPerLitre = result.priceOfFuelPerLitre;
        console.log(this.priceOfFuelPerLitre);      
    })
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
      x.shopTotalString = subTotal.toFixed(2);
      x.shopTotal = subTotal;
    });
    console.log(this.cartDetails);
  }

  getGrandTotal(){
    this.allShopsTotal = 0;
    this.cartDetails.forEach(x => {
      this.allShopsTotal = this.allShopsTotal + x.shopTotal;
    });  
    return this.allShopsTotal;
  }

  getGrandGrandTotal(){
    this.grandTotal = this.getGrandTotal() * 1.35 + (this.distance/20) * this.priceOfFuelPerLitre;
    let grandTotalString: string =  this.grandTotal.toFixed(2);
    // return this.grandTotal;
    return grandTotalString;
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

  onCheckOut(event) {
    this.checkOutClick.emit(event);
  }

}
