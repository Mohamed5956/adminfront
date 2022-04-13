
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
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:LayoutComponent,

  children:[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'products', component:AllProductsComponent,canActivate:[AuthGuard]},
  {path:'product/add',component:AddProductComponent,canActivate:[AuthGuard]},
  {path:'products/edit/:id',component:EditProductComponent,canActivate:[AuthGuard]},
  {path:'getproducts/:id',component:AllProductsComponent,canActivate:[AuthGuard]},
  {path:'categories', component:CategoryComponent,canActivate:[AuthGuard]},
  {path:'add-category',component:AddCategoryComponent,canActivate:[AuthGuard]},
  {path:'edit-category/:cid',component:EditCategoryComponent,canActivate:[AuthGuard]},
  {path:'orders', component:OrdersComponent,canActivate:[AuthGuard]},
  {path:'orders/:oid',component:ViewOrderComponent,canActivate:[AuthGuard]},
  {path:'order-history',component:OrderHistoryComponent,canActivate:[AuthGuard]},
  {path:'usersAdmin' , component:UsersComponent,canActivate:[AuthGuard]},
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
