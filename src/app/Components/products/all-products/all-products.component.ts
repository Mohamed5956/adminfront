import { Router } from '@angular/router';
import { Products } from './../../../Models/products';
import { Category } from './../../../Models/category';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{

  categories :Category[]=[];
  products :Products[]=[];
  categoryId:number=0;

  constructor(private productservice:ProductsService , private categoryservice:CategoryService ,private router:Router) { }



    ngOnInit(): void {
    this.categoryservice.getAllCategories().subscribe(category=>
    {
      this.categories=category;

    });

    this.productservice.getProducts().subscribe(products =>
    {
      this.products=products;

    });
   }


    getproducts()
    {
    this.productservice.getproducstbycategoryID(this.categoryId).subscribe(products=>
      {
        this.products=products;
        console.log(this.products);
    });
    }


      deleteproduct(productId:number)
      {
       console.log(productId);
       var result = confirm("Are you sure you want to delete?");
       if (result==true) {
           this.productservice.deleteproduct(productId).subscribe(products=>{
            this.products=products;
            console.log(products);
            this.router.navigate(['/products']);
            } );



      }

        }

}
