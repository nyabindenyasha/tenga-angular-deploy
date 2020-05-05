import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormViewComponent } from './provider/form-view/form-view.component';
import { HttpRequestComponent } from './provider/http-request/http-request.component';
import { TableViewComponent } from './provider/table/table-view/table-view.component';
import { Approutes } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpRequest2Component } from './provider/http-request/http-request2/http-request2.component';
import { TablePaginationComponent } from './provider/table/table-pagination/table-pagination.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';


import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GreensModuleComponent } from './components/greens-module/greens-module.component';
import { ChoppiesModuleComponent } from './components/choppies-module/choppies-module.component';
import { SparModuleComponent } from './components/spar-module/spar-module.component';
import { OkModuleComponent } from './components/ok-module/ok-module.component';
import { GreensHomeComponent } from './components/greens-module/greens-home/greens-home.component';
import { GreensComponent } from './components/greens-module/greens/greens.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductCommodityComponent } from './components/product-commodity/product-commodity.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { PickNPayModuleComponent } from './components/pick-n-pay-module/pick-n-pay-module.component';
import { ShopsModuleHeaderComponent } from './components/shops-module-header/shops-module-header.component';
import { ChoppiesHomeComponent } from './components/choppies-module/choppies-home/choppies-home.component';
import { OkHomeComponent } from './components/ok-module/ok-home/ok-home.component';
import { SparHomeComponent } from './components/spar-module/spar-home/spar-home.component';
import { PickNPayHomeComponent } from './components/pick-n-pay-module/pick-n-pay-home/pick-n-pay-home.component';
import { CartViewComponent } from './provider/cart-view/cart-view.component';
import { CartV2Component } from './components/cart/cart-v2/cart-v2.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { LoginV2Component } from './components/login-v2/login-v2.component';
import { ActorNestedComponent } from './components/trial/actor-nested/actor-nested.component';
import { CartWithFormulaImpComponent } from './components/cart-with-formula-imp/cart-with-formula-imp.component';
import { TransactionSuccessfulComponent } from './components/transaction-successful/transaction-successful.component';
import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { NavigationComponent2 } from './shared/header-navigation/navigation2.component';
import { TableViewSubComponent } from './provider/table/table-view-sub/table-view-sub.component';
import { AuthGuard } from './auth/guards';
import { AlertService, AuthenticationService } from './auth/services';


@NgModule({
  declarations: [
    AppComponent,
    HttpRequestComponent,
    HttpRequest2Component,
    TableViewComponent,
    TableViewSubComponent,
    TablePaginationComponent,
    FormViewComponent,
    LoadingSpinnerComponent,    
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    GreensModuleComponent,
    NavigationComponent,
    NavigationComponent2,
    ChoppiesModuleComponent,
    SparModuleComponent,
    OkModuleComponent,
    GreensHomeComponent,
    GreensComponent,
    CartComponent,
    ProductCommodityComponent,
    GettingStartedComponent,
    PickNPayModuleComponent,
    ShopsModuleHeaderComponent,
    ChoppiesHomeComponent,
    OkHomeComponent,
    SparHomeComponent,
    PickNPayHomeComponent,
    CartComponent,
    CartViewComponent,
    CartV2Component,
    PaymentMethodComponent,
    PaymentDetailsComponent,
    LoginV2Component,
    ActorNestedComponent,
    CartWithFormulaImpComponent,
    TransactionSuccessfulComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(Approutes),
  ],
  providers: [
    HttpRequestComponent,
    AuthGuard,
    CartComponent,
    AlertService,
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }