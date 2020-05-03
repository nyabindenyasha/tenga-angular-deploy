import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  @Output() paymentDetailsClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  
  onLoginFormSubmit(event){
    console.log(event);
    this.paymentDetailsClick.emit(event);
  }
}
 