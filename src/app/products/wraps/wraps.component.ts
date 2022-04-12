import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-wraps',
  templateUrl: './wraps.component.html',
  styleUrls: ['./wraps.component.css']
})
export class WrapsComponent implements OnInit {

  pizzaz:any;
  
  products: any;

  wraps:any;

 

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.wraps = this.productsService.getWraps();
  }

}
