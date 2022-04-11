import { Router } from '@angular/router';
import { Category } from './../../../Models/category';
import { Products } from './../../../Models/products';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product:Products={} as Products;
  categorylist:Category[]=[];
  add:number=0;

  constructor(private productservice:ProductsService,private router:Router , private categoryservice:CategoryService) { }

  ngOnInit(): void {
    this.categoryservice.getAllCategories().subscribe(e => {
      this.categorylist = e;
      //JSON.stringify(catList);
      console.log(e);
    });

  }

    Add()
    {
    this.productservice.addproduct(this.product).subscribe(
      {next:(data)=>{

        this.add=1;
        console.log(data);

      this.router.navigate(['/products/add']);
      }

     });
   }

}
