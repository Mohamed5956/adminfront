import { ProductsService } from './../../../../Services/products.service';
import { Products } from './../../../../Models/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  products :Products[]=[];
  constructor(private productservice:ProductsService) { }

  ngOnInit(): void {

    this.productservice.getProducts().subscribe(e =>
    {

      console.log(e);

    });
  }

}
