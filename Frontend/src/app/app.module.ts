import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardTemplateComponent } from './card/card-template/card-template.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './shared/product.service';
import { CartComponent } from './cart/cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';


const appRoutes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'card-templates', component: CardTemplateComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent }
] 
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    NavBarComponent,
    CardTemplateComponent,
    ProductDetailComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
