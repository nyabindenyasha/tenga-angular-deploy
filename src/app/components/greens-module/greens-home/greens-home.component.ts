import { Component, OnInit } from '@angular/core';
import { HttpRequestComponent } from '../../../provider/http-request/http-request.component';
import { ProductCommodity } from '../../../models/product/product-commodity';
import { TableCompose } from '../../../provider/table/table-compose';
import { CommodityCategory } from '../../../models/product/commodity-category';
import { DataType } from '../../../provider/table/data-type.enum';
import { CartRequest } from '../../../models/cart/cart-request';
import { Customer } from '../../../models/customer';
import { CartMockRequest } from '../../../models/cart/cart-mock-request';
import { CartComponent } from '../../cart/cart.component';
import { ShopEnum } from '../../../enums/shops';
import { ShopNameEnum } from '../../../enums/shops-name';
import { Router } from '@angular/router';

@Component({
  selector: 'app-greens-home',
  templateUrl: './greens-home.component.html',
  styleUrls: ['./greens-home.component.scss']
})
export class GreensHomeComponent implements OnInit {
  tableData: TableCompose;
  tableData2: TableCompose;
  tableData3: TableCompose;
  tableData4: TableCompose;
  selected: any;
  isAdd: boolean;
  commodityCategories: CommodityCategory[];
  productCommoditiesList: ProductCommodity[];
  productCommodityDetails: ProductCommodity[];
  isSelected: boolean = false;
  btnLeft: any;
  subTitle: string;
  imageUrl: string;
  isReload = false;
  formViewTitle: string;
  isCheckout: boolean = false;
  isPayment: boolean = false;
  isTransactionSuccessful: boolean = false;

  cartMockRequest: CartMockRequest = new CartMockRequest();
  customerLogged: Customer;

  elements: any[];

  constructor(private http: HttpRequestComponent, private cart: CartComponent, private router: Router) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.http.get('/commodityCategory', (commodityCategory) => {
      this.loadProducts(commodityCategory);
    })
  }

  loadProducts(commodityCategory: CommodityCategory[]) {
    console.log(commodityCategory);

    this.commodityCategories = commodityCategory;
    this.tableData = new TableCompose()
      .composeHeader('id', 'Id', DataType.Plain)
      .composeHeader('name', 'Name', DataType.Plain)
      .composeHeader('description', 'Description', DataType.Plain)
      .setBody(this.commodityCategories);
  }

  itemClick(item) {
    console.log(item);
    this.subTitle = item.name;
    this.productCommoditiesList = item.productsCommoditiesList;

    this.productCommodityDetails = this.productCommoditiesList.filter(x => x.shopId == ShopEnum.GREENS)
    
    console.log(this.productCommoditiesList);

    this.isSelected = true;

    this.tableData2 = new TableCompose()
      .composeHeader('id', 'Id', DataType.Plain)
      .composeHeader('name', 'Name', DataType.Plain)
      .setBody(this.commodityCategories);

    this.tableData3 = new TableCompose()
      .composeHeader('name', 'Name', DataType.Plain)
      .composeHeader('price', 'Price', DataType.Plain)
      .setBody(this.productCommodityDetails);

      this.tableData4 = new TableCompose()
      .composeHeader('name', 'Name', DataType.Plain)
      .composeHeader('description', 'Description', DataType.Plain)
      .composeHeader('price', 'Price', DataType.Plain)
      .setBody(this.productCommodityDetails);
  }


  itemClick3(item) {
    console.log(item);
    this.selected = item;
    this.subTitle = item.name;  
    this.formViewTitle = ShopNameEnum.GREENS;

    this.http.get('/imageUrl/' + item.imageUrlId, (result) => {
      this.imageUrl = result.imageUrl;
    });

 //   this.imageUrl = item.imageUrl;
    this.btnLeft = [
      { title: 'Add To Cart', color: 'primary-color', isVerify: true, name: '', action: 'activated', activate: true },
  ]
  }

  tableBackClick(event){
    console.log("table");  
    this.isSelected = false;  
  }

  formBackClick(event){
    this.selected = null;
    console.log("form");  
  }

  addToCart(event){
    console.log(event); 
    // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // console.log(currentUser);
    this.cartMockRequest.productCommodityId = event.id;
    this.http.post('/cartMock', this.cartMockRequest, (result) => {
   //   swal('', result.message, 'success')
      this.isReload = true;
      this.cart.ngOnInit();
    });      
  }

  checkOutClick(event){
    console.log(event);    
    this.isCheckout = true;
  }

  paymentMethodClick(){
    this.isCheckout = false;
    this.isPayment = true;
  }

  paymentDetailsClick(event){
    console.log(event);
    this.isPayment = false;
    this.isTransactionSuccessful = true;
  }

  transactionSuccessfulClick(event){
    console.log(event);
    this.router.navigate(['/home']);
  }

  }
