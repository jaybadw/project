import { ProductsService } from './products.service';
import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  prices=['12.99','10.99','11.99','13.99','14.99','15.99'];

  pizzaz:any;
  
  products: any;

  wraps:any;

 


  

  constructor(private productsService: ProductsService, private router: Router) { }

  
  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.pizzaz = this.productsService.getPizza();
    this.wraps = this.productsService.getWraps();
    
  }

}
