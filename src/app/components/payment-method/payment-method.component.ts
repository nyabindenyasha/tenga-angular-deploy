import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {
  @Output() paymentMethodClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  paymentMethod(event){
    console.log(event);
    this.paymentMethodClick.emit(event);
  }

}
