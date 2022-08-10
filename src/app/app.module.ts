import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: "home", component: ProductListComponent },
  { path: "product/:id", component: ProductComponent },
  { path: "cart", component: OrderComponent },
  { path: "**" , redirectTo: 'home'}

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
