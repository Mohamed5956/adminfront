import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Admin/header/header.component';
import { FooterComponent } from './Components/Admin/footer/footer.component';
import { SidebarComponent } from './Components/Admin/sidebar/sidebar.component';
import { HomeComponent } from './Components/Admin/home/home.component';
import { CategoryComponent } from './Components/category/category.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllproductsComponent } from './Components/Admin/products/allproducts/allproducts.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { AddCategoryComponent } from './Components/category/add-category/add-category.component';
import { EditCategoryComponent } from './Components/category/edit-category/edit-category.component';
import { ViewOrderComponent } from './Components/orders/view-order/view-order.component';
import { OrderHistoryComponent } from './Components/orders/order-history/order-history.component';
import { UsersComponent } from './Components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    CategoryComponent,
    NotFoundComponent,
    OrdersComponent,
    AllproductsComponent,
    LayoutComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ViewOrderComponent,
    OrderHistoryComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
