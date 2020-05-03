import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor-nested',
  templateUrl: './actor-nested.component.html',
  styleUrls: ['./actor-nested.component.css']
})
export class ActorNestedComponent implements OnInit {

  actors: any;
  cart: any;
  shops: any = [];

  constructor() { }

  ngOnInit() {
    this.actors = [{
      name: 'Nyasha1',
      dob: '01/11/1994',
      filmography: [
        {name: 'Nyasha1 Film1', year: '2002'},
        {name: 'Nyasha1 Film2', year: '2004'},
        {name: 'Nyasha1 Film3', year: '2006'},
      ]
    },
    {
      name: 'Nyasha2',
      dob: '01/11/1995',
      filmography: [
        {name: 'Nyasha2 Film4', year: '2008'},
        {name: 'Nyasha2 Film5', year: '2010'},
        {name: 'Nyasha2 Film6', year: '2012'},
      ]
    },
    {
      name: 'Nyasha3',
      dob: '01/11/1996',
      filmography: [
        {name: 'Nyasha3 Film7', year: '2014'},
        {name: 'Nyasha3 Film8', year: '2016'},
        {name: 'Nyasha3 Film9', year: '2018'},
      ]
    }
  ],

  this.cart = [{
    shopName: 'Choppies',
    productCommodity : [
      {
      id: 3,
      name: "Amstel Larger 400ml",
      description: "Amstel larger 400ml",
      price: 20.99,
      isAvailable: true,
      categoryId: 1,
      shopId: 3,
      imageUrlId: 2,
      quantity: 2
      },
      {
      id: 8,
      name: "Lobels Loose Biscuits 2kg",
      description: "2kg Lobels Loose",
      price: 55.49,
      isAvailable: true,
      categoryId: 2,
      shopId: 3,
      imageUrlId: 5,
      quantity: 3
      }
    ]
  },
  {
    shopName: 'Spar',
    productCommodity : [
      {
        id: 3,
        name: "Smirnoff Larger 400ml",
        description: "Smirnoff larger 400ml",
        price: 20.99,
        isAvailable: true,
        categoryId: 1,
        shopId: 3,
        imageUrlId: 2,
        quantity: 2
        },
        {
        id: 8,
        name: "Arenel Loose Biscuits 2kg",
        description: "2kg Arenel Loose",
        price: 55.49,
        isAvailable: true,
        categoryId: 2,
        shopId: 3,
        imageUrlId: 5,
        quantity: 4
        }
    ]
  }
]
this.loopCart();
  }

  loopCart(){
    this.cart.forEach(x => {
      console.log(x);   
      var subTotal: number = 0;   
      x.productCommodity.forEach(y => {
        console.log(y);   
        subTotal = subTotal + (y.price*y.quantity);
      });
      console.log(subTotal);        
      x.shopTotal = subTotal;   
      // this.shops.push(x.shopName);
    }); 
    console.log(this.cart);
    
  }

}
