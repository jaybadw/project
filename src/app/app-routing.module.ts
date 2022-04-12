import { WrapsComponent } from './products/wraps/wraps.component';
import { ProductsComponent } from './products/products.component';
import { OptionsComponent } from './options/options.component';
import { GazaComponent } from './gaza/gaza.component';
import { AmberPizzaComponent } from './products/amber-pizza/amber-pizza.component';
import { AboutComponent } from './about/about.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectnavComponent } from './projectnav/projectnav.component';


const routes: Routes = [
  // {path:'about', component:AboutComponent},
  {path:'about', component:AboutComponent},
  {path:'amberPizza', component: AmberPizzaComponent},
  {path:'', component:GazaComponent},
  {path:'services', component: OptionsComponent},
  {path:'deliveryOptions', component:ProductsComponent},
  {path:'wraps',component:WrapsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
