import { Component, OnInit } from '@angular/core';
import { ProductCommodity } from '../../../models/product/product-commodity';
import { TableCompose } from '../../../provider/table/table-compose';
import { HttpRequestComponent } from '../../../provider/http-request/http-request.component';
import { DataType } from '../../../provider/table/data-type.enum';
import swal from 'sweetalert2';
import { Shops } from '../../../models/shops/shop';

@Component({
  selector: 'app-greens',
  templateUrl: './greens.component.html',
  styleUrls: ['./greens.component.scss']
})
export class GreensComponent implements OnInit {

  productCommodityDetails: ProductCommodity[] = [];
  shopsDetails: Shops[] = [];
  tableData: TableCompose;
  selected: any;
  isAdd: boolean;
  btnLeft: any;

  constructor(private http: HttpRequestComponent) {
  }

  getAll(){
    this.http.get('/shops', (shops) => {
      this.shopsDetails = shops;
    })
    this.http.get('/productsCommodities', (products) => {
      console.log(products);
      
      this.loadProducts(products);
    })
  }

  setButtons() {
    this.btnLeft = [
        { title: 'Add To Cart', color: 'primary-color', isVerify: true, name: '', action: 'activated', activate: true },
    ]
}

  mapShop(shopId: number): Shops {
    return this.shopsDetails.find(type => type.id == shopId);
  }

  ngOnInit() {
    this.getAll();
  }

  loadProducts(productCommodity: ProductCommodity[]) {

    productCommodity.forEach(prod => prod.shopName = this.mapShop(prod.shopId));

    this.productCommodityDetails = productCommodity.filter(x => x.shopId == 1)

   // this.productCommodityDetails = productCommodity;
    this.tableData = new TableCompose()
      .composeHeader('id', 'Id', DataType.Plain)
      .composeHeader('name', 'Name', DataType.Plain)
      .composeHeader('price', 'Price', DataType.Plain)
      .setBody(this.productCommodityDetails);
  }

  itemClick(item) {
    this.selected = item;
    this.isAdd = false;
    this.setButtons();
  }

  addClick() {
    this.selected = {};
    this.isAdd = true;
  }

  editClick(item) {
    this.selected = item;
    this.isAdd = true;
  }

  deleteClick(item: ProductCommodity) {
    this.http.delete('/bank/' + item.id, (result) => {
      swal('', result.message, 'success');
      this.reloadProducts(result)
    });
  }

  reloadProducts($event) {
    this.getAll();
    this.isAdd = false;
    this.selected = null;
  }

  addToCart(event){
    console.log(event);   
  }

}
