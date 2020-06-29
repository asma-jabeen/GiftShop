import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardTemplateComponent } from './card/card-template/card-template.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

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
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
