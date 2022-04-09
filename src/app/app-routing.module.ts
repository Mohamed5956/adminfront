
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Admin/home/home.component';
import { AllproductsComponent } from './Components/Admin/products/allproducts/allproducts.component';
import { CategoryComponent } from './Components/category/category.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrdersComponent } from './Components/orders/orders.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,
  children:[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'products', component:AllproductsComponent},
  {path:'categories', component:CategoryComponent},
  {path:'orders', component:OrdersComponent}
  ]
  },
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
