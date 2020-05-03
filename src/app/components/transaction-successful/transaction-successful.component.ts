import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transaction-successful',
  templateUrl: './transaction-successful.component.html',
  styleUrls: ['./transaction-successful.component.css']
})
export class TransactionSuccessfulComponent implements OnInit {

  @Output() transactionSuccessfulClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  
  signInSubmit(event){
    console.log(event);
    this.transactionSuccessfulClick.emit(event);
  }

}
