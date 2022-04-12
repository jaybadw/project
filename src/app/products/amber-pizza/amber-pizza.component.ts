import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-amber-pizza',
  templateUrl: './amber-pizza.component.html',
  styleUrls: ['./amber-pizza.component.css']
})
export class AmberPizzaComponent implements OnInit {
 
 

  
  pizzaz:any;
  
  products: any;

  wraps:any;

 
  

  constructor(private productsService: ProductsService) { }

  
  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.pizzaz = this.productsService.getPizza();
    this.wraps = this.productsService.getWraps();
  }
}
