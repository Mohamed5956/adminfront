
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Admin/home/home.component';
import { AuthComponent } from './Components/auth/auth.component';
import { AddCategoryComponent } from './Components/category/add-category/add-category.component';
import { CategoryComponent } from './Components/category/category.component';
import { EditCategoryComponent } from './Components/category/edit-category/edit-category.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderHistoryComponent } from './Components/orders/order-history/order-history.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { ViewOrderComponent } from './Components/orders/view-order/view-order.component';
import { UsersComponent } from './Components/users/users.component';
import { AddProductComponent } from './Components/products/add-product/add-product.component';
import { AllProductsComponent } from './Components/products/all-products/all-products.component';
import { EditProductComponent } from './Components/products/edit-product/edit-product.component';
import { ViewUserComponent } from './Components/users/view-user/view-user.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,
  children:[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'products', component:AllProductsComponent},
  {path:'product/add',component:AddProductComponent},
  {path:'products/edit/:id',component:EditProductComponent},
  {path:'getproducts/:id',component:AllProductsComponent},
  {path:'categories', component:CategoryComponent},
  {path:'add-category',component:AddCategoryComponent},
  {path:'edit-category/:cid',component:EditCategoryComponent},
  {path:'orders', component:OrdersComponent},
  {path:'orders/:oid',component:ViewOrderComponent},
  {path:'order-history',component:OrderHistoryComponent},
  {path:'usersAdmin' , component:UsersComponent},
  {path:'view-user/:id',component:ViewUserComponent}
  ]
  },
  {path:'login', component:AuthComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
