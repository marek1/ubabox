import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { CreateComponent } from './components/create/create.component';
import { NavComponent } from './components/nav/nav.component';
import { PaypalComponent } from './components/paypal/paypal.component';
import { CartService } from './service/cart.service';
import { SelectedProductsComponent } from './components/selected-products/selected-products.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { ProductVariationComponent } from './components/product-variation/product-variation.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CartComponent,
    CreateComponent,
    NavComponent,
    PaypalComponent,
    SelectedProductsComponent,
    AddressFormComponent,
    ProductVariationComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
