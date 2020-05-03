import { Component, OnInit } from '@angular/core';
import { HttpRequestComponent } from '../../provider/http-request/http-request.component';
import { ProductCommodity } from '../../models/product/product-commodity';

@Component({
  selector: 'app-product-commodity',
  templateUrl: './product-commodity.component.html',
  styleUrls: ['./product-commodity.component.scss']
})
export class ProductCommodityComponent implements OnInit {

  constructor(private http: HttpRequestComponent) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.http.get('/productsCommodities', (products) => {
      this.loadProducts(products);
    })
  }

  loadProducts(productCommodity: ProductCommodity[]) {
    console.log(productCommodity); 
    // this.tableData = new TableCompose()
    //   .composeHeader('id', 'Id', DataType.Plain)
    //   .composeHeader('name', 'Name', DataType.Plain)
    //   .composeHeader('price', 'Price', DataType.Plain)
    //   .setBody(productCommodity);
  }

}
