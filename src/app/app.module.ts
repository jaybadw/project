import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectnavComponent } from './projectnav/projectnav.component';
import { MyformComponent } from './myform/myform.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GazaComponent } from './gaza/gaza.component';
import { OptionsComponent } from './options/options.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { AmberPizzaComponent } from './products/amber-pizza/amber-pizza.component';
import { RouterModule } from '@angular/router';
import { WrapsComponent } from './products/wraps/wraps.component';
import { ChickenComponent } from './products/chicken/chicken.component';
@NgModule({
  declarations: [
    AppComponent,
    ProjectnavComponent,
    MyformComponent,
    WelcomeComponent,
    GazaComponent,
    OptionsComponent,
    ProductsComponent,
    AboutComponent,
    AmberPizzaComponent,
    WrapsComponent,
    ChickenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
